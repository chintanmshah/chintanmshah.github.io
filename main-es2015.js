(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _print_text_print_text_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-text/print-text.component */ "./src/app/print-text/print-text.component.ts");



class AppComponent {
    constructor() {
        this.defaultText = ["Hi", "My name is Chintan", "Welcome to my website"];
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[1, "container"], [3, "arr"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-print-text", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arr", ctx.defaultText);
    } }, directives: [_print_text_print_text_component__WEBPACK_IMPORTED_MODULE_1__["PrintTextComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxjaGludFxcRGVza3RvcFxcUHJvamVjdHNcXG9sZC1za29vbC13ZWJzaXRlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _print_text_print_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print-text/print-text.component */ "./src/app/print-text/print-text.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _print_text_print_text_component__WEBPACK_IMPORTED_MODULE_4__["PrintTextComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _print_text_print_text_component__WEBPACK_IMPORTED_MODULE_4__["PrintTextComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/print-text/print-text.component.ts":
/*!****************************************************!*\
  !*** ./src/app/print-text/print-text.component.ts ***!
  \****************************************************/
/*! exports provided: PrintTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintTextComponent", function() { return PrintTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function PrintTextComponent_ng_container_0_br_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "br");
} }
function PrintTextComponent_ng_container_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r5);
} }
function PrintTextComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PrintTextComponent_ng_container_0_br_1_Template, 1, 0, "br", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PrintTextComponent_ng_container_0_span_2_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const line_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", line_r1.split(""));
} }
class PrintTextComponent {
    constructor() {
        this.onScreenArr = [];
    }
    ngOnInit() {
        this.addLineToScreen();
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    addLineToScreen() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let line of this.arr) {
                this.onScreenArr.push(`C:\\Home> `);
                const lastI = this.onScreenArr.length - 1;
                for (let i of line) {
                    yield this.delay(100);
                    this.onScreenArr[lastI] += i;
                }
                yield this.delay(1000);
            }
        });
    }
}
PrintTextComponent.ɵfac = function PrintTextComponent_Factory(t) { return new (t || PrintTextComponent)(); };
PrintTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PrintTextComponent, selectors: [["app-print-text"]], inputs: { arr: "arr" }, decls: 3, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "blinking-cursor"], [4, "ngIf"]], template: function PrintTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PrintTextComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "_");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.onScreenArr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".blinking-cursor[_ngcontent-%COMP%] {\n  -webkit-animation: 1s blink step-end infinite;\n  animation: 1s blink step-end infinite;\n}\n\n@keyframes blink {\n  from, to {\n    color: transparent;\n  }\n  50% {\n    color: #66ff66;\n  }\n}\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent;\n  }\n  50% {\n    color: #66ff66;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbnQtdGV4dC9DOlxcVXNlcnNcXGNoaW50XFxEZXNrdG9wXFxQcm9qZWN0c1xcb2xkLXNrb29sLXdlYnNpdGUvc3JjXFxhcHBcXHByaW50LXRleHRcXHByaW50LXRleHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ByaW50LXRleHQvcHJpbnQtdGV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZDQUFBO0VBSUEscUNBQUE7QUNDSjs7QURFRTtFQUNFO0lBRUUsa0JBQUE7RUNBSjtFREVFO0lBQ0UsY0FBQTtFQ0FKO0FBQ0Y7O0FER0U7RUFDRTtJQUVFLGtCQUFBO0VDRko7RURJRTtJQUNFLGNBQUE7RUNGSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJpbnQtdGV4dC9wcmludC10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsaW5raW5nLWN1cnNvciB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogMXMgYmxpbmsgc3RlcC1lbmQgaW5maW5pdGU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogMXMgYmxpbmsgc3RlcC1lbmQgaW5maW5pdGU7XHJcbiAgICAtbXMtYW5pbWF0aW9uOiAxcyBibGluayBzdGVwLWVuZCBpbmZpbml0ZTtcclxuICAgIC1vLWFuaW1hdGlvbjogMXMgYmxpbmsgc3RlcC1lbmQgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IDFzIGJsaW5rIHN0ZXAtZW5kIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJsaW5rIHtcclxuICAgIGZyb20sXHJcbiAgICB0byB7XHJcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIGNvbG9yOiAjNjZmZjY2O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xyXG4gICAgZnJvbSxcclxuICAgIHRvIHtcclxuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgY29sb3I6ICM2NmZmNjY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtbXMta2V5ZnJhbWVzIGJsaW5rIHtcclxuICAgIGZyb20sXHJcbiAgICB0byB7XHJcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIGNvbG9yOiAjNjZmZjY2O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALW8ta2V5ZnJhbWVzIGJsaW5rIHtcclxuICAgIGZyb20sXHJcbiAgICB0byB7XHJcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIGNvbG9yOiAjNjZmZjY2O1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCIuYmxpbmtpbmctY3Vyc29yIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDFzIGJsaW5rIHN0ZXAtZW5kIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogMXMgYmxpbmsgc3RlcC1lbmQgaW5maW5pdGU7XG4gIC1tcy1hbmltYXRpb246IDFzIGJsaW5rIHN0ZXAtZW5kIGluZmluaXRlO1xuICAtby1hbmltYXRpb246IDFzIGJsaW5rIHN0ZXAtZW5kIGluZmluaXRlO1xuICBhbmltYXRpb246IDFzIGJsaW5rIHN0ZXAtZW5kIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgZnJvbSwgdG8ge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICA1MCUge1xuICAgIGNvbG9yOiAjNjZmZjY2O1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xuICBmcm9tLCB0byB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIDUwJSB7XG4gICAgY29sb3I6ICM2NmZmNjY7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIGJsaW5rIHtcbiAgZnJvbSwgdG8ge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICA1MCUge1xuICAgIGNvbG9yOiAjNjZmZjY2O1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGJsaW5rIHtcbiAgZnJvbSwgdG8ge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICA1MCUge1xuICAgIGNvbG9yOiAjNjZmZjY2O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PrintTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-print-text",
                templateUrl: "./print-text.component.html",
                styleUrls: ["./print-text.component.scss"]
            }]
    }], function () { return []; }, { arr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chint\Desktop\Projects\old-skool-website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map