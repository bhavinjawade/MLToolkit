import json
import pymongo
import datetime
from bson import json_util
from flask import Flask, request, jsonify
from flask.templating import render_template
import flask
from celery_task import run_pipeline

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/"
mongo = pymongo.MongoClient(app.config["MONGO_URI"])
collection = mongo["chemml_projects"]["projects"]

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
            }
}

@app.route("/projects/n/<project_name>")
def new_project(project_name):
    today = datetime.datetime.today()
    dic = {
        "project_name": project_name,
        "created_date": today,
        "config": {
            "file": "/users/chemml/file.txt"
        },
        "project_properties": {},
        "users": "bhavinjawade"
        }    
    if(collection.insert_one(dic)):
        status = "200"
    
    response = flask.Response(json.dumps({"data": dic,
                    "status": status_codes[status]},
                    default=json_util.default))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

@app.route("/projects/a/")
def get_projects_list():
    cursor = collection.find({})
    project_list = []

    for project in cursor:
        project_list.append(project)

    if(len(project_list) >= 0):
        status = "200"
    
    response = flask.Response(json.dumps({"data": project_list, 
                        "status": status_codes[status]},
                        default=json_util.default))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

@app.route('/execute/<project_name>')
def execute_pipeline(project_name):
    content = request.json
    json_data = content["data"]
    print(json_data)
    result = run_pipeline.delay(json_data)
    output = result.get(propagate = False)
    status = "200"
    response = flask.Response(json.dumps({"data": output,
                    "status": status_codes[status]},
                    default=json_util.default))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

app.run()