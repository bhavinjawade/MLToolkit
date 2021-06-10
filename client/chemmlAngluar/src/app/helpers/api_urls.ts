export abstract class API_URLS{
  static baseURL:string = "https://madeatub.buffalo.edu/mltoolkit_api";
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
  static updateProjectInfo:string = API_URLS.baseURL + "/projects/u/"
  static getFile:string = API_URLS.baseURL + '/get_file/'
  static runSQLQuery:string = API_URLS.baseURL + '/run_sql_query/'
  static deleteProject:string = API_URLS.baseURL + '/delete/'
  static duplicateProject:string = API_URLS.baseURL + '/duplicate/'
  static previewSQLQuery:string = API_URLS.baseURL + '/get_query_preview/'
  static login:string = API_URLS.baseURL + '/login'
}