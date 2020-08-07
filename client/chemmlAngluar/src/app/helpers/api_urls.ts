export abstract class API_URLS{
  static baseURL:string = "http://127.0.0.1:5000";
  static newProject:string = API_URLS.baseURL + "/projects/n/" //API_URLS.baseURL + "/api/v1/newProject";
  static getProjects:string = API_URLS.baseURL + "/projects/a/";
  static openProject:string = API_URLS.baseURL + "/api/v1/openProject";
}