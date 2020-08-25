import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEventType } from '@angular/common/http';
import { API_URLS } from './helpers/api_urls';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  httpClient: any;
  progress: any;

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console instead
  
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }

  constructor(
    private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get(API_URLS.getProjects).pipe(
      catchError(this.handleError<any>('getProjects', []))
    );
  }
  
  createProject(project_name: string): Observable<any> {
    return this.http.get(API_URLS.newProject + project_name).pipe(
      catchError(this.handleError<any>('newProject', []))
    );
  }

  runPipeline(project_name: string, body: any): Observable<any> {
    var packet:any = {
      data : body
    }
    return this.http.post(API_URLS.runPipeline + project_name,
      JSON.stringify(packet)).pipe(
      catchError(this.handleError<any>('runPipeline', []))
    );
  }

  postFile(fileToUpload: File, project_name: string): Observable<any>{
    console.log(fileToUpload,project_name);
    const endpoint = API_URLS.fileUploadURL + project_name;
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData);
  }

  getProjectFiles(project_name: string): Observable<any> {
    return this.http.get(API_URLS.getProjectFiles + project_name).pipe(
      catchError(this.handleError<any>('getProjectFiles', []))
    );
  }
}
