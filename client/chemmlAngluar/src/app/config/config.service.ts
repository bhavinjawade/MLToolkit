import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { API_URLS } from '../helpers/api_urls';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }
  
  createNewProject() {
    return this.http.get(API_URLS.newProject);
  }
}