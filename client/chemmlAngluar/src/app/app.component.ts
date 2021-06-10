import { Component, HostListener, AfterViewInit, ViewChild, ViewContainerRef, 
        ComponentRef, ComponentFactoryResolver, ElementRef, Renderer2 } 
        from '@angular/core';
import { CurrentProjectService } from './current-project.service';
import { ToolConfigComponent } from './tool-config/tool-config.component';
import { InputOutputConfigComponent } from './input-output-config/input-output-config.component'
import { API_URLS } from './helpers/api_urls';
import { DataServiceService } from './data-service.service';
import { Router, Event, NavigationError, NavigationStart, NavigationEnd } from '@angular/router';
import {Location} from '@angular/common'; 
import { ToolboxComponentComponent } from './toolbox-component/toolbox-component.component';

declare var flowy: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  render: any;
  title = 'chemmlAngluar';
  showInfoBox = false;
  globalCounter: any;
  toolConfigMapping = [];
  showNewProjectBox = false;
  openProjectBox = false;
  showFilesMenu = false;
  currentProject: any;
  projectName: any;
  showProjectInfo = false;
  showLandingPage = true;
  showLoginPage = true;

  showHomePage = false;
  inputOutputConfigMapping = [];
  chemMLJson: any;
  showResultsPage = false;
  exitMainPage: boolean = true;

  @ViewChild('appenHere', {static : false, read : ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  @ViewChild('inputOutputAppend', {static : false, read : ViewContainerRef}) inputOutputTarget: ViewContainerRef;
  private inputOutputComponentRef: ComponentRef<any>;

  @ViewChild('canvasAppend', {static : false, read : ViewContainerRef}) canvasAppendTarget: ViewContainerRef;
  private canvasAppendRef: ComponentRef<any>;

  

  constructor(private elementRef:ElementRef, private CFR: ComponentFactoryResolver,
              private currentProjectService: CurrentProjectService, private dataServiceService: DataServiceService,
              private router: Router, private location: Location){
                this.router.events.subscribe((event: Event) => {
                  if (event instanceof NavigationStart) {
                      console.log("ROUTER EVENT", event);
                      if((event.url) == '/portal'){
                        this.showLandingPage = true;
                        this.exitMainPage = true;
                        this.showHomePage = false;
                      }
                      else if((event.url) == "/"){
                        this.showHomePage = true;
                      }
                  }
      
                  if (event instanceof NavigationEnd) {
                      // Hide loading indicator
                  }
      
                  if (event instanceof NavigationError) {
                      console.log(event.error);
                  }
              });
  }

  
  ngAfterViewInit() {
    this.currentProjectService.chemMLJsonChange.subscribe((value) => { 
      this.chemMLJson = value;
    });  
    this.chemMLJson = this.currentProjectService.getCurrentChemMLJson();
    this.globalCounter = 0;
    this.currentProjectService.execChange.subscribe((value) => { 
      this.currentProject = value;
      this.projectName = this.currentProject.project_name;
    });  
    this.currentProject = this.currentProjectService.getCurrentProject();
    this.projectName = this.currentProject["project_name"];

    this.currentProjectService.updateProjectInfo(this.currentProject);
    this.elementRef.nativeElement.addEventListener('click', (evt) => {
      console.log("LISTENING TO CLICK EVENTS");
      let id = evt.target.id;
      id = id.split("_")[0] + "_" + id.split("_")[1] + "_" + id.split("_")[2];
      let classes = evt.target.classList;
      let isTool = false
      if(id.substring(0,4) == 'tool' && (classes.contains('grabme') || classes.contains('grabme_dots'))){
        isTool = true
        console.log(evt.target);
        console.log(id,this.toolConfigMapping);
        if(id in this.toolConfigMapping){
          let toolConfigComponent = this.toolConfigMapping[id];
          toolConfigComponent.instance.project_name = this.projectName;
          toolConfigComponent.instance.show = true;
          console.log("---------------->",toolConfigComponent.instance.project_name);
          console.log("Opening Tool-config of block: ", toolConfigComponent.instance.tooltype);
        }
      }
    });
    flowy(document.getElementById("canvas"), this.drag, this.release, this.arrowClicking, this.snapping, this.rearrange);
  }

  loggedIn(){
    this.showLoginPage = false;
    this.showLandingPage = true;
  }

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!(event.target == document.getElementById("dropbtn"))) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  logout(){
    localStorage.removeItem("access_token");
    localStorage.removeItem("logged_in");
    window.location.reload()
  }

  reRender() {
    this.elementRef.nativeElement.addEventListener('click', (evt) => {
      let id = evt.target.id
      let isTool = false
      if(id.substring(0,4) == 'tool'){
        isTool = true
        console.log(evt.target);
        console.log(id,this.toolConfigMapping);
        if(id in this.toolConfigMapping){
          let toolConfigComponent = this.toolConfigMapping[id];
          toolConfigComponent.instance.show = true;
          toolConfigComponent.instance.project_name = this.projectName;
          console.log("Opening Tool-config of block: ", toolConfigComponent.instance.type);
        }
      }
    });
    flowy(document.getElementById("canvas"), this.drag, this.release, this.arrowClicking, this.snapping);
  }

  arrowClicking = (child, parent) => {
    console.log("This arrow has been clicked", child, parent);
    if(child in this.inputOutputConfigMapping){
      if(parent in this.inputOutputConfigMapping[child]){
        var inputOutputConfigComponent = this.inputOutputConfigMapping[child][parent];
        inputOutputConfigComponent.instance.show = true;
        // console.log('arrow'+'_'+parent + "~" + child);
        // document.getElementById('arrow'+'_'+parent + "~" + child).classList.add('arrow_svg_hover_class');
      }
      else{
        let componentFactory = this.CFR.resolveComponentFactory(InputOutputConfigComponent);
        this.inputOutputComponentRef = this.inputOutputTarget.createComponent(componentFactory);
        this.inputOutputConfigMapping[child][parent] =  this.inputOutputComponentRef;     
        var inputOutputConfigComponent = this.inputOutputConfigMapping[child][parent];
        this.inputOutputComponentRef.instance.parentId = parent;
        this.inputOutputComponentRef.instance.childId = child;
        inputOutputConfigComponent.instance.show = true;
        // console.log('arrow'+'_'+parent + "~" + child);
        // document.getElementById('arrow'+'_'+parent + "~" + child).classList.add('arrow_svg_hover_class');
      }
    }
    else {
      let componentFactory = this.CFR.resolveComponentFactory(InputOutputConfigComponent);
      this.inputOutputComponentRef = this.inputOutputTarget.createComponent(componentFactory);
      this.inputOutputConfigMapping[child] = [];
      this.inputOutputConfigMapping[child][parent] =  this.inputOutputComponentRef;
      var inputOutputConfigComponent = this.inputOutputConfigMapping[child][parent];
      this.inputOutputComponentRef.instance.parentId = parent;
      this.inputOutputComponentRef.instance.childId = child;
      console.log(this.inputOutputConfigMapping);
    }
  }

  drag(block){
    console.log("DRAG", block);
  }
  
  release = () => {
    console.log("RELEASE")
  }

  rearrange = () => {
    return false;
  }

  snapping = (block,first,parent) => {
    console.log("Snapping", block, first, parent);
    block.classList.add("blockintree");
    var toolheader = block.querySelector(".tool_header");
    toolheader.style.display = "block";
    var toolfooter = block.querySelector(".tool_footer");
    toolfooter.style.display = "block";

    if(!(block.id in this.toolConfigMapping)){
    
      let componentFactory = this.CFR.resolveComponentFactory(ToolConfigComponent);
      this.componentRef = this.target.createComponent(componentFactory)
      block.id += "_" + this.globalCounter
      this.globalCounter += 1;
      this.toolConfigMapping[block.id] = this.componentRef;
      this.componentRef.instance.toolid = block.id;
      this.componentRef.instance.project_name = this.projectName;

      let type = block.id.split("_");
      type = type[type.length-2];
      console.log(type);
      this.componentRef.instance.tooltype = type;
      var children = block.childNodes;
      for (var i = 0; i < children.length; i++) {
        children[i].id = block.id;
      }
    }
    if(!first){
      var child_id = block.id;
      var parent_id = parent.id;
      console.log(block);
      console.log(parent);
    }
    return true;
  }

  projectOpened() {
    this.showLandingPage=false; 
    this.showProjectInfo=false;
    this.dataServiceService.getProject(this.projectName)
    .subscribe(response => {
      console.log("projectInfo",response);
      this.loadSavedProject(response);
    });
    this.location.replaceState('/portal/project/'+this.projectName);
  }

  loadSavedProject(response){
    var canvas_div = document.getElementById("canvas");
    var savedGraphs = response.data.graph;
    var latestGraph = savedGraphs[Object.keys(response.data.graph).length]
    var blocks = latestGraph.saved_graph.blocks
    for(var key in blocks){
      console.log(blocks[key]);
      var id = key.split("_")[0] + "_" + key.split("_")[1];
      var element = document.getElementById(id);
      var top = blocks[key].top;
      var left = blocks[key].left;
      var blockelemtag = blocks[key].blockelemtag;
      var blockid = blocks[key].blockid;
      console.log(element);
      var ele = element.cloneNode(true);
      var newElement = (<HTMLElement>ele)
      newElement.style.top = top;
      newElement.style.left = left;
      canvas_div.appendChild(newElement);
      
      //console.log("Appended Element:", newElement);
      newElement.innerHTML += blockelemtag;
      newElement.innerHTML += blockid;
      newElement.classList.add("blockintree");
      newElement.classList.remove("create-flowy");
      newElement.classList.add("block");
      newElement.classList.add("blockintree");
      var th = newElement.querySelector(".tool_header");
      var toolheader = (<HTMLElement>th)
      toolheader.style.display = "block";
      var tf = newElement.querySelector(".tool_footer");
      var toolfooter = (<HTMLElement>tf)
      toolfooter.style.display = "block";
      newElement.id = key;
      if(!(key in this.toolConfigMapping)){
        let componentFactory = this.CFR.resolveComponentFactory(ToolConfigComponent);
        this.componentRef = this.target.createComponent(componentFactory)
        this.globalCounter += 1;
        this.toolConfigMapping[key] = this.componentRef;
        this.componentRef.instance.toolid = key;
        this.componentRef.instance.project_name = this.projectName;
        var type = id.split("_")[1]
        this.componentRef.instance.tooltype = type;
        var children = newElement.childNodes;
        for (var i = 0; i < children.length; i++) {
          (<HTMLElement>children[i]).id = newElement.id+"_toremove";
        }
      }
    }
    var arrows = latestGraph.saved_graph.Arrows;
    for(var i = 0; i < arrows.length; i++){
      canvas_div.innerHTML += arrows[i];
    }
    flowy.import_graph(latestGraph.saved_graph);
  }
  
  openProject(event) {
    console.log(event); // handle button clicked here.
    this.openProjectBox = true;
  }

  goHome(event){
    this.showLandingPage = true;
    //    window.location.reload();
    this.location.replaceState('/portal');
    this.router.navigate(['/portal'])
    console.log(event);
  }

  openResultsPage(event){
    this.showResultsPage = true; 
  }

  newProject(event){
    console.log(event);
    this.showNewProjectBox = true;
    console.log("Calling URL: ", API_URLS.newProject);
  }

  runPipeline(){
    this.saveGraph();
    console.log(this.chemMLJson);
    this.currentProjectService.updateProjectInfo(this.currentProject);
    this.dataServiceService.runPipeline(this.projectName,this.chemMLJson)
      .subscribe(response => {
        console.log("Pipeline Result:",response);
        alert(response.data.error);
      });
  }

  closeFilesMenu(data){
    console.log("DATA PRINT",data);
    if(data == true){
      this.showFilesMenu = false;
    }
  }

  saveGraph(){
    var blocks = document.querySelectorAll(".blockintree");
    var graph = {
      "blocks": {}
    };
    for(var i = 0; i < blocks.length; i++){
      var top = (<HTMLElement>blocks[i]).style.top;
      var left = (<HTMLElement>blocks[i]).style.left;
      var blockelemtag = (<HTMLElement>blocks[i]).querySelector(".blockelemtype");
      var blockid = (<HTMLElement>blocks[i]).querySelector(".blockid");
      console.log(blockelemtag);
      console.log(blockid);
      graph["blocks"][(<HTMLElement>blocks[i]).id] = {
        "top": top,
        "left": left,
        "blockelemtag": blockelemtag.outerHTML,
        "blockid": blockid.outerHTML 
      };
    }
    var Arrows = document.getElementsByClassName("arrowblock");
    var graph_arrows = []
    for(var i = 0; i < Arrows.length; i++){
      graph_arrows.push((<HTMLElement>Arrows[i]).outerHTML);
    }
    graph["Arrows"] = graph_arrows;
    var flowy_output = flowy.output();
    graph["blockarr"] = flowy_output.blockarr;
    console.log(graph);
    this.dataServiceService.saveGraph(this.projectName,graph)
      .subscribe(response => {
        console.log("Saved Result",response);
        let date = new Date().toLocaleString().replace(",","").replace(/:.. /," ");
        (<HTMLElement>document.getElementById("saveStatus")).innerHTML = "Project Last Saved " + date;
      });
  }
}
