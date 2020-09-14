export abstract class API_URLS{
  static baseURL:string = "http://localhost:5000";
  static newProject:string = API_URLS.baseURL + "/projects/n/" //API_URLS.baseURL + "/api/v1/newProject";
  static getProjects:string = API_URLS.baseURL + "/projects/a/";
  static openProject:string = API_URLS.baseURL + "/api/v1/openProject";
  static runPipeline:string = API_URLS.baseURL + "/execute/";
  static saveGraph:string = API_URLS.baseURL + "/save_graph/";
  static fileUploadURL:string = API_URLS.baseURL + "/upload_files/";
  static getProjectFiles:string = API_URLS.baseURL + "/get_project_file_names/";
  static getResults:string = API_URLS.baseURL + "/get_results/";
  static getProject:string = API_URLS.baseURL + "/projects/g/";
  static getProjectFilesWithDetails:string = API_URLS.baseURL + "/get_project_files/";
}