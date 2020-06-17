function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_button_nav_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./nav-button/nav-button.component */
    "./src/app/nav-button/nav-button.component.ts");
    /* harmony import */


    var _toolbox_toolbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./toolbox/toolbox.component */
    "./src/app/toolbox/toolbox.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'chemmlAngluar';
      }

      _createClass(AppComponent, [{
        key: "onButtonClicked",
        value: function onButtonClicked(event) {
          console.log(event); // handle button clicked here.
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 17,
      vars: 0,
      consts: [["id", "navigation"], ["id", "leftside"], ["id", "details"], ["id", "back"], ["src", "assets/arrow.svg"], ["id", "names"], ["id", "title"], ["id", "subtitle"], ["description", "Home", 1, "button", 3, "callFunction"], ["description", "New Project", 1, "button", 3, "callFunction"], ["description", "Open Project", 1, "button", 3, "callFunction"], ["id", "buttonsright"], ["id", "publish"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Machine Learning Pipeline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Portal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav-button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("callFunction", function AppComponent_Template_nav_button_callFunction_10_listener($event) {
            return ctx.onButtonClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("callFunction", function AppComponent_Template_nav_button_callFunction_11_listener($event) {
            return ctx.onButtonClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("callFunction", function AppComponent_Template_nav_button_callFunction_12_listener($event) {
            return ctx.onButtonClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Run Pipeline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-toolbox");
        }
      },
      directives: [_nav_button_nav_button_component__WEBPACK_IMPORTED_MODULE_1__["NavButtonComponent"], _toolbox_toolbox_component__WEBPACK_IMPORTED_MODULE_2__["ToolboxComponent"]],
      styles: [".side[_ngcontent-%COMP%]{\n    width: 25% !important;\n    margin-left: 10% !important;\n}\n.select_file_btn[_ngcontent-%COMP%]{\n    display:inline-block;\n    border-radius: 5px;\n    bottom: 20px;\n    font-family: Roboto;\n    font-size: 14px;\n    text-align: center;\n    width: 287px;\n    height: 38px;\n    line-height: 38px;\n    color: #253134;\n    border: 1px solid #E8E8EF;\n    transition: all .3s cubic-bezier(.05,.03,.35,1);\n}\n.select_file_btn[_ngcontent-%COMP%]:hover{\n    background-color: #217CE8;\n    color: white;\n}\n.items[_ngcontent-%COMP%]{\n    display: inline-block;\n    margin-left: 5%;\n    padding: 11px;\n    background-color: #237ce8;\n    color: white;\n    border-radius: 26px;\n    padding-left: 1%;\n    font-family: Roboto;\n    padding-right: 1%;\n    margin: 15px;\n    margin-left: 2%;\n}\n.visualize[_ngcontent-%COMP%] {\n    \n    height: 90%;\n    background-color: white;\n    padding: 0;\n    margin: 5%;\n    margin-left: 3%;\n    margin-top: 9%;\n    border-radius: 15px;\n    margin-right: 3%;\n    margin-bottom: 5%;\n}\n.axis[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .axis[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  fill: none;\n\tstroke: black;\n\tshape-rendering: crispEdges;\n}\n.axis[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n\tfont-family: sans-serif;\n\tfont-size: 11px;\n}\n#navigation[_ngcontent-%COMP%] {\n    border-radius: 18px;\n    height: 71px;\n    background-color: white;\n    border-bottom: 1px solid #E8E8EF;\n    width: 96%;\n    display: table;\n    box-sizing: border-box;\n    position: fixed;\n    top: 0;\n    margin: 2%;\n}\n#back[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border-radius: 100px;\n    background-color: #F1F4FC;\n    text-align: center;\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 15px;    \n    margin-right: 10px\n}\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 13px;\n}\n#names[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: top;\n}\n#title[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-weight: 500;\n    font-size: 16px;\n    color: #393C44;\n    margin-bottom: 0px;\n}\n#subtitle[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    color: #808292;\n    font-size: 14px;\n    margin-top: 5px;\n}\n#leftside[_ngcontent-%COMP%] {\n    margin-right: 2%;\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 20px;\n}\n#centerswitch[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 222px;\n    left: 50%;\n    margin-left: -111px;\n    top: 15px;\n}\n#leftswitch[_ngcontent-%COMP%] {\n    border: 1px solid #E8E8EF;\n    background-color: #FBFBFB;\n    width: 111px;\n    height: 39px;\n    line-height: 39px;\n    border-radius: 5px 0px 0px 5px;\n    font-family: Roboto;\n    color: #393C44;\n    display: inline-block;\n    font-size: 14px;\n    text-align: center;\n}\n#rightswitch[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    color: #808292;\n    border-radius: 0px 5px 5px 0px;\n    border: 1px solid #E8E8EF;\n    height: 39px;\n    width: 102px;\n    display: inline-block;\n    font-size: 14px;\n    line-height: 39px;\n    text-align: center;\n    margin-left: -5px;\n}\n#discard[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-weight: 500;\n    font-size: 14px;\n    color: #A6A6B3;\n    width: 95px;\n    height: 38px;\n    border: 1px solid #E8E8EF;\n    border-radius: 5px;\n    text-align: center;\n    line-height: 38px;\n    display: inline-block;\n    vertical-align: top;\n    transition: all .2s cubic-bezier(.05,.03,.35,1);\n}\n#discard[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    opacity: .7;\n}\n#publish[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-weight: 500;\n    font-size: 14px;\n    color: #217CE8;\n    background-color: white;\n    border-radius: 5px;\n    border: 2px solid #217CE8;\n    width: 143px;\n    height: 38px;\n    margin-left: 10px;\n    display: inline-block;\n    vertical-align: top;\n    text-align: center;\n    line-height: 38px;\n    margin-right: 20px;\n    transition: all .2s cubic-bezier(.05,.03,.35,1);\n}\n#publish[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    opacity: .7;\n    background-color: #217CE8;\n    border-radius: 5px;\n    color:white;\n    border: 2px solid #217CE8;\n}\n#buttonsright[_ngcontent-%COMP%] {\n    float: right;\n    margin-top: 15px;\n}\n#leftcard[_ngcontent-%COMP%] {\n    width: 370px;\n    background-color: #FFF;\n    border: 1px solid #E8E8EF;\n    box-sizing: border-box;\n    padding-top: 3%;\n    padding-left: 20px;\n    height: auto;\n    position: absolute;\n    z-index: 2;\n    vertical-align: middle;\n    margin-top: 9%;\n    border-radius: 16px;\n    margin-left: 2%;\n    box-shadow: 2px 2px 25px 2px #e2e2e2;\n    transition: 0.5s;\n    padding-bottom: 5%;\n}\n#search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 318px;\n    height: 40px;\n    background-color: #FFF;\n    border: 1px solid #E8E8EF;\n    box-sizing: border-box;\n    box-shadow: 0px 2px 8px rgba(34,34,87,0.05);\n    border-radius: 5px;\n    text-indent: 35px;\n    font-family: Roboto;\n    font-size: 16px;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #C9C9D5;\n}\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #C9C9D5;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #C9C9D5;\n}\n#search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute; \n    margin-top: 10px;\n    width: 18px;\n    margin-left: 12px;\n}\n#header[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-family: Roboto;\n    font-weight: bold;\n    color: #393C44;\n}\n#subnav[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #E8E8EF;\n    width: calc(100% + 20px);\n    margin-left: -20px;\n    margin-top: 10px;\n    overflow: scroll;\n    display: flex;\n    border-top: 1px solid #E8E8EF;\n}\n.navdisabled[_ngcontent-%COMP%] {\n    transition: all .3s cubic-bezier(.05,.03,.35,1);\n}\n.navdisabled[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    opacity: .5;\n}\n.navactive[_ngcontent-%COMP%] {\n    color: #393C44!important;\n}\n#triggers[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    font-family: Roboto;\n    font-weight: 500;\n    font-size: 14px;\n    text-align: center;\n    color: #808292;\n    width: calc(88% / 3);\n    height: 48px;\n    line-height: 48px;\n    display: inline-block;\n    float: left;\n}\n.navactive[_ngcontent-%COMP%]:after {\n    display: block;\n    content: \"\";\n    width:  100%;\n    height: 4px;\n    background-color: #217CE8;\n    margin-top: -4px;\n}\n#actions[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-family: Roboto;\n    font-weight: 500;\n    color: #808292;\n    font-size: 14px;\n    height: 48px;\n    line-height: 48px;\n    width: calc(88% / 3);\n    text-align: center;\n    float: left;\n}\n#loggers[_ngcontent-%COMP%] {\n    width: calc(88% / 3);\n    display: inline-block;\n    font-family: Roboto;\n    font-weight: 500;\n    color: #808292;\n    font-size: 14px;\n    height: 48px;\n    line-height: 48px;\n    text-align: center;\n}\n#footer[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    padding-left: 20px;\n    line-height: 40px;\n    bottom: 0;\n    width: 362px;\n    border: 1px solid #E8E8EF;\n    height: 67px;\n    box-sizing: border-box;\n    background-color: #FFF;\n    font-family: Roboto;\n    font-size: 14px;\n}\n#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: #393C44;\n    transition: all .2s cubic-bezier(.05,.03,.35,1);\n}\n#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    opacity: .5;\n}\n#footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #808292;\n}\n#footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: inline-block;\n    color: #808292;\n}\n#footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    margin-right: 5px;\n}\n.blockelem[_ngcontent-%COMP%]:first-child {\n    margin-top: 20px\n}\n.blockelem[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    width: 90%;\n    border: 1px solid transparent;\n    transition-property: box-shadow, height;\n    transition-duration: .2s;\n    transition-timing-function: cubic-bezier(.05,.03,.35,1);\n    border-radius: 5px;\n    box-shadow: 0px 0px 30px rgba(22, 33, 74, 0);\n    box-sizing: border-box;\n}\n.blockelem[_ngcontent-%COMP%]:hover {\n    box-shadow: 0px 4px 30px rgba(22, 33, 74, 0.08);\n    border-radius: 5px;\n    background-color: #FFF;\n    cursor: pointer;\n}\n.grabme[_ngcontent-%COMP%], .blockico[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n.grabme[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-left: 10px;\n    margin-bottom: -14px;\n    width: 15px;\n}\n#blocklist[_ngcontent-%COMP%] {\n    height: calc(100% - 220px);\n    overflow: auto;\n}\n#proplist[_ngcontent-%COMP%] {\n    height: calc(100% - 305px);\n    overflow: auto;\n    margin-top: -30px;\n    padding-top: 13px;\n}\n.blockin[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: top;\n    margin-left: 12px;\n}\n.blockico[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    background-color: #F1F4FC;\n    border-radius: 5px;\n    text-align: center;\n    white-space: nowrap;\n}\n.blockico[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 0px;\n    display: inline-block;\n    vertical-align: middle;\n}\n.blockico[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    margin-left: auto;\n    margin-right: auto;\n    width: 52%;\n    display: inline-block;\n}\n.blocktext[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 220px;\n    vertical-align: top;\n    margin-left: 12px\n}\n.blocktitle[_ngcontent-%COMP%] {\n    margin: 0px!important;\n    padding: 0px!important;\n    font-family: Roboto;\n    font-weight: 500;\n    font-size: 16px;\n    color: #393C44;\n}\n.blockdesc[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    font-family: Roboto;\n    color: #808292;\n    font-size: 14px;\n    line-height: 21px;\n}\n.blockdisabled[_ngcontent-%COMP%] {\n    background-color: #F0F2F9;\n    opacity: .5;\n}\n#closecard[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-left: 348px;\n    background-color: #FFF;\n    border-radius: 0px 5px 5px 0px;\n    border-bottom: 1px solid #E8E8EF;\n    border-right: 1px solid #E8E8EF;\n    border-top: 1px solid #E8E8EF;\n    width: 53px;\n    height: 53px;\n    text-align: center; \n    z-index: 10;\n}\n#closecard[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 15px\n}\n#canvas[_ngcontent-%COMP%] {\n    position: absolute;\n    width: calc(100% - 361px);\n    height: calc(100% - 71px);\n    top: 71px;\n    left: 361px;\n    z-index: 0;\n    overflow: auto;\n}\n#header[_ngcontent-%COMP%]{\n    margin-left: 1% !important;\n}\n#search[_ngcontent-%COMP%]{\n    margin-bottom: 7% !important;\n}\n#propwrap[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 95%;\n    height: 100%;\n    padding-left: 20px;\n    overflow: hidden;\n    z-index: -2;\n}\n#properties[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 100%;\n    width: 70%;\n    background-color: #FFF;\n    right: -150px;\n    opacity: 0;\n    z-index: 2;\n    top: 0px;\n    box-shadow: -4px 0px 40px rgba(26, 26, 73, 0);\n    padding-left: 20px;\n    transition: all .25s cubic-bezier(.05,.03,.35,1);\n}\n.itson[_ngcontent-%COMP%] {\n    z-index: 2!important;\n}\n.expanded[_ngcontent-%COMP%] {\n    right: 0!important;\n    opacity: 1!important;\n    box-shadow: -4px 0px 40px rgba(26, 26, 73, 0.05);\n        z-index: 2;\n}\n#header2[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-family: Roboto;\n    font-weight: bold;\n    color: #393C44;\n    margin-top: 101px;\n}\n#close[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    position: absolute;\n    right: 20px;\n    z-index: 9999;\n    transition: all .25s cubic-bezier(.05,.03,.35,1);\n}\n#close[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    opacity: .7;\n}\n#propswitch[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #E8E8EF;\n    width: 100%;\n    margin-top: 10px;\n    margin-left: -20px;\n    margin-bottom: 30px;\n}\n#dataprop[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-weight: 500;\n    font-size: 14px;\n    text-align: center;\n    color: #393C44;\n    width: calc(88% / 3);\n    height: 48px;\n    line-height: 48px;\n    display: inline-block;\n    float: left;\n    margin-left: 20px;\n}\n#dataprop[_ngcontent-%COMP%]:after {\n    display: block;\n    content: \"\";\n    width: 100%;\n    height: 4px;\n    background-color: #217CE8;\n    margin-top: -4px;\n}\n#alertprop[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-family: Roboto;\n    font-weight: 500;\n    color: #808292;\n    font-size: 14px;\n    height: 48px;\n    line-height: 48px;\n    width: calc(88% / 3);\n    text-align: center;\n    float: left;\n}\n#logsprop[_ngcontent-%COMP%] {\n    width: calc(88% / 3);\n    display: inline-block;\n    font-family: Roboto;\n    font-weight: 500;\n    color: #808292;\n    font-size: 14px;\n    height: 48px;\n    line-height: 48px;\n    text-align: center;\n}\n.inputlabel[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-size: 14px;\n    color: #253134;\n}\n.dropme[_ngcontent-%COMP%] {\n    background-color: #FFF;\n    border-radius: 5px;\n    border: 1px solid #E8E8EF;\n    box-shadow: 0px 2px 8px rgba(34, 34, 87, 0.05);\n    font-family: Roboto;\n    font-size: 14px;\n    color: #253134;\n    text-indent: 20px;\n    height: 40px;\n    line-height: 40px;\n    width: 287px;\n    margin-bottom: 25px;\n}\n.dropme[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 17px;\n    float: right;\n    margin-right: 15px;\n}\n.checkus[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n.checkus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n}\n.checkus[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-family: Roboto;\n    font-size: 14px;\n    vertical-align: middle;\n    margin-left: 10px;\n}\n#divisionthing[_ngcontent-%COMP%] {\n    height: 1px;\n    width: 100%;\n    background-color: #E8E8EF;\n    position: absolute;\n    right: 0px;\n    bottom: 80;\n}\n#removeblock[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    position: absolute;\n    bottom: 20px;\n    font-family: Roboto;\n    font-size: 14px;\n    text-align: center;\n    width: 287px;\n    height: 38px;\n    line-height: 38px;\n    color: #253134;\n    border: 1px solid #E8E8EF;\n    transition: all .3s cubic-bezier(.05,.03,.35,1);\n}\n#visualize_btn[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    position: absolute;\n    bottom: 20px;\n    font-family: Roboto;\n    font-size: 14px;\n    text-align: center;\n    width: 23%;\n    height: 38px;\n    line-height: 38px;\n    color: white;\n    right: 21px;\n    border: 1px solid #E8E8EF;\n    background-color: #247ce8;\n    transition: all .3s cubic-bezier(.05,.03,.35,1);\n}\n#table_preview[_ngcontent-%COMP%] {\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n    border-collapse: collapse;\n    width: 81%;\n    margin-left: 2%;\n  }\n#table_preview[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    border: 1px solid #ddd;\n    padding: 8px;\n  }\n#table_preview[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2;}\n#table_preview[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: #ddd;}\n#table_preview[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: left;\n    background-color: #247ce8;\n    color: white;\n    text-align: center;\n  }\n#visualize_btn[_ngcontent-%COMP%]:hover {\n    border-radius: 5px;\n    position: absolute;\n    bottom: 20px;\n    font-family: Roboto;\n    font-size: 14px;\n    text-align: center;\n    width: 23%;\n    height: 38px;\n    line-height: 38px;\n    color: #247ce8;\n    right: 21px;\n    border: 1px solid #E8E8EF;\n    background-color: white;\n    transition: all .3s cubic-bezier(.05,.03,.35,1);\n}\n#filename[_ngcontent-%COMP%]{\n    display: inline-block;\n    font-family: Roboto;\n    margin-left: 2%;\n    font-weight: 800;\n}\n#removeblock[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    opacity: .5;\n}\n.noselect[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none; \n    -webkit-user-select: none;  \n       -moz-user-select: none; \n        -ms-user-select: none; \n            user-select: none; \n}\n.blockyname[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-weight: 500;\n    color: #253134;\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 8px;\n    font-size: 16px;\n}\n.blockyleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n}\n.blockyright[_ngcontent-%COMP%] {\n    display: inline-block;\n    float: right;\n    vertical-align: middle;\n    margin-right: 20px;\n    margin-top: 10px;\n    width: 28px;\n    height: 28px;\n    border-radius: 5px;\n    text-align: center; \n    background-color: #FFF;\n    transition: all .3s cubic-bezier(.05,.03,.35,1);\n    z-index: 10;\n}\n.blockyright[_ngcontent-%COMP%]:hover {\n    background-color: #F1F4FC;\n    cursor: pointer;\n}\n.blockyright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 12px;\n}\n.blockyleft[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-left: 20px;\n}\n.blockydiv[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 1px;\n    background-color: #E9E9EF;\n}\n.blockyinfo[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-size: 14px;\n    color: #808292;\n    margin-top: 15px;\n    text-indent: 20px;\n    margin-bottom: 20px;\n}\n.blockyinfo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #253134;\n    font-weight: 500;\n    display: inline-block;\n    border-bottom: 1px solid #D3DCEA;\n    line-height: 20px;\n    text-indent: 0px;\n}\n.block[_ngcontent-%COMP%] {\n    width: 40% !important; \n    background-color: #FFF;\n    margin-top: 0px!important;\n    box-shadow: 0px 4px 30px rgba(22, 33, 74, 0.05);\n}\n.selectedblock[_ngcontent-%COMP%] {\n    border: 2px solid #217CE8;\n    box-shadow: 0px 4px 30px rgba(22, 33, 74, 0.08);\n}\n.custom-select[_ngcontent-%COMP%] {\n    position: relative;\n    font-family: Arial;\n  }\n.custom-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    display: none; \n  }\n.select-selected[_ngcontent-%COMP%] {\n    background-color: DodgerBlue;\n  }\n\n.select-selected[_ngcontent-%COMP%]:after {\n    position: absolute;\n    content: \"\";\n    top: 14px;\n    right: 10px;\n    width: 0;\n    height: 0;\n    border: 6px solid transparent;\n    border-color: #fff transparent transparent transparent;\n  }\n\n.select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    border-color: transparent transparent #fff transparent;\n    top: 7px;\n  }\n\n.select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .select-selected[_ngcontent-%COMP%] {\n    color: #ffffff;\n    padding: 8px 16px;\n    border: 1px solid transparent;\n    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n\n.select-items[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: DodgerBlue;\n    top: 100%;\n    left: 0;\n    right: 0;\n    z-index: 99;\n  }\n\n.select-hide[_ngcontent-%COMP%] {\n    display: none;\n  }\n.select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover, .same-as-selected[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n@media only screen and (max-width: 832px) {\n    #centerswitch[_ngcontent-%COMP%] {\n        display: none;\n    }\n}\n@media only screen and (max-width: 560px) {\n    #names[_ngcontent-%COMP%] {\n        display: none;\n    }   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLCtDQUErQztBQUNuRDtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFFQTs7RUFFRSxVQUFVO0NBQ1gsYUFBYTtDQUNiLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGVBQWU7QUFDaEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsTUFBTTtJQUNOLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQjtBQUNKO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFD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QSx5QkFBeUI7QUFDekI7SUFDRSxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7RUFDYjtBQUVBLGdEQUFnRDtBQUNoRDtJQUNFLGFBQWE7RUFDZjtBQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDO0FBR0Y7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRle1xuICAgIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTAlICFpbXBvcnRhbnQ7XG59XG4uc2VsZWN0X2ZpbGVfYnRue1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyODdweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgY29sb3I6ICMyNTMxMzQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFRjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllciguMDUsLjAzLC4zNSwxKTtcbn1cblxuLnNlbGVjdF9maWxlX2J0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE3Q0U4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLml0ZW1ze1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgcGFkZGluZzogMTFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM3Y2U4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMSU7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4udmlzdWFsaXplIHtcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIG1hcmdpbi10b3A6IDklO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmF4aXMgcGF0aCxcbi5heGlzIGxpbmUge1xuICBmaWxsOiBub25lO1xuXHRzdHJva2U6IGJsYWNrO1xuXHRzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XG59XG4uYXhpcyB0ZXh0IHtcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTFweDtcbn1cblxuI25hdmlnYXRpb24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgaGVpZ2h0OiA3MXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRThFOEVGO1xuICAgIHdpZHRoOiA5NiU7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbjogMiU7XG59XG4jYmFjayB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUY0RkM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7ICAgIFxuICAgIG1hcmdpbi1yaWdodDogMTBweFxufVxuI2JhY2sgaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuI25hbWVzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbiN0aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzM5M0M0NDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4jc3VidGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgY29sb3I6ICM4MDgyOTI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbiNsZWZ0c2lkZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbiNjZW50ZXJzd2l0Y2gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjIycHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTExcHg7XG4gICAgdG9wOiAxNXB4O1xufVxuI2xlZnRzd2l0Y2gge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RUY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQjtcbiAgICB3aWR0aDogMTExcHg7XG4gICAgaGVpZ2h0OiAzOXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGNvbG9yOiAjMzkzQzQ0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3JpZ2h0c3dpdGNoIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGNvbG9yOiAjODA4MjkyO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEVGO1xuICAgIGhlaWdodDogMzlweDtcbiAgICB3aWR0aDogMTAycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMzlweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG4jZGlzY2FyZCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI0E2QTZCMztcbiAgICB3aWR0aDogOTVweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFRjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgY3ViaWMtYmV6aWVyKC4wNSwuMDMsLjM1LDEpO1xufVxuI2Rpc2NhcmQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAuNztcbn1cbiNwdWJsaXNoIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMjE3Q0U4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjE3Q0U4O1xuICAgIHdpZHRoOiAxNDNweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGN1YmljLWJlemllciguMDUsLjAzLC4zNSwxKTtcbn1cbiNwdWJsaXNoOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogLjc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxN0NFODtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzIxN0NFODtcbn1cbiNidXR0b25zcmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuI2xlZnRjYXJkIHtcbiAgICB3aWR0aDogMzcwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEVGO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZy10b3A6IDMlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tdG9wOiA5JTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDI1cHggMnB4ICNlMmUyZTI7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG4jc2VhcmNoIGlucHV0IHtcbiAgICB3aWR0aDogMzE4cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFRjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMzQsMzQsODcsMC4wNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtaW5kZW50OiAzNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogRWRnZSAqL1xuICBjb2xvcjogI0M5QzlENTtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiAjQzlDOUQ1XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI0M5QzlENTtcbn1cbiNzZWFyY2ggaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4jaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzM5M0M0NDtcbn1cbiNzdWJuYXYge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRThFOEVGO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFOEU4RUY7XG59XG4ubmF2ZGlzYWJsZWQge1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgY3ViaWMtYmV6aWVyKC4wNSwuMDMsLjM1LDEpO1xufVxuLm5hdmRpc2FibGVkOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogLjU7XG59XG4ubmF2YWN0aXZlIHtcbiAgICBjb2xvcjogIzM5M0M0NCFpbXBvcnRhbnQ7XG59XG4jdHJpZ2dlcnMge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjODA4MjkyO1xuICAgIHdpZHRoOiBjYWxjKDg4JSAvIDMpO1xuICAgIGhlaWdodDogNDhweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2YWN0aXZlOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAgMTAwJTtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE3Q0U4O1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG59XG4jYWN0aW9ucyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzgwODI5MjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiBjYWxjKDg4JSAvIDMpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbn1cbiNsb2dnZXJzIHtcbiAgICB3aWR0aDogY2FsYyg4OCUgLyAzKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjODA4MjkyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2Zvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMzYycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFRjtcbiAgICBoZWlnaHQ6IDY3cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuI2Zvb3RlciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMzOTNDNDQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBjdWJpYy1iZXppZXIoLjA1LC4wMywuMzUsMSk7XG59XG4jZm9vdGVyIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IC41O1xufVxuI2Zvb3RlciBzcGFuIHtcbiAgICBjb2xvcjogIzgwODI5Mjtcbn1cbiNmb290ZXIgcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjODA4MjkyO1xufVxuI2Zvb3RlciBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uYmxvY2tlbGVtOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4XG59XG4uYmxvY2tlbGVtIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGhlaWdodDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMDUsLjAzLC4zNSwxKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IHJnYmEoMjIsIDMzLCA3NCwgMCk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5ibG9ja2VsZW06aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMzBweCByZ2JhKDIyLCAzMywgNzQsIDAuMDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ncmFibWUsIC5ibG9ja2ljbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmdyYWJtZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTRweDtcbiAgICB3aWR0aDogMTVweDtcbn1cbiNibG9ja2xpc3Qge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjIwcHgpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuI3Byb3BsaXN0IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwNXB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcbn1cbi5ibG9ja2luIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5ibG9ja2ljbyB7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUY0RkM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmJsb2NraWNvIHNwYW4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJsb2NraWNvIGltZyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUyJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYmxvY2t0ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHhcbn1cbi5ibG9ja3RpdGxlIHtcbiAgICBtYXJnaW46IDBweCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMzkzQzQ0O1xufVxuLmJsb2NrZGVzYyB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgY29sb3I6ICM4MDgyOTI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuLmJsb2NrZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjk7XG4gICAgb3BhY2l0eTogLjU7XG59XG4jY2xvc2VjYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDM0OHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRThFOEVGO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFOEU4RUY7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFOEU4RUY7XG4gICAgd2lkdGg6IDUzcHg7XG4gICAgaGVpZ2h0OiA1M3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgei1pbmRleDogMTA7XG59XG4jY2xvc2VjYXJkIGltZyB7XG4gICAgbWFyZ2luLXRvcDogMTVweFxufVxuI2NhbnZhcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNjFweCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MXB4KTtcbiAgICB0b3A6IDcxcHg7XG4gICAgbGVmdDogMzYxcHg7XG4gICAgei1pbmRleDogMDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuI2hlYWRlcntcbiAgICBtYXJnaW4tbGVmdDogMSUgIWltcG9ydGFudDtcbn1cblxuI3NlYXJjaHtcbiAgICBtYXJnaW4tYm90dG9tOiA3JSAhaW1wb3J0YW50O1xufVxuXG4jcHJvcHdyYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogLTI7XG59XG4jcHJvcGVydGllcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgcmlnaHQ6IC0xNTBweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgdG9wOiAwcHg7XG4gICAgYm94LXNoYWRvdzogLTRweCAwcHggNDBweCByZ2JhKDI2LCAyNiwgNzMsIDApO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBjdWJpYy1iZXppZXIoLjA1LC4wMywuMzUsMSk7XG59XG4uaXRzb24ge1xuICAgIHotaW5kZXg6IDIhaW1wb3J0YW50O1xufVxuLmV4cGFuZGVkIHtcbiAgICByaWdodDogMCFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogLTRweCAwcHggNDBweCByZ2JhKDI2LCAyNiwgNzMsIDAuMDUpO1xuICAgICAgICB6LWluZGV4OiAyO1xufVxuI2hlYWRlcjIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMzkzQzQ0O1xuICAgIG1hcmdpbi10b3A6IDEwMXB4O1xufVxuI2Nsb3NlIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBjdWJpYy1iZXppZXIoLjA1LC4wMywuMzUsMSk7XG59XG4jY2xvc2U6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAuNztcbn1cbiNwcm9wc3dpdGNoIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFRjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuI2RhdGFwcm9wIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzM5M0M0NDtcbiAgICB3aWR0aDogY2FsYyg4OCUgLyAzKTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuI2RhdGFwcm9wOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTdDRTg7XG4gICAgbWFyZ2luLXRvcDogLTRweDtcbn1cbiNhbGVydHByb3Age1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM4MDgyOTI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICB3aWR0aDogY2FsYyg4OCUgLyAzKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4jbG9nc3Byb3Age1xuICAgIHdpZHRoOiBjYWxjKDg4JSAvIDMpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM4MDgyOTI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5wdXRsYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMyNTMxMzQ7XG59XG4uZHJvcG1lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEVGO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMzQsIDM0LCA4NywgMC4wNSk7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMyNTMxMzQ7XG4gICAgdGV4dC1pbmRlbnQ6IDIwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAyODdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmRyb3BtZSBpbWcge1xuICAgIG1hcmdpbi10b3A6IDE3cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5jaGVja3VzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNoZWNrdXMgaW1nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jaGVja3VzIHAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuI2RpdmlzaW9udGhpbmcge1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOEU4RUY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiA4MDtcbn1cblxuI3JlbW92ZWJsb2NrIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDI4N3B4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICBjb2xvcjogIzI1MzEzNDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEVGO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgY3ViaWMtYmV6aWVyKC4wNSwuMDMsLjM1LDEpO1xufVxuXG4jdmlzdWFsaXplX2J0biB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMyU7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICByaWdodDogMjFweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEVGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDdjZTg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBjdWJpYy1iZXppZXIoLjA1LC4wMywuMzUsMSk7XG59XG5cbiN0YWJsZV9wcmV2aWV3IHtcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHdpZHRoOiA4MSU7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICB9XG4gIFxuICAjdGFibGVfcHJldmlldyB0ZCwgI2N1c3RvbWVycyB0aCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgXG4gICN0YWJsZV9wcmV2aWV3IHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cbiAgXG4gICN0YWJsZV9wcmV2aWV3IHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cbiAgXG4gICN0YWJsZV9wcmV2aWV3IHRoIHtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDdjZTg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4jdmlzdWFsaXplX2J0bjpob3ZlciB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMyU7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgIGNvbG9yOiAjMjQ3Y2U4O1xuICAgIHJpZ2h0OiAyMXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RUY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBjdWJpYy1iZXppZXIoLjA1LC4wMywuMzUsMSk7XG59XG5cbiNmaWxlbmFtZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuI3JlbW92ZWJsb2NrOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogLjU7XG59XG4ubm9zZWxlY3Qge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xufVxuLmJsb2NreW5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzI1MzEzNDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5ibG9ja3lsZWZ0IGltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYmxvY2t5cmlnaHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllciguMDUsLjAzLC4zNSwxKTtcbiAgICB6LWluZGV4OiAxMDtcbn1cbi5ibG9ja3lyaWdodDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjRGQztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmxvY2t5cmlnaHQgaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLmJsb2NreWxlZnQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5ibG9ja3lkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RUY7XG59XG4uYmxvY2t5aW5mbyB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM4MDgyOTI7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB0ZXh0LWluZGVudDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJsb2NreWluZm8gc3BhbiB7XG4gICAgY29sb3I6ICMyNTMxMzQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEM0RDRUE7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1pbmRlbnQ6IDBweDtcbn1cbi5ibG9jayB7XG4gICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIG1hcmdpbi10b3A6IDBweCFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAzMHB4IHJnYmEoMjIsIDMzLCA3NCwgMC4wNSk7XG59XG4uc2VsZWN0ZWRibG9jayB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzIxN0NFODtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDMwcHggcmdiYSgyMiwgMzMsIDc0LCAwLjA4KTtcbn1cbi5jdXN0b20tc2VsZWN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICB9XG4gIFxuICAuY3VzdG9tLXNlbGVjdCBzZWxlY3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qaGlkZSBvcmlnaW5hbCBTRUxFQ1QgZWxlbWVudDoqL1xuICB9XG4gIFxuICAuc2VsZWN0LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBEb2RnZXJCbHVlO1xuICB9XG4gIFxuICAvKnN0eWxlIHRoZSBhcnJvdyBpbnNpZGUgdGhlIHNlbGVjdCBlbGVtZW50OiovXG4gIC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRvcDogMTRweDtcbiAgICByaWdodDogMTBweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAvKnBvaW50IHRoZSBhcnJvdyB1cHdhcmRzIHdoZW4gdGhlIHNlbGVjdCBib3ggaXMgb3BlbiAoYWN0aXZlKToqL1xuICAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudDtcbiAgICB0b3A6IDdweDtcbiAgfVxuICBcbiAgLypzdHlsZSB0aGUgaXRlbXMgKG9wdGlvbnMpLCBpbmNsdWRpbmcgdGhlIHNlbGVjdGVkIGl0ZW06Ki9cbiAgLnNlbGVjdC1pdGVtcyBkaXYsLnNlbGVjdC1zZWxlY3RlZCB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDAsIDAsIDAsIDAuMSkgdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIFxuICAvKnN0eWxlIGl0ZW1zIChvcHRpb25zKToqL1xuICAuc2VsZWN0LWl0ZW1zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogRG9kZ2VyQmx1ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5OTtcbiAgfVxuICBcbiAgLypoaWRlIHRoZSBpdGVtcyB3aGVuIHRoZSBzZWxlY3QgYm94IGlzIGNsb3NlZDoqL1xuICAuc2VsZWN0LWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5zZWxlY3QtaXRlbXMgZGl2OmhvdmVyLCAuc2FtZS1hcy1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzJweCkge1xuICAgICNjZW50ZXJzd2l0Y2gge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICAjbmFtZXMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH0gICBcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_button_nav_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nav-button/nav-button.component */
    "./src/app/nav-button/nav-button.component.ts");
    /* harmony import */


    var _toolbox_toolbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./toolbox/toolbox.component */
    "./src/app/toolbox/toolbox.component.ts");
    /* harmony import */


    var _toolbox_component_toolbox_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./toolbox-component/toolbox-component.component */
    "./src/app/toolbox-component/toolbox-component.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _nav_button_nav_button_component__WEBPACK_IMPORTED_MODULE_4__["NavButtonComponent"], _toolbox_toolbox_component__WEBPACK_IMPORTED_MODULE_5__["ToolboxComponent"], _toolbox_component_toolbox_component_component__WEBPACK_IMPORTED_MODULE_6__["ToolboxComponentComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _nav_button_nav_button_component__WEBPACK_IMPORTED_MODULE_4__["NavButtonComponent"], _toolbox_toolbox_component__WEBPACK_IMPORTED_MODULE_5__["ToolboxComponent"], _toolbox_component_toolbox_component_component__WEBPACK_IMPORTED_MODULE_6__["ToolboxComponentComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav-button/nav-button.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/nav-button/nav-button.component.ts ***!
    \****************************************************/

  /*! exports provided: NavButtonComponent */

  /***/
  function srcAppNavButtonNavButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavButtonComponent", function () {
      return NavButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavButtonComponent = /*#__PURE__*/function () {
      function NavButtonComponent() {
        _classCallCheck(this, NavButtonComponent);

        this.callFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NavButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick(event) {
          this.callFunction.emit(event);
        }
      }]);

      return NavButtonComponent;
    }();

    NavButtonComponent.ɵfac = function NavButtonComponent_Factory(t) {
      return new (t || NavButtonComponent)();
    };

    NavButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavButtonComponent,
      selectors: [["nav-button"]],
      inputs: {
        group: "group",
        type: "type",
        description: "description",
        "class": "class",
        data: "data"
      },
      outputs: {
        callFunction: "callFunction"
      },
      decls: 2,
      vars: 4,
      consts: [[3, "type", "click"]],
      template: function NavButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavButtonComponent_Template_button_click_0_listener($event) {
            return ctx.onClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, "\n");
        }
      },
      styles: ["button{\n    font-family: Roboto;\n    color: #808292;\n    border-radius: 29px;\n    border: 1px solid #E8E8EF;\n    display: inline-block;\n    font-size: 14px;\n    line-height: 39px;\n    text-align: center;\n    padding: 0%;\n    background-color: #F1F4FC;\n    padding-left: 2%;\n    padding-right: 2%;\n    margin-right: 2%;\n    outline: None !important;\n    cursor: pointer;\n}\nbutton:hover{\n    background-color: #FBFBFB;\n    font-family: Roboto;\n    -webkit-text-decoration: None;\n            text-decoration: None;\n    outline: None;\n    color: #393C44;\n    display: inline-block;\n    font-size: 14px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJ1dHRvbi9uYXYtYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJ1dHRvbi9uYXYtYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBjb2xvcjogIzgwODI5MjtcbiAgICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RUY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMzlweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjRGQztcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgb3V0bGluZTogTm9uZSAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBOb25lO1xuICAgIG91dGxpbmU6IE5vbmU7XG4gICAgY29sb3I6ICMzOTNDNDQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nav-button',
          templateUrl: './nav-button.component.html',
          styleUrls: ['./nav-button.component.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [];
      }, {
        group: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "class": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        callFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/toolbox-component/toolbox-component.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/toolbox-component/toolbox-component.component.ts ***!
    \******************************************************************/

  /*! exports provided: ToolboxComponentComponent */

  /***/
  function srcAppToolboxComponentToolboxComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolboxComponentComponent", function () {
      return ToolboxComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ToolboxComponentComponent = /*#__PURE__*/function () {
      function ToolboxComponentComponent() {
        _classCallCheck(this, ToolboxComponentComponent);
      }

      _createClass(ToolboxComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToolboxComponentComponent;
    }();

    ToolboxComponentComponent.ɵfac = function ToolboxComponentComponent_Factory(t) {
      return new (t || ToolboxComponentComponent)();
    };

    ToolboxComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolboxComponentComponent,
      selectors: [["app-toolbox-component"]],
      inputs: {
        description: "description",
        title: "title",
        toot_type: "toot_type",
        tool: "tool"
      },
      decls: 13,
      vars: 3,
      consts: [[1, "blockelem", "create-flowy", "noselect"], ["type", "hidden", "name", "blockelemtype", "value", "4", 1, "blockelemtype"], [1, "grabme"], ["src", "assets/grabme.svg"], [1, "blockin"], [1, "blockico"], [3, "src"], [1, "blocktext"], [1, "blocktitle"], [1, "blockdesc"]],
      template: function ToolboxComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/", ctx.tool, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        }
      },
      styles: ["#blocklist[_ngcontent-%COMP%] {\n    height: calc(100% - 195px);\n    overflow: auto;\n}\n.blockelem[_ngcontent-%COMP%]:first-child {\n    margin-top: 20px\n}\n.blockelem[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    width: 90%;\n    border: 1px solid transparent;\n    transition-property: box-shadow, height;\n    transition-duration: .2s;\n    transition-timing-function: cubic-bezier(.05,.03,.35,1);\n    border-radius: 5px;\n    box-shadow: 0px 0px 30px rgba(22, 33, 74, 0);\n    box-sizing: border-box;\n}\n.grabme[_ngcontent-%COMP%], .blockico[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n.grabme[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-left: 10px;\n    margin-bottom: -14px;\n    width: 15px;\n}\n.blockelem[_ngcontent-%COMP%]:hover {\n    box-shadow: 0px 4px 30px rgba(22, 33, 74, 0.08);\n    border-radius: 5px;\n    background-color: #FFF;\n    cursor: pointer;\n}\n.noselect[_ngcontent-%COMP%] {\n    -webkit-touch-callout: none; \n      -webkit-user-select: none;  \n         -moz-user-select: none; \n          -ms-user-select: none; \n              user-select: none; \n  }\n.blockin[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: top;\n    margin-left: 12px;\n}\n.blockico[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    background-color: #F1F4FC;\n    border-radius: 5px;\n    text-align: center;\n    white-space: nowrap;\n}\n.blockico[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 0px;\n    display: inline-block;\n    vertical-align: middle;\n}\n.blockico[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    margin-left: auto;\n    width: 52%;\n    margin-right: auto;\n    display: inline-block;\n}\n.blocktext[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 220px;\n    vertical-align: top;\n    margin-left: 12px\n}\n.blocktitle[_ngcontent-%COMP%] {\n    margin: 0px!important;\n    padding: 0px!important;\n    font-family: Roboto;\n    font-weight: 500;\n    font-size: 16px;\n    color: #393C44;\n}\n.blockdesc[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    font-family: Roboto;\n    color: #808292;\n    font-size: 14px;\n    line-height: 21px;\n}\n.blockdisabled[_ngcontent-%COMP%] {\n    background-color: #F0F2F9;\n    opacity: .5;\n}\n#proplist[_ngcontent-%COMP%] {\n    height: calc(100% - 305px);\n    overflow: auto;\n    margin-top: -30px;\n    padding-top: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJveC1jb21wb25lbnQvdG9vbGJveC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztBQUNsQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4Qix1REFBdUQ7SUFDdkQsa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztBQUNmO0FBQ0E7SUFDSSwrQ0FBK0M7SUFDL0Msa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQkFBMkIsRUFBRSxlQUFlO01BQzFDLHlCQUF5QixFQUFFLFdBQVcsRUFDWCxtQkFBbUI7U0FDM0Msc0JBQXNCLEVBQUUsNEJBQTRCO1VBQ25ELHFCQUFxQixFQUFFLDJCQUEyQjtjQUM5QyxpQkFBaUIsRUFBRTs0RUFDMkM7RUFDMUU7QUFDRjtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQjtBQUNKO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xib3gtY29tcG9uZW50L3Rvb2xib3gtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNibG9ja2xpc3Qge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTk1cHgpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLmJsb2NrZWxlbTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMjBweFxufVxuLmJsb2NrZWxlbSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBoZWlnaHQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjA1LC4wMywuMzUsMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCByZ2JhKDIyLCAzMywgNzQsIDApO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uZ3JhYm1lLCAuYmxvY2tpY28ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5ncmFibWUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTE0cHg7XG4gICAgd2lkdGg6IDE1cHg7XG59XG4uYmxvY2tlbGVtOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDMwcHggcmdiYSgyMiwgMzMsIDc0LCAwLjA4KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubm9zZWxlY3Qge1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUsIE9wZXJhIGFuZCBGaXJlZm94ICovXG4gIH1cbi5ibG9ja2luIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5ibG9ja2ljbyB7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUY0RkM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmJsb2NraWNvIHNwYW4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJsb2NraWNvIGltZyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB3aWR0aDogNTIlO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYmxvY2t0ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHhcbn1cbi5ibG9ja3RpdGxlIHtcbiAgICBtYXJnaW46IDBweCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMzkzQzQ0O1xufVxuLmJsb2NrZGVzYyB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgY29sb3I6ICM4MDgyOTI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuLmJsb2NrZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjk7XG4gICAgb3BhY2l0eTogLjU7XG59XG5cbiNwcm9wbGlzdCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMDVweCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgcGFkZGluZy10b3A6IDEzcHg7XG59XG5cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolboxComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toolbox-component',
          templateUrl: './toolbox-component.component.html',
          styleUrls: ['./toolbox-component.component.css']
        }]
      }], function () {
        return [];
      }, {
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toot_type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tool: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/toolbox/toolbox.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/toolbox/toolbox.component.ts ***!
    \**********************************************/

  /*! exports provided: ToolboxComponent */

  /***/
  function srcAppToolboxToolboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolboxComponent", function () {
      return ToolboxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _toolbox_component_toolbox_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../toolbox-component/toolbox-component.component */
    "./src/app/toolbox-component/toolbox-component.component.ts");

    var ToolboxComponent = /*#__PURE__*/function () {
      function ToolboxComponent() {
        _classCallCheck(this, ToolboxComponent);

        this.selectedToolSet = "Data";
      }

      _createClass(ToolboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToolboxComponent;
    }();

    ToolboxComponent.ɵfac = function ToolboxComponent_Factory(t) {
      return new (t || ToolboxComponent)();
    };

    ToolboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolboxComponent,
      selectors: [["app-toolbox"]],
      decls: 36,
      vars: 10,
      consts: [["id", "leftcard"], ["id", "closecard", "onclick", "document.getElementById('leftcard').style.opacity=1 - document.getElementById('leftcard').style.opacity;"], ["src", "assets/closeleft.svg"], ["id", "header"], ["id", "search"], ["src", "assets/search.svg"], ["type", "text", "placeholder", "Search Pipeline Toolbox"], ["id", "subnav"], ["id", "actions", 1, "side", 3, "ngClass", "click"], ["id", "loggers", 1, "side", 3, "ngClass", "click"], [1, "toolset_container"], ["tooltype", "Represent", 1, "toolset-holder", 3, "hidden"], ["tooltype", "Represent", "tool", "error", "title", "Dimentionality Reduction", "description", "Drag the tool to perform FactorAnalysis, PCA etc."], ["tooltype", "Represent", "tool", "error", "title", "Chemical Representation", "description", "Drag the tool to represent data using chemml chemical representations"], ["tooltype", "Data", 1, "toolset-holder", 3, "hidden"], ["tooltype", "Data", "tool", "csv", "title", "Import data from CSV", "description", "Drag the button to add a CSV Data tool to the pipeline"], ["tooltype", "Data", "tool", "chemical_data", "title", "Import chemical data", "description", "Drag the button to add a chemistry Data tool to the pipeline"], ["tooltype", "Preprocessing", 1, "toolset-holder", 3, "hidden"], ["tooltype", "Preprocessing", "tool", "error", "title", "Add MaxAbs Scaler", "description", "Scale each feature by its maximum absolute value."], ["tooltype", "Preprocessing", "tool", "error", "title", "Add MinMax Scaler", "description", "Transform features by scaling each feature to a given range."], ["tooltype", "Preprocessing", "tool", "error", "title", "Add Normalizer", "description", "Normalize samples individually to unit norm."], ["tooltype", "Preprocessing", "tool", "error", "title", "Add OneHot Encoder", "description", "Encode categorical features as a one-hot numeric array."], ["tooltype", "Preprocessing", "tool", "error", "title", "Add Standard Scaler", "description", "Standardize features by removing the mean and scaling to unit variance/"], ["tooltype", "Model", 1, "toolset-holder", 3, "hidden"], ["tooltype", "Model", "tool", "error", "title", "Import data from CSV", "description", "Drag the button to add a CSV Data tool to the pipeline"], ["tooltype", "Postprocessing", 1, "toolset-holder", 3, "hidden"], ["tooltype", "Postprocessing", "tool", "error", "title", "Import data from CSV", "description", "Drag the button to add a CSV Data tool to the pipeline"]],
      template: function ToolboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pipeline Toolbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolboxComponent_Template_div_click_9_listener() {
            return ctx.selectedToolSet = "Data";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolboxComponent_Template_div_click_11_listener() {
            return ctx.selectedToolSet = "Represent";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Represent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolboxComponent_Template_div_click_13_listener() {
            return ctx.selectedToolSet = "Preprocessing";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Preprocessing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolboxComponent_Template_div_click_15_listener() {
            return ctx.selectedToolSet = "Model";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolboxComponent_Template_div_click_17_listener() {
            return ctx.selectedToolSet = "Postprocessing";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Postprocessing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-toolbox-component", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-toolbox-component", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-toolbox-component", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-toolbox-component", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-toolbox-component", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-toolbox-component", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-toolbox-component", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-toolbox-component", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-toolbox-component", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-toolbox-component", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-toolbox-component", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedToolSet === "Data" ? "navactive" : "navdisabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedToolSet === "Represent" ? "navactive" : "navdisabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedToolSet === "Preprocessing" ? "navactive" : "navdisabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedToolSet === "Model" ? "navactive" : "navdisabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedToolSet === "Postprocessing" ? "navactive" : "navdisabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.selectedToolSet !== "Represent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.selectedToolSet !== "Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.selectedToolSet !== "Preprocessing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.selectedToolSet !== "Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.selectedToolSet !== "Postprocessing");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _toolbox_component_toolbox_component_component__WEBPACK_IMPORTED_MODULE_2__["ToolboxComponentComponent"]],
      styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n    margin: 0px;\n    padding: 0px;\n    overflow: hidden;\n    background-image: url('tile.png');\n    background-repeat: repeat;\n    background-size: 30px 30px;\n    background-color: #FBFBFB;\n    height: 100%;\n}\n.side[_ngcontent-%COMP%]{\n    width: 25% !important;\n    margin-left: 10% !important;\n}\n.select_file_btn[_ngcontent-%COMP%]{\n    display:inline-block;\n    border-radius: 5px;\n    bottom: 20px;\n    font-family: Roboto;\n    font-size: 14px;\n    text-align: center;\n    width: 287px;\n    height: 38px;\n    line-height: 38px;\n    color: #253134;\n    border: 1px solid #E8E8EF;\n    transition: all .3s cubic-bezier(.05,.03,.35,1);\n}\n.select_file_btn[_ngcontent-%COMP%]:hover{\n    background-color: #217CE8;\n    color: white;\n}\n.items[_ngcontent-%COMP%]{\n    display: inline-block;\n    margin-left: 5%;\n    padding: 11px;\n    background-color: #237ce8;\n    color: white;\n    border-radius: 26px;\n    padding-left: 1%;\n    font-family: Roboto;\n    padding-right: 1%;\n    margin: 15px;\n    margin-left: 2%;\n}\n.visualize[_ngcontent-%COMP%] {\n    \n    height: 90%;\n    background-color: white;\n    padding: 0;\n    margin: 5%;\n    margin-left: 3%;\n    margin-top: 9%;\n    border-radius: 15px;\n    margin-right: 3%;\n    margin-bottom: 5%;\n}\n.axis[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .axis[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  fill: none;\n\tstroke: black;\n\tshape-rendering: crispEdges;\n}\n.axis[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n\tfont-family: sans-serif;\n\tfont-size: 11px;\n}\n#navigation[_ngcontent-%COMP%] {\n    border-radius: 18px;\n    height: 71px;\n    background-color: white;\n    border-bottom: 1px solid #E8E8EF;\n    width: 96%;\n    display: table;\n    box-sizing: border-box;\n    position: fixed;\n    top: 0;\n    margin: 2%;\n}\n#back[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border-radius: 100px;\n    background-color: #F1F4FC;\n    text-align: center;\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 15px;    \n    margin-right: 10px\n}\n#back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 13px;\n}\n#names[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: top;\n}\n#title[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-weight: 500;\n    font-size: 16px;\n    color: #393C44;\n    margin-bottom: 0px;\n}\n#subtitle[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    color: #808292;\n    font-size: 14px;\n    margin-top: 5px;\n}\n#leftside[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 20px;\n}\n#centerswitch[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 222px;\n    left: 50%;\n    margin-left: -111px;\n    top: 15px;\n}\n#leftswitch[_ngcontent-%COMP%] {\n    border: 1px solid #E8E8EF;\n    background-color: #FBFBFB;\n    width: 111px;\n    height: 39px;\n    line-height: 39px;\n    border-radius: 5px 0px 0px 5px;\n    font-family: Roboto;\n    color: #393C44;\n    display: inline-block;\n    font-size: 14px;\n    text-align: center;\n}\n#rightswitch[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    color: #808292;\n    border-radius: 0px 5px 5px 0px;\n    border: 1px solid #E8E8EF;\n    height: 39px;\n    width: 102px;\n    display: inline-block;\n    font-size: 14px;\n    line-height: 39px;\n    text-align: center;\n    margin-left: -5px;\n}\n#discard[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-weight: 500;\n    font-size: 14px;\n    color: #A6A6B3;\n    width: 95px;\n    height: 38px;\n    border: 1px solid #E8E8EF;\n    border-radius: 5px;\n    text-align: center;\n    line-height: 38px;\n    display: inline-block;\n    vertical-align: top;\n    transition: all .2s cubic-bezier(.05,.03,.35,1);\n}\n#discard[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    opacity: .7;\n}\n#publish[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-weight: 500;\n    font-size: 14px;\n    color: #217CE8;\n    background-color: white;\n    border-radius: 5px;\n    border: 2px solid #217CE8;\n    width: 143px;\n    height: 38px;\n    margin-left: 10px;\n    display: inline-block;\n    vertical-align: top;\n    text-align: center;\n    line-height: 38px;\n    margin-right: 20px;\n    transition: all .2s cubic-bezier(.05,.03,.35,1);\n}\n#publish[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    opacity: .7;\n    background-color: #217CE8;\n    border-radius: 5px;\n    color:white;\n    border: 2px solid #217CE8;\n}\n#buttonsright[_ngcontent-%COMP%] {\n    float: right;\n    margin-top: 15px;\n}\n#leftcard[_ngcontent-%COMP%] {\n    width: 370px;\n    background-color: #FFF;\n    border: 1px solid #E8E8EF;\n    box-sizing: border-box;\n    padding-top: 1%;\n    padding-left: 20px;\n    height: 60%;\n    position: absolute;\n    z-index: 2;\n    vertical-align: middle;\n    margin-top: 250px;\n    border-radius: 16px;\n    margin-left: 2%;\n    box-shadow: 2px 2px 25px 2px #e2e2e2;\n    transition: 0.5s;\n    padding-bottom: 1%;\n}\n#search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 318px;\n    height: 40px;\n    background-color: #FFF;\n    border: 1px solid #E8E8EF;\n    box-sizing: border-box;\n    box-shadow: 0px 2px 8px rgba(34,34,87,0.05);\n    border-radius: 5px;\n    text-indent: 35px;\n    font-family: Roboto;\n    font-size: 16px;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #C9C9D5;\n}\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #C9C9D5;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #C9C9D5;\n}\n#search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute; \n    margin-top: 10px;\n    width: 18px;\n    margin-left: 12px;\n}\n#header[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-family: Roboto;\n    font-weight: bold;\n    color: #393C44;\n}\n#subnav[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #E8E8EF;\n    width: calc(100% + 20px);\n    margin-left: -20px;\n    margin-top: 10px;\n    overflow: scroll;\n    display: flex;\n    border-top: 1px solid #E8E8EF;\n}\n.navdisabled[_ngcontent-%COMP%] {\n    transition: all .3s cubic-bezier(.05,.03,.35,1);\n}\n.navdisabled[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    opacity: .5;\n}\n.navactive[_ngcontent-%COMP%] {\n    color: #393C44!important;\n}\n#triggers[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    font-family: Roboto;\n    font-weight: 500;\n    font-size: 14px;\n    text-align: center;\n    color: #808292;\n    width: calc(88% / 3);\n    height: 48px;\n    line-height: 48px;\n    display: inline-block;\n    float: left;\n}\n.navactive[_ngcontent-%COMP%]:after {\n    display: block;\n    content: \"\";\n    width:  100%;\n    height: 4px;\n    background-color: #217CE8;\n    margin-top: -4px;\n}\n#actions[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-family: Roboto;\n    font-weight: 500;\n    color: #808292;\n    font-size: 14px;\n    height: 48px;\n    line-height: 48px;\n    width: calc(88% / 3);\n    text-align: center;\n    float: left;\n}\n#loggers[_ngcontent-%COMP%] {\n    width: calc(88% / 3);\n    display: inline-block;\n    font-family: Roboto;\n    font-weight: 500;\n    color: #808292;\n    font-size: 14px;\n    height: 48px;\n    line-height: 48px;\n    text-align: center;\n}\n#footer[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    padding-left: 20px;\n    line-height: 40px;\n    bottom: 0;\n    width: 362px;\n    border: 1px solid #E8E8EF;\n    height: 67px;\n    box-sizing: border-box;\n    background-color: #FFF;\n    font-family: Roboto;\n    font-size: 14px;\n}\n#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: #393C44;\n    transition: all .2s cubic-bezier(.05,.03,.35,1);\n}\n#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    opacity: .5;\n}\n#footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #808292;\n}\n#footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: inline-block;\n    color: #808292;\n}\n#footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    margin-right: 5px;\n}\n#closecard[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-left: 347px;\n    background-color: #FFF;\n    border-radius: 0px 5px 5px 0px;\n    border-bottom: 1px solid #E8E8EF;\n    border-right: 1px solid #E8E8EF;\n    border-top: 1px solid #E8E8EF;\n    width: 53px;\n    height: 53px;\n    text-align: center;\n    z-index: 10;\n    top: 9%;\n}\n#closecard[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 15px\n}\n.toolset_container[_ngcontent-%COMP%]{\n    padding-bottom: 8%;\n    height: 69%;\n    \n    clear: both;\n    overflow: scroll;\n}\n#canvas[_ngcontent-%COMP%] {\n    position: absolute;\n    width: calc(100% - 361px);\n    height: calc(100% - 71px);\n    top: 71px;\n    left: 361px;\n    z-index: 0;\n    overflow: auto;\n}\n#header[_ngcontent-%COMP%]{\n    margin-left: 1% !important;\n}\n#search[_ngcontent-%COMP%]{\n    margin-bottom: 7% !important;\n}\n#propwrap[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 95%;\n    height: 100%;\n    padding-left: 20px;\n    overflow: hidden;\n    z-index: -2;\n}\n#properties[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 100%;\n    width: 70%;\n    background-color: #FFF;\n    right: -150px;\n    opacity: 0;\n    z-index: 2;\n    top: 0px;\n    box-shadow: -4px 0px 40px rgba(26, 26, 73, 0);\n    padding-left: 20px;\n    transition: all .25s cubic-bezier(.05,.03,.35,1);\n}\n.itson[_ngcontent-%COMP%] {\n    z-index: 2!important;\n}\n.expanded[_ngcontent-%COMP%] {\n    right: 0!important;\n    opacity: 1!important;\n    box-shadow: -4px 0px 40px rgba(26, 26, 73, 0.05);\n        z-index: 2;\n}\n#header2[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-family: Roboto;\n    font-weight: bold;\n    color: #393C44;\n    margin-top: 101px;\n}\n#close[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    position: absolute;\n    right: 20px;\n    z-index: 9999;\n    transition: all .25s cubic-bezier(.05,.03,.35,1);\n}\n#close[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    opacity: .7;\n}\n#propswitch[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #E8E8EF;\n    width: 100%;\n    margin-top: 10px;\n    margin-left: -20px;\n    margin-bottom: 30px;\n}\n#dataprop[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-weight: 500;\n    font-size: 14px;\n    text-align: center;\n    color: #393C44;\n    width: calc(88% / 3);\n    height: 48px;\n    line-height: 48px;\n    display: inline-block;\n    float: left;\n    margin-left: 20px;\n}\n#dataprop[_ngcontent-%COMP%]:after {\n    display: block;\n    content: \"\";\n    width: 100%;\n    height: 4px;\n    background-color: #217CE8;\n    margin-top: -4px;\n}\n#alertprop[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-family: Roboto;\n    font-weight: 500;\n    color: #808292;\n    font-size: 14px;\n    height: 48px;\n    line-height: 48px;\n    width: calc(88% / 3);\n    text-align: center;\n    float: left;\n}\n#logsprop[_ngcontent-%COMP%] {\n    width: calc(88% / 3);\n    display: inline-block;\n    font-family: Roboto;\n    font-weight: 500;\n    color: #808292;\n    font-size: 14px;\n    height: 48px;\n    line-height: 48px;\n    text-align: center;\n}\n.inputlabel[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-size: 14px;\n    color: #253134;\n}\n.dropme[_ngcontent-%COMP%] {\n    background-color: #FFF;\n    border-radius: 5px;\n    border: 1px solid #E8E8EF;\n    box-shadow: 0px 2px 8px rgba(34, 34, 87, 0.05);\n    font-family: Roboto;\n    font-size: 14px;\n    color: #253134;\n    text-indent: 20px;\n    height: 40px;\n    line-height: 40px;\n    width: 287px;\n    margin-bottom: 25px;\n}\n.dropme[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 17px;\n    float: right;\n    margin-right: 15px;\n}\n.checkus[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n.checkus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n}\n.checkus[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-family: Roboto;\n    font-size: 14px;\n    vertical-align: middle;\n    margin-left: 10px;\n}\n#divisionthing[_ngcontent-%COMP%] {\n    height: 1px;\n    width: 100%;\n    background-color: #E8E8EF;\n    position: absolute;\n    right: 0px;\n    bottom: 80;\n}\n#removeblock[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    position: absolute;\n    bottom: 20px;\n    font-family: Roboto;\n    font-size: 14px;\n    text-align: center;\n    width: 287px;\n    height: 38px;\n    line-height: 38px;\n    color: #253134;\n    border: 1px solid #E8E8EF;\n    transition: all .3s cubic-bezier(.05,.03,.35,1);\n}\n#visualize_btn[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    position: absolute;\n    bottom: 20px;\n    font-family: Roboto;\n    font-size: 14px;\n    text-align: center;\n    width: 23%;\n    height: 38px;\n    line-height: 38px;\n    color: white;\n    right: 21px;\n    border: 1px solid #E8E8EF;\n    background-color: #247ce8;\n    transition: all .3s cubic-bezier(.05,.03,.35,1);\n}\n#table_preview[_ngcontent-%COMP%] {\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n    border-collapse: collapse;\n    width: 81%;\n    margin-left: 2%;\n  }\n#table_preview[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    border: 1px solid #ddd;\n    padding: 8px;\n  }\n#table_preview[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2;}\n#table_preview[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: #ddd;}\n#table_preview[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: left;\n    background-color: #247ce8;\n    color: white;\n    text-align: center;\n  }\n#visualize_btn[_ngcontent-%COMP%]:hover {\n    border-radius: 5px;\n    position: absolute;\n    bottom: 20px;\n    font-family: Roboto;\n    font-size: 14px;\n    text-align: center;\n    width: 23%;\n    height: 38px;\n    line-height: 38px;\n    color: #247ce8;\n    right: 21px;\n    border: 1px solid #E8E8EF;\n    background-color: white;\n    transition: all .3s cubic-bezier(.05,.03,.35,1);\n}\n#filename[_ngcontent-%COMP%]{\n    display: inline-block;\n    font-family: Roboto;\n    margin-left: 2%;\n    font-weight: 800;\n}\n#removeblock[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    opacity: .5;\n}\n.noselect[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none; \n    -webkit-user-select: none;  \n       -moz-user-select: none; \n        -ms-user-select: none; \n            user-select: none; \n}\n.blockyname[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-weight: 500;\n    color: #253134;\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 8px;\n    font-size: 16px;\n}\n.blockyleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n}\n.blockyright[_ngcontent-%COMP%] {\n    display: inline-block;\n    float: right;\n    vertical-align: middle;\n    margin-right: 20px;\n    margin-top: 10px;\n    width: 28px;\n    height: 28px;\n    border-radius: 5px;\n    text-align: center; \n    background-color: #FFF;\n    transition: all .3s cubic-bezier(.05,.03,.35,1);\n    z-index: 10;\n}\n.blockyright[_ngcontent-%COMP%]:hover {\n    background-color: #F1F4FC;\n    cursor: pointer;\n}\n.blockyright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 12px;\n}\n.blockyleft[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-left: 20px;\n}\n.blockydiv[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 1px;\n    background-color: #E9E9EF;\n}\n.blockyinfo[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-size: 14px;\n    color: #808292;\n    margin-top: 15px;\n    text-indent: 20px;\n    margin-bottom: 20px;\n}\n.blockyinfo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #253134;\n    font-weight: 500;\n    display: inline-block;\n    border-bottom: 1px solid #D3DCEA;\n    line-height: 20px;\n    text-indent: 0px;\n}\n.block[_ngcontent-%COMP%] {\n    width: 40% !important; \n    background-color: #FFF;\n    margin-top: 0px!important;\n    box-shadow: 0px 4px 30px rgba(22, 33, 74, 0.05);\n}\n.selectedblock[_ngcontent-%COMP%] {\n    border: 2px solid #217CE8;\n    box-shadow: 0px 4px 30px rgba(22, 33, 74, 0.08);\n}\n.custom-select[_ngcontent-%COMP%] {\n    position: relative;\n    font-family: Arial;\n  }\n.custom-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    display: none; \n  }\n.select-selected[_ngcontent-%COMP%] {\n    background-color: DodgerBlue;\n  }\n\n.select-selected[_ngcontent-%COMP%]:after {\n    position: absolute;\n    content: \"\";\n    top: 14px;\n    right: 10px;\n    width: 0;\n    height: 0;\n    border: 6px solid transparent;\n    border-color: #fff transparent transparent transparent;\n  }\n\n.select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    border-color: transparent transparent #fff transparent;\n    top: 7px;\n  }\n\n.select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .select-selected[_ngcontent-%COMP%] {\n    color: #ffffff;\n    padding: 8px 16px;\n    border: 1px solid transparent;\n    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n\n.select-items[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: DodgerBlue;\n    top: 100%;\n    left: 0;\n    right: 0;\n    z-index: 99;\n  }\n\n.select-hide[_ngcontent-%COMP%] {\n    display: none;\n  }\n.select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover, .same-as-selected[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n@media only screen and (max-width: 832px) {\n    #centerswitch[_ngcontent-%COMP%] {\n        display: none;\n    }\n}\n@media only screen and (max-width: 560px) {\n    #names[_ngcontent-%COMP%] {\n        display: none;\n    }   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJveC90b29sYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQ0FBNEM7SUFDNUMseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QiwrQ0FBK0M7QUFDbkQ7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFVBQVU7SUFDVixlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUE7O0VBRUUsVUFBVTtDQUNYLGFBQWE7Q0FDYiwyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLHVCQUF1QjtDQUN2QixlQUFlO0FBQ2hCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLE1BQU07SUFDTixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxZ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UixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLHNEQUFzRDtFQUN4RDtBQUVBLGdFQUFnRTtBQUNoRTtJQUNFLHNEQUFzRDtJQUN0RCxRQUFRO0VBQ1Y7QUFFQSwwREFBMEQ7QUFDMUQ7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixvRUFBb0U7SUFDcEUsZUFBZTtJQUNmLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtFQUNuQjtBQUVBLHlCQUF5QjtBQUN6QjtJQUNFLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztFQUNiO0FBRUEsZ0RBQWdEO0FBQ2hEO0lBQ0UsYUFBYTtFQUNmO0FBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7QUFHRjtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xib3gvdG9vbGJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSwgaHRtbCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy90aWxlLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5zaWRle1xuICAgIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTAlICFpbXBvcnRhbnQ7XG59XG4uc2VsZWN0X2ZpbGVfYnRue1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyODdweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgY29sb3I6ICMyNTMxMzQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFRjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllciguMDUsLjAzLC4zNSwxKTtcbn1cblxuLnNlbGVjdF9maWxlX2J0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE3Q0U4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLml0ZW1ze1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgcGFkZGluZzogMTFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM3Y2U4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMSU7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4udmlzdWFsaXplIHtcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIG1hcmdpbi10b3A6IDklO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmF4aXMgcGF0aCxcbi5heGlzIGxpbmUge1xuICBmaWxsOiBub25lO1xuXHRzdHJva2U6IGJsYWNrO1xuXHRzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XG59XG4uYXhpcyB0ZXh0IHtcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTFweDtcbn1cblxuI25hdmlnYXRpb24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgaGVpZ2h0OiA3MXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRThFOEVGO1xuICAgIHdpZHRoOiA5NiU7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbjogMiU7XG59XG4jYmFjayB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUY0RkM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7ICAgIFxuICAgIG1hcmdpbi1yaWdodDogMTBweFxufVxuI2JhY2sgaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuI25hbWVzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbiN0aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzM5M0M0NDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4jc3VidGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgY29sb3I6ICM4MDgyOTI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbiNsZWZ0c2lkZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4jY2VudGVyc3dpdGNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIyMnB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTExMXB4O1xuICAgIHRvcDogMTVweDtcbn1cbiNsZWZ0c3dpdGNoIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEVGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkI7XG4gICAgd2lkdGg6IDExMXB4O1xuICAgIGhlaWdodDogMzlweDtcbiAgICBsaW5lLWhlaWdodDogMzlweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBjb2xvcjogIzM5M0M0NDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNyaWdodHN3aXRjaCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBjb2xvcjogIzgwODI5MjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFRjtcbiAgICBoZWlnaHQ6IDM5cHg7XG4gICAgd2lkdGg6IDEwMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM5cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuI2Rpc2NhcmQge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNBNkE2QjM7XG4gICAgd2lkdGg6IDk1cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RUY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGN1YmljLWJlemllciguMDUsLjAzLC4zNSwxKTtcbn1cbiNkaXNjYXJkOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogLjc7XG59XG4jcHVibGlzaCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzIxN0NFODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzIxN0NFODtcbiAgICB3aWR0aDogMTQzcHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBjdWJpYy1iZXppZXIoLjA1LC4wMywuMzUsMSk7XG59XG4jcHVibGlzaDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IC43O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTdDRTg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMTdDRTg7XG59XG4jYnV0dG9uc3JpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbiNsZWZ0Y2FyZCB7XG4gICAgd2lkdGg6IDM3MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFRjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctdG9wOiAxJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tdG9wOiAyNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDI1cHggMnB4ICNlMmUyZTI7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XG59XG4jc2VhcmNoIGlucHV0IHtcbiAgICB3aWR0aDogMzE4cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFRjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMzQsMzQsODcsMC4wNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtaW5kZW50OiAzNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogRWRnZSAqL1xuICBjb2xvcjogI0M5QzlENTtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiAjQzlDOUQ1XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI0M5QzlENTtcbn1cbiNzZWFyY2ggaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4jaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzM5M0M0NDtcbn1cbiNzdWJuYXYge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRThFOEVGO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFOEU4RUY7XG59XG4ubmF2ZGlzYWJsZWQge1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgY3ViaWMtYmV6aWVyKC4wNSwuMDMsLjM1LDEpO1xufVxuLm5hdmRpc2FibGVkOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogLjU7XG59XG4ubmF2YWN0aXZlIHtcbiAgICBjb2xvcjogIzM5M0M0NCFpbXBvcnRhbnQ7XG59XG4jdHJpZ2dlcnMge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjODA4MjkyO1xuICAgIHdpZHRoOiBjYWxjKDg4JSAvIDMpO1xuICAgIGhlaWdodDogNDhweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2YWN0aXZlOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAgMTAwJTtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE3Q0U4O1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG59XG4jYWN0aW9ucyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzgwODI5MjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiBjYWxjKDg4JSAvIDMpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbn1cbiNsb2dnZXJzIHtcbiAgICB3aWR0aDogY2FsYyg4OCUgLyAzKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjODA4MjkyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2Zvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMzYycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFRjtcbiAgICBoZWlnaHQ6IDY3cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuI2Zvb3RlciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMzOTNDNDQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBjdWJpYy1iZXppZXIoLjA1LC4wMywuMzUsMSk7XG59XG4jZm9vdGVyIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IC41O1xufVxuI2Zvb3RlciBzcGFuIHtcbiAgICBjb2xvcjogIzgwODI5Mjtcbn1cbiNmb290ZXIgcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjODA4MjkyO1xufVxuI2Zvb3RlciBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbiNjbG9zZWNhcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMzQ3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RUY7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0U4RThFRjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0U4RThFRjtcbiAgICB3aWR0aDogNTNweDtcbiAgICBoZWlnaHQ6IDUzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHRvcDogOSU7XG59XG4jY2xvc2VjYXJkIGltZyB7XG4gICAgbWFyZ2luLXRvcDogMTVweFxufVxuXG4udG9vbHNldF9jb250YWluZXJ7XG4gICAgcGFkZGluZy1ib3R0b206IDglO1xuICAgIGhlaWdodDogNjklO1xuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gICAgY2xlYXI6IGJvdGg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuI2NhbnZhcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNjFweCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MXB4KTtcbiAgICB0b3A6IDcxcHg7XG4gICAgbGVmdDogMzYxcHg7XG4gICAgei1pbmRleDogMDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuI2hlYWRlcntcbiAgICBtYXJnaW4tbGVmdDogMSUgIWltcG9ydGFudDtcbn1cblxuI3NlYXJjaHtcbiAgICBtYXJnaW4tYm90dG9tOiA3JSAhaW1wb3J0YW50O1xufVxuXG4jcHJvcHdyYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogLTI7XG59XG4jcHJvcGVydGllcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgcmlnaHQ6IC0xNTBweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgdG9wOiAwcHg7XG4gICAgYm94LXNoYWRvdzogLTRweCAwcHggNDBweCByZ2JhKDI2LCAyNiwgNzMsIDApO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBjdWJpYy1iZXppZXIoLjA1LC4wMywuMzUsMSk7XG59XG4uaXRzb24ge1xuICAgIHotaW5kZXg6IDIhaW1wb3J0YW50O1xufVxuLmV4cGFuZGVkIHtcbiAgICByaWdodDogMCFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogLTRweCAwcHggNDBweCByZ2JhKDI2LCAyNiwgNzMsIDAuMDUpO1xuICAgICAgICB6LWluZGV4OiAyO1xufVxuI2hlYWRlcjIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMzkzQzQ0O1xuICAgIG1hcmdpbi10b3A6IDEwMXB4O1xufVxuI2Nsb3NlIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBjdWJpYy1iZXppZXIoLjA1LC4wMywuMzUsMSk7XG59XG4jY2xvc2U6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAuNztcbn1cbiNwcm9wc3dpdGNoIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFRjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuI2RhdGFwcm9wIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzM5M0M0NDtcbiAgICB3aWR0aDogY2FsYyg4OCUgLyAzKTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuI2RhdGFwcm9wOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTdDRTg7XG4gICAgbWFyZ2luLXRvcDogLTRweDtcbn1cbiNhbGVydHByb3Age1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM4MDgyOTI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICB3aWR0aDogY2FsYyg4OCUgLyAzKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4jbG9nc3Byb3Age1xuICAgIHdpZHRoOiBjYWxjKDg4JSAvIDMpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM4MDgyOTI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5wdXRsYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMyNTMxMzQ7XG59XG4uZHJvcG1lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEVGO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMzQsIDM0LCA4NywgMC4wNSk7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMyNTMxMzQ7XG4gICAgdGV4dC1pbmRlbnQ6IDIwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAyODdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmRyb3BtZSBpbWcge1xuICAgIG1hcmdpbi10b3A6IDE3cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5jaGVja3VzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNoZWNrdXMgaW1nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jaGVja3VzIHAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuI2RpdmlzaW9udGhpbmcge1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOEU4RUY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiA4MDtcbn1cblxuI3JlbW92ZWJsb2NrIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDI4N3B4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICBjb2xvcjogIzI1MzEzNDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEVGO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgY3ViaWMtYmV6aWVyKC4wNSwuMDMsLjM1LDEpO1xufVxuXG4jdmlzdWFsaXplX2J0biB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMyU7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICByaWdodDogMjFweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEVGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDdjZTg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBjdWJpYy1iZXppZXIoLjA1LC4wMywuMzUsMSk7XG59XG5cbiN0YWJsZV9wcmV2aWV3IHtcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHdpZHRoOiA4MSU7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICB9XG4gIFxuICAjdGFibGVfcHJldmlldyB0ZCwgI2N1c3RvbWVycyB0aCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgXG4gICN0YWJsZV9wcmV2aWV3IHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cbiAgXG4gICN0YWJsZV9wcmV2aWV3IHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cbiAgXG4gICN0YWJsZV9wcmV2aWV3IHRoIHtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDdjZTg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4jdmlzdWFsaXplX2J0bjpob3ZlciB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMyU7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgIGNvbG9yOiAjMjQ3Y2U4O1xuICAgIHJpZ2h0OiAyMXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RUY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBjdWJpYy1iZXppZXIoLjA1LC4wMywuMzUsMSk7XG59XG5cbiNmaWxlbmFtZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuI3JlbW92ZWJsb2NrOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogLjU7XG59XG4ubm9zZWxlY3Qge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xufVxuLmJsb2NreW5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzI1MzEzNDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5ibG9ja3lsZWZ0IGltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYmxvY2t5cmlnaHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllciguMDUsLjAzLC4zNSwxKTtcbiAgICB6LWluZGV4OiAxMDtcbn1cbi5ibG9ja3lyaWdodDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjRGQztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmxvY2t5cmlnaHQgaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLmJsb2NreWxlZnQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5ibG9ja3lkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RUY7XG59XG4uYmxvY2t5aW5mbyB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM4MDgyOTI7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB0ZXh0LWluZGVudDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJsb2NreWluZm8gc3BhbiB7XG4gICAgY29sb3I6ICMyNTMxMzQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEM0RDRUE7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1pbmRlbnQ6IDBweDtcbn1cbi5ibG9jayB7XG4gICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIG1hcmdpbi10b3A6IDBweCFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAzMHB4IHJnYmEoMjIsIDMzLCA3NCwgMC4wNSk7XG59XG4uc2VsZWN0ZWRibG9jayB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzIxN0NFODtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDMwcHggcmdiYSgyMiwgMzMsIDc0LCAwLjA4KTtcbn1cbi5jdXN0b20tc2VsZWN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICB9XG4gIFxuICAuY3VzdG9tLXNlbGVjdCBzZWxlY3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qaGlkZSBvcmlnaW5hbCBTRUxFQ1QgZWxlbWVudDoqL1xuICB9XG4gIFxuICAuc2VsZWN0LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBEb2RnZXJCbHVlO1xuICB9XG4gIFxuICAvKnN0eWxlIHRoZSBhcnJvdyBpbnNpZGUgdGhlIHNlbGVjdCBlbGVtZW50OiovXG4gIC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRvcDogMTRweDtcbiAgICByaWdodDogMTBweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAvKnBvaW50IHRoZSBhcnJvdyB1cHdhcmRzIHdoZW4gdGhlIHNlbGVjdCBib3ggaXMgb3BlbiAoYWN0aXZlKToqL1xuICAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudDtcbiAgICB0b3A6IDdweDtcbiAgfVxuICBcbiAgLypzdHlsZSB0aGUgaXRlbXMgKG9wdGlvbnMpLCBpbmNsdWRpbmcgdGhlIHNlbGVjdGVkIGl0ZW06Ki9cbiAgLnNlbGVjdC1pdGVtcyBkaXYsLnNlbGVjdC1zZWxlY3RlZCB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDAsIDAsIDAsIDAuMSkgdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIFxuICAvKnN0eWxlIGl0ZW1zIChvcHRpb25zKToqL1xuICAuc2VsZWN0LWl0ZW1zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogRG9kZ2VyQmx1ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5OTtcbiAgfVxuICBcbiAgLypoaWRlIHRoZSBpdGVtcyB3aGVuIHRoZSBzZWxlY3QgYm94IGlzIGNsb3NlZDoqL1xuICAuc2VsZWN0LWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5zZWxlY3QtaXRlbXMgZGl2OmhvdmVyLCAuc2FtZS1hcy1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzJweCkge1xuICAgICNjZW50ZXJzd2l0Y2gge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICAjbmFtZXMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH0gICBcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toolbox',
          templateUrl: './toolbox.component.html',
          styleUrls: ['./toolbox.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/bhavinjawade/Documents/Projects/chemml_web_ui/client/chemmlAngluar/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map