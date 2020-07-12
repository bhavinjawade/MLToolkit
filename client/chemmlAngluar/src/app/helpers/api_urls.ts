export abstract class API_URLS{
  static baseURL:string = "https://localhost:8080";
  static newProject:string = "http://127.0.0.1:5000/projects/n/bhavin" //API_URLS.baseURL + "/api/v1/newProject";
  static getProjects:string = API_URLS.baseURL + "/api/v1/getProjects";
  static openProject:string = API_URLS.baseURL + "/api/v1/openProject";
}