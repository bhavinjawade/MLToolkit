import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEventType } from '@angular/common/http';
import { API_URLS } from './helpers/api_urls';
import { Observable, of,  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as d3 from 'd3';
import { pack } from 'd3';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  httpClient: any;
  progress: any;
  access_token: any;
  headers: any;

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console instead
  
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`Data-Service-Log: ${message}`);
  }

  constructor(
    private http: HttpClient) {
      if(localStorage.getItem("access_token") != null && localStorage.getItem("logged_in")){
        this.access_token = localStorage.getItem("access_token");
        // put login verifier that validatees the access token with backend here.
        this.headers = {
        headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.access_token}`
       })
      };
      }
     }

  login(username:string, password: string): Observable<any>{
    var packet:any = {
      username : username,
      password : password
    }
    console.log("Packet Sent: ", packet);
    let postobject = this.http.post(API_URLS.login, JSON.parse(JSON.stringify(packet)))
    return postobject.pipe(map(response => {
      console.log("Login Successful: ", response)
      if(response["access_token"]){
        this.access_token = response["access_token"];
        this.headers = {
          headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${this.access_token}`
        })
        };
        localStorage.setItem('access_token', this.access_token);
        localStorage.setItem('logged_in', "1");
      }
      return response;
    }));
  }

  getProjects(): Observable<any> {
    return this.http.get(API_URLS.getProjects,this.headers).pipe(
      catchError(this.handleError<any>('getProjects', []))
    );
  }

  getCSVFile(project_name,file_name){
    return d3.csv(API_URLS.getFile + project_name + '/' + file_name,{
      headers: new Headers({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.access_token}`
       })
      })
  }
  
  getResults(project_name): Observable<any> {
    console.log(this.headers);
    return this.http.get(API_URLS.getResults + project_name, this.headers).pipe(
      catchError(this.handleError<any>('getResults', []))
    );
  }
  
  createProject(project_name: string, project_desc: string, tagslist): Observable<any> {
    var packet:any = {
      data : project_desc,
      tags : tagslist
    }
    return this.http.post(API_URLS.newProject + project_name, JSON.stringify(packet), this.headers).pipe(
      catchError(this.handleError<any>('newProject', []))
    );
  }

  runSQLQuery(project_name: string, query: string, csv_name: string): Observable<any> {
    var packet:any = {
      data : {
        "query": query 
      }
    }
    return this.http.post(API_URLS.runSQLQuery + project_name + "/" + csv_name, JSON.stringify(packet), this.headers).pipe(
      catchError(this.handleError<any>('runQuery', []))
    );
  }

  previewSQLQuery(project_name: string, query: string, csv_name: string): Observable<any> {
    var packet:any = {
      data : {
        "query": query 
      }
    }
    return this.http.post(API_URLS.previewSQLQuery + project_name + "/" + csv_name, JSON.stringify(packet), this.headers).pipe(
      catchError(this.handleError<any>('runQuery', []))
    );
  }

  updateProjectInfo(currentProject: any, project_name: string): Observable<any> {
    console.log("Sending this project", currentProject);
    var packet:any = {
      data: currentProject
    }
    return this.http.post(API_URLS.updateProjectInfo + project_name, JSON.stringify(packet), this.headers).pipe(
      catchError(this.handleError<any>('newProject', []))
    );
  }

  getProject(project_name): Observable<any> {
    return this.http.get(API_URLS.getProject + project_name, this.headers).pipe(
      catchError(this.handleError<any>('getProject', []))
    );
  }

  runPipeline(project_name: string, body: any): Observable<any> {
    var packet:any = {
      data : body
    }
    return this.http.post(API_URLS.runPipeline + project_name,
      JSON.stringify(packet),  this.headers).pipe(
      catchError(this.handleError<any>('runPipeline', []))
    );
  }

  saveGraph(project_name: string, body: any): Observable<any> {
    var packet:any = {
      data : body
    }
    return this.http.post(API_URLS.saveGraph + project_name,
      JSON.stringify(packet),  this.headers).pipe(
      catchError(this.handleError<any>('saveGraph', []))
    );
  }

  postFile(fileToUpload: File, project_name: string): Observable<any>{
    console.log(fileToUpload,project_name);
    const endpoint = API_URLS.fileUploadURL + project_name;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    var header = {
      headers: new HttpHeaders({
      'enctype':  'multipart/form-data',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.access_token}`
     })};
    console.log(formData);
    return this.http.post(endpoint, formData,  header);
  }

  getProjectFiles(project_name: string): Observable<any> {
    return this.http.get(API_URLS.getProjectFiles + project_name,  this.headers).pipe(
      catchError(this.handleError<any>('getProjectFiles', []))
    );
  }

  getProjectFilesWithDetails(project_name: string): Observable<any> {
    return this.http.get(API_URLS.getProjectFilesWithDetails + project_name,this.headers ).pipe(
      catchError(this.handleError<any>('getProjectFilesWithDetails', []))
    );
  }
}
