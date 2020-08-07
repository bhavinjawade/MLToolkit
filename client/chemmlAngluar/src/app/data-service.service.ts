import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URLS } from './helpers/api_urls';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

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

}
