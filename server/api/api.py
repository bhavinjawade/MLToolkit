import os
import json
import pymongo
import datetime
from bson import json_util
from flask import Flask, request, jsonify, flash, redirect, url_for, send_from_directory
from flask.templating import render_template
import flask
from werkzeug.utils import secure_filename
from celery_task import run_pipeline
import pandas as pd
from pandasql import sqldf, load_meat, load_births
import pandasql
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)
from flask_cors import CORS, cross_origin
from werkzeug.security import safe_str_cmp


app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'updated-at-deployment'
jwt = JWTManager(app)
app.config["MONGO_URI"] = "mongodb://localhost:27017/"
mongo = pymongo.MongoClient(app.config["MONGO_URI"])
collection = mongo["chemml_projects"]["projects"]
user_collection = mongo["chemml_projects"]["users"]
app.config["UPLOAD_FOLDER"] = './project_files/'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
IMAGE_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'svg'}
DOCUMENT_EXTENSIONS = {'csv','tsv','pdf'}
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type, Authorization'


status_codes = {
    "200": {
            'success':True,
            'status_code': 200, 
            'ContentType':'application/json'
            },
    "404": {
            'success':False,
            'status_code': 404,
            'ContentType': 'application/json'
            },
    "400": {
            'success':False,
            'status_code': 400,
            'ContentType': 'application/json'
            }
}

@app.route('/login', methods=['POST'])
@cross_origin()
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get('username', None)
    password = request.json.get('password', None)
    print(username, password)
    if not username:
        return jsonify({"msg": "Missing username parameter"}), 400
    if not password:
        return jsonify({"msg": "Missing password parameter"}), 400

    cursor = user_collection.find({'username':username})
    user = None
    for u in cursor:
        user = u
        break 
    
    if(user == None):
        return jsonify({"msg": "User doesnot exists"}), 401

    if username != user["username"] or password != user["password"]:
        return jsonify({"msg": "Bad username or password"}), 401

    # Identity can be any data that is json serializable
    access_token = create_access_token(identity=username)
    response = flask.Response(
                    json.dumps({
                    "access_token": access_token,
                    "status": status_codes["200"]
                    },default=json_util.default)
                    )    
    return response

@app.route('/login_test/', methods=['POST'])
@jwt_required
def protected():
    data = request.json.get('data', None)
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    print(current_user,flush=True)
    return jsonify(data=data, logged_in_as=current_user), 200

@app.route("/projects/n/<project_name>",methods=['GET','POST'])
def new_project(project_name):
    today = datetime.datetime.today()
    json_data = json.loads(str(request.data, encoding='utf-8'))
    content = json_data
    json_data = content["data"]
    tag_list = content["tags"]
    dic = {
        "project_name": project_name,
        "project_desc": json_data,
        "created_date": today,
        "config": {
            "file": "/users/chemml/file.txt"
        },
        "project_properties": {
            "tag_list": tag_list
        },
        "users": "bhavinjawade",
        "files": {},
        "results": {},
        "graph": {}
        }    
    if(collection.insert_one(dic)): 
        status = "200"
    
    response = flask.Response(json.dumps({"data": dic,
                    "status": status_codes[status]},
                    default=json_util.default))
     
    return response

@app.route("/projects/a/")
@jwt_required
@cross_origin()
def get_projects_list():
    cursor = collection.find({'users':get_jwt_identity()})
    project_list = []

    for project in cursor:
        project_list.append(project)

    if(len(project_list) >= 0):
        status = "200"
    
    response = flask.Response(json.dumps({"data": project_list, 
                        "status": status_codes[status]},
                        default=json_util.default))
    return response

@app.route("/projects/g/<project_name>")
@jwt_required
@cross_origin()
def get_project(project_name):
    cursor = collection.find({'project_name':project_name, 'users':get_jwt_identity()})
    project = []

    for i in cursor:
        project = i

    if(len(project) >= 0):
        status = "200"
    
    response = flask.Response(json.dumps({"data": project, 
                        "status": status_codes[status]},
                        default=json_util.default))
    
    return response

@app.route("/projects/u/<project_name>",methods=['GET','POST'])
@jwt_required
@cross_origin()
def update_project(project_name):
    json_data = json.loads(str(request.data, encoding='utf-8'))
    content = json_data["data"]
    cursor = collection.find({'project_name':project_name, 'users':get_jwt_identity()})
    project = []
    for project in cursor:
        project["project_desc"] = content["project_desc"]
        project["project_name"] = content["project_name"]
        project["project_properties"]["tag_list"] = content["project_properties"]["tag_list"]
        collection.update(
                                { "_id": project["_id"] },
                                { "$set":
                                    {
                                        "project_desc": content["project_desc"],
                                        "project_name": content["project_name"],
                                        "project_properties": content["project_properties"]
                                    },
                                    "$currentDate":{"lastModified":True}
                                }
                                )
    if(len(project) >= 0):
        status = "200"
    
    response = flask.Response(json.dumps({"data": project, 
                        "status": status_codes[status]},
                        default=json_util.default))
    
    return response

@app.route('/get_file/<project_name>/<file_name>')
@jwt_required
@cross_origin()
def get_image(project_name,file_name):
    try:
        response = send_from_directory(app.config["UPLOAD_FOLDER"] + '/' + project_name, filename=file_name, as_attachment=True)
        
        return response;
    except FileNotFoundError:
        abort(404)

@app.route('/get_query_preview/<project_name>/<csv_name>',methods=['GET','POST'])
@jwt_required
@cross_origin()
def get_query_preview(project_name,csv_name):
    json_data = json.loads(str(request.data, encoding='utf-8'))
    content = json_data["data"]
    query = content["query"]
    cursor = collection.find({'project_name':project_name, 'users':get_jwt_identity()})
    table_names = []
    files = []
    for project in cursor:
        files = list(project["files"].keys())
        break
    sql = pandasql.PandaSQL()
    data_frames = []

    for table_name in files:
        if(table_name.endswith(".csv")):
            table_names.append(table_name.split(".")[0])
            data_frames.append(pd.read_csv("./project_files/" + project_name + "/" + table_name))

    env = {""+table_names[i]: df for i, df in enumerate(data_frames)}
    print("======>",env.keys())
    df = sql(query, env=env)
    csv_str = df.to_csv(index=False)
    status = "200"
    response = flask.Response(json.dumps({"data": csv_str,
                "status": status_codes[status]},
                default=json_util.default))
    
    return response;


@app.route('/run_sql_query/<project_name>/<csv_name>',methods=['GET','POST'])
@jwt_required
@cross_origin()
def run_sql_query(project_name,csv_name):
    json_data = json.loads(str(request.data, encoding='utf-8'))
    content = json_data["data"]
    query = content["query"]
    cursor = collection.find({'project_name':project_name, 'users':get_jwt_identity()})
    table_names = []
    files = []
    for project in cursor:
        files = list(project["files"].keys())
        break
    sql = pandasql.PandaSQL()
    data_frames = []

    for table_name in files:
        if(table_name.endswith(".csv")):
            table_names.append(table_name.split(".")[0])
            data_frames.append(pd.read_csv("./project_files/" + project_name + "/" + table_name))

    env = {""+table_names[i]: df for i, df in enumerate(data_frames)}
    print("======>",env.keys())
    df = sql(query, env=env)
    p_name = csv_name + ".csv"
    df.to_csv("./project_files/" + project_name + "/" + p_name, sep=',')

    cursor = collection.find({'project_name':project_name, 'users':get_jwt_identity()})
    for project in cursor:
        project["files"][p_name] = {
                                    "file_name": p_name,
                                    "file_path": "./project_files/" + project_name + "/" + p_name
                                }   

        collection.update(
            { "_id": project["_id"] },
            { "$set":
                {
                    "files": project["files"]
                },
                "$currentDate":{"lastModified":True}
            }

            )
    response_output = "New Table Created successfully"
    status = "200"
    response = flask.Response(json.dumps({"data": response_output,
                "status": status_codes[status]},
                default=json_util.default))
    
    return response;

@app.route('/execute/<project_name>',methods=['GET','POST'])
@jwt_required
@cross_origin()
def execute_pipeline(project_name):
    print(project_name,flush=True)
    json_data = json.loads(str(request.data, encoding='utf-8'))
    print(json_data,type(json_data))
    content = json_data
    json_data = content["data"]
    print(json_data)

    cursor = collection.find({'project_name':project_name, 'users':get_jwt_identity()})
    run_number = 0
    for project in cursor:
        status = "pending"
        run_number = len(project["results"]) + 1
        project["results"][str(run_number)] = {
            "result": "Pipeline is still running. Results will be available after execution.",
            "run_status": status,
            "scheduled_time": datetime.datetime.now(),
            "time_exection": "not available",
            "pipeline_json": json_data
        }
        collection.update(
                        { "_id": project["_id"] },
                        { "$set":
                            {
                                "results": project["results"]
                            },
                            "$currentDate":{"lastModified":True}
                        }
                        )

    result = run_pipeline.delay(json_data)
    output = result.get(propagate = False)
    cursor = collection.find({'project_name':project_name, 'users':get_jwt_identity()})
  
    for project in cursor:
        status = "success"
        project["results"][str(run_number)]["result"] = output
        project["results"][str(run_number)]["run_status"] = status
        
        collection.update(
                        { "_id": project["_id"] },
                        { "$set":
                            {
                                "results": project["results"]
                            },
                            "$currentDate":{"lastModified":True}
                        }
                        )

    status = "200"
    response_output = "Pipeline scheduled successfully"
    response = flask.Response(json.dumps({"data": response_output,
                    "status": status_codes[status]},
                    default=json_util.default))
    
    return response

@app.route('/save_graph/<project_name>',methods=['GET','POST'])
@jwt_required
@cross_origin()
def save_graph(project_name):
    json_data = json.loads(str(request.data, encoding='utf-8'))
    content = json_data
    json_data = content["data"]
    
    cursor = collection.find({'project_name':project_name, 'users':get_jwt_identity()})
    run_number = 0
    for project in cursor:
        run_number = len(project["graph"]) + 1
        project["graph"][str(run_number)] = {
            "scheduled_time": datetime.datetime.now(),
            "saved_graph": json_data
        }
        collection.update(
                        { "_id": project["_id"] },
                        { "$set":
                            {
                                "graph": project["graph"]
                            },
                            "$currentDate":{"lastModified":True}
                        }
                        )

    status = "200"
    response_output = "Graph Saved Successfully"
    response = flask.Response(json.dumps({"data": response_output,
                    "status": status_codes[status]},
                    default=json_util.default))
    
    return response

@app.route('/get_results/<project_name>',methods=['GET','POST'])
@jwt_required
@cross_origin()
def get_results(project_name):
    print("Get results of", project_name,flush=True)
    cursor = collection.find({'project_name':project_name, 'users':get_jwt_identity()})
    for project in cursor:
        output = project["results"]
    status = "200"
    response = flask.Response(json.dumps({"data": output,
                    "status": status_codes[status]},
                    default=json_util.default))
    
    return response

@app.route('/upload_files/<project_name>', methods=['GET', 'POST','OPTIONS'])
@jwt_required
@cross_origin()
def upload_file(project_name):
    print(len(request.files))
    if request.method == 'OPTIONS' or request.method == 'POST':

        if len(request.files) > 0:
            file = request.files['file']
            filename = secure_filename(file.filename)
            
            project_path = os.path.join(app.config['UPLOAD_FOLDER'], project_name)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], project_name ,filename)

            if(os.path.isdir(project_path)):
                file.save(file_path)
            else:
                os.makedirs(project_path)
                file.save(file_path)

            cursor = collection.find({'project_name':project_name, 'users':get_jwt_identity()})
            
            for project in cursor:
                print(project)
                status = "400"
                if(filename in project["files"]):
                    status = "200"
                    response = flask.Response(json.dumps({"data":"File with same name already exists",
                        "status": status_codes[status]},
                        default=json_util.default))
                    
                    return response 
                else:

                    # if(file_extension in IMAGE_EXTENSIONS):
                    #     project["files"]["images"][filename] = {
                    #                     "file_name": filename,
                    #                     "file_path": file_path
                    #                 }   
                    # elif(file_extension in DOCUMENT_EXTENSIONS):
                    #     project["files"]["documents"][filename] = {
                    #                     "file_name": filename,
                    #                     "file_path": file_path
                    #                 }
                    # else:
                    #     status = "400"
                    #     response = flask.Response(json.dumps({"data":"Invalid File Type",
                    #         "status": status_codes[status]},
                    #         default=json_util.default))
                    #     
                    #     return response 
                    project["files"][filename] = {
                                    "file_name": filename,
                                    "file_path": file_path
                                }   

                    collection.update(
                        { "_id": project["_id"] },
                        { "$set":
                            {
                                "files": project["files"]
                            },
                            "$currentDate":{"lastModified":True}
                        }
                        )
                    status = "200"
            response = flask.Response(json.dumps({"data":os.path.join(app.config['UPLOAD_FOLDER'], filename),
                                    "status": status_codes[status]},
                                    default=json_util.default))
            
            return response 
    return "Nothing happend"

@app.route('/get_project_file_names/<project_name>', methods=['GET'])
@jwt_required
@cross_origin()
def get_project_files(project_name):
    if request.method == 'GET':
        cursor = collection.find({'project_name':project_name, 'users':get_jwt_identity()})
        files = []
        for project in cursor:
            files = list(project["files"].keys())
            break
        status = "200"
        response = flask.Response(json.dumps({"data":files,
            "status": status_codes[status]},
            default=json_util.default))
        
        return response 

    return "Nothing happend"

@app.route('/get_project_files/<project_name>', methods=['GET'])
@jwt_required
@cross_origin()
def get_project_files_with_details(project_name):
    if request.method == 'GET':
        cursor = collection.find({'project_name':project_name, 'users':get_jwt_identity()})
        files = []
        for project in cursor:
            files = project["files"]
            break
        status = "200"
        response = flask.Response(json.dumps({"data":files,
            "status": status_codes[status]},
            default=json_util.default))
        
        return response 

    return "Nothing happend"

app.secret_key = 'BhavinJAwadeKey'
app.run()