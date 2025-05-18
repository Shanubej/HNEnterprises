"use strict";
(self["webpackChunkHN_Enterprises"] = self["webpackChunkHN_Enterprises"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 85);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class AppComponent {
  constructor() {
    this.title = 'HN_Enterprises';
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9585);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);




const appConfig = {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.provideZoneChangeDetection)({
    eventCoalescing: true
  }), (0,_angular_router__WEBPACK_IMPORTED_MODULE_2__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes), (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.provideClientHydration)((0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.withEventReplay)())]
};

/***/ }),

/***/ 385:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9585);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




class HeaderComponent {
  constructor() {
    this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 23,
      vars: 1,
      consts: [[1, "navbar", "navbar-expand-lg", "bg-body-tertiary"], [1, "container"], ["routerLink", "/home", 1, "navbar-brand"], ["alt", "", 3, "src"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/home", "routerLinkActive", "active", 1, "nav-link", "active"], ["href", "#", 1, "nav-link"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 8)(12, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 8)(15, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Shop");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 8)(18, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "FAQ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 8)(21, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imageUrl + "/hn_logo_new.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
      styles: [".navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #111 !important;\n  z-index: 1;\n  padding: 15px 0;\n  color: #fff;\n  text-transform: uppercase;\n  font-family: \"Roboto\";\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 174px;\n  height: 64px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  font-size: 14px;\n  color: #777;\n  line-height: 20px;\n  text-decoration: none;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fabe12;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vTGl2ZSUyMFByb2plY3RzL0hOX0VudGVycHJpc2VzL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0NGO0FERUk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0FOO0FETU07RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0pSO0FEU007RUFDRSxjQUFBO0FDUFIiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuXHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTc0cHg7XHJcbiAgICAgIGhlaWdodDogNjRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXZiYXItbmF2IHtcclxuICAgIGxpIHtcclxuICAgICAgYSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGkuYWN0aXZlIHtcclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICNmYWJlMTI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLm5hdmJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufVxuLm5hdmJhciAubmF2YmFyLWJyYW5kIGltZyB7XG4gIHdpZHRoOiAxNzRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuLm5hdmJhciAubmF2YmFyLW5hdiBsaSBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNzc3O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm5hdmJhciAubmF2YmFyLW5hdiBsaS5hY3RpdmUgYSB7XG4gIGNvbG9yOiAjZmFiZTEyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 403:
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomepageComponent: () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 385);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 5473);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9585);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ 6821);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);







function HomepageComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 35)(2, "div", 36)(3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function HomepageComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 35)(2, "div", 36)(3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function HomepageComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 35)(2, "div", 36)(3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function HomepageComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 35)(2, "div", 36)(3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function HomepageComponent_ng_template_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function HomepageComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function HomepageComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function HomepageComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function HomepageComponent_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function HomepageComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function HomepageComponent_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function HomepageComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function HomepageComponent_ng_template_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class HomepageComponent {
  constructor() {
    this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl;
    this.banner_slider = {
      items: 1,
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 1000,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 1
        },
        940: {
          items: 1
        }
      },
      // rtl: true,
      nav: true,
      navText: ['<img src=' + this.imageUrl + '/Home/slider_prev_icon_white.svg>', '<img src=' + this.imageUrl + '/Home/slider_next_icon_white.svg>'],
      autoWidth: false
    };
    this.gallary = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      margin: 13,
      autoplay: true,
      autoplayTimeout: 3000,
      navText: ['<img src="' + this.imageUrl + '/Clients/light-left-arrow.png" alt="">', '<img src="' + this.imageUrl + '/Clients/light-right-arrow.png" alt="">'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 4
        },
        940: {
          items: 6
        }
      },
      nav: true
    };
    this.partnersOptions = {
      items: 8,
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 100,
      autoplay: true,
      autoplayTimeout: 2200,
      margin: 25,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        500: {
          items: 3
        },
        600: {
          items: 5
        },
        740: {
          items: 7
        },
        940: {
          items: 8
        }
      },
      nav: false,
      autoWidth: false
    };
  }
  static {
    this.ɵfac = function HomepageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomepageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: HomepageComponent,
      selectors: [["app-homepage"]],
      decls: 93,
      vars: 2,
      consts: [[1, "banner_slider"], [1, "slider"], [3, "options"], ["carouselSlide", ""], [1, "bottom_section"], [1, "container"], [1, "content"], [1, "products_section"], [1, "row"], [1, "col-sm-12"], [1, "title-box"], [1, "title"], ["href", "#", 1, "btn", "btn-default", "btn-robot"], [1, "col-sm-4"], [1, "product-box"], ["src", "Images/window-curtains-1.webp", "alt", "product", 1, "img-responsive"], [1, "product-title"], ["src", "Images/window-blind.jpg", "alt", "product", 1, "img-responsive"], ["src", "Images/Roller-blind.jpg", "alt", "product", 1, "img-responsive"], [1, "classic-title"], [1, "stiker"], [1, "inner-stiker"], [1, "outer-stiker"], [1, "incline-div"], [1, "boxed", "row"], [1, "p-large"], [1, "history_section"], [1, "title", "mt0"], [1, "col-md-10", "mx-auto"], [1, "partner_section", "mt-5"], [1, "container", "section-bg"], [1, "row", "mb-2"], [1, "common_heading"], [1, "boxed"], [1, "gallary-carousel-section"], [1, "banner_slider_content"], [1, "slider_flex"], [1, "left_side"], ["src", "Images/window-curtains-slider-1.jpg", "alt", ""], ["src", "Images/Window-curtains-slider-2.jpg", "alt", ""], ["src", "Images/window-curtains-1.webp", "alt", ""], ["src", "Images/window-blind.jpg", "alt", ""], [1, "card-item"], [1, "image-wrapper"], ["src", "Images/Clients/bmw-logo.png", "alt", ""], ["src", "Images/Clients/honda-logo.png", "alt", ""], ["src", "Images/Clients/hyundai-logo.png", "alt", ""], ["src", "Images/Clients/kia-logo.png", "alt", ""], ["src", "Images/Clients/mahindra-logo.png", "alt", ""], ["src", "Images/Clients/mg-logo.png", "alt", ""], ["src", "Images/Clients/suzuki-logo.png", "alt", ""], ["src", "Images/Clients/tata-logo.png", "alt", ""], ["src", "Images/Clients/volkswagen-logo.png", "alt", ""]],
      template: function HomepageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 0)(2, "div", 1)(3, "owl-carousel-o", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HomepageComponent_ng_template_4_Template, 5, 0, "ng-template", 3)(5, HomepageComponent_ng_template_5_Template, 5, 0, "ng-template", 3)(6, HomepageComponent_ng_template_6_Template, 5, 0, "ng-template", 3)(7, HomepageComponent_ng_template_7_Template, 5, 0, "ng-template", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "section", 7)(12, "div", 5)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "h2", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Welcome to our ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Curtains World");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "view products");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 8)(23, "div", 13)(24, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h3", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Magnetic Curtains");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 13)(29, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h3", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Window-Blind Curtains");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 13)(34, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "h3", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Roller-Blind Curtains");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 8)(39, "div", 9)(40, "div", 19)(41, "div", 20)(42, "h3", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Why we are best");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "h3", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "We Received best product award in the 2018");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 24)(48, "div", 13)(49, "p", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " Blocks direct sunrays and keeps your car cool. Black dotted mesh fabric gives you complete privacy and its helps you to view outside properly while driving. Material used is in such way, that you don't face difficult while driving. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 13)(52, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " UV Protection Sun Shades for Cars : These sun shades provide protection from harmful UV rays, improving the health and well-being of the occupants in the car. They can help reduce exposure to the sun's harmful rays, creating a safer and more comfortable driving environment. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 13)(55, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " UV Protection Sun Shades for Cars : These sun shades provide protection from harmful UV rays, improving the health and well-being of the occupants in the car. They can help reduce exposure to the sun's harmful rays, creating a safer and more comfortable driving environment ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "section", 26)(58, "div", 5)(59, "div", 8)(60, "div", 9)(61, "div", 10)(62, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Since 2012");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "h2", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Discover our history");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 8)(67, "div", 24)(68, "div", 28)(69, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummynibh euismod tincidunt ut laoree Dolore magna aliquam erat volutpat.Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummynibh euismod tincidunt ut laoree Dolore magna aliquam erat . ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "section", 29)(73, "div", 30)(74, "div", 31)(75, "div", 32)(76, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Our Clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 8)(79, "div", 33)(80, "div", 9)(81, "div", 34)(82, "owl-carousel-o", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](83, HomepageComponent_ng_template_83_Template, 3, 0, "ng-template", 3)(84, HomepageComponent_ng_template_84_Template, 3, 0, "ng-template", 3)(85, HomepageComponent_ng_template_85_Template, 3, 0, "ng-template", 3)(86, HomepageComponent_ng_template_86_Template, 3, 0, "ng-template", 3)(87, HomepageComponent_ng_template_87_Template, 3, 0, "ng-template", 3)(88, HomepageComponent_ng_template_88_Template, 3, 0, "ng-template", 3)(89, HomepageComponent_ng_template_89_Template, 3, 0, "ng-template", 3)(90, HomepageComponent_ng_template_90_Template, 3, 0, "ng-template", 3)(91, HomepageComponent_ng_template_91_Template, 3, 0, "ng-template", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "app-footer");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.banner_slider);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](79);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.gallary);
        }
      },
      dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselSlideDirective],
      styles: [".top_section[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  color: #fff;\n  letter-spacing: 3px;\n  background: #111;\n  position: relative;\n}\n.top_section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  padding: 200px 0;\n  background-image: url(\"/Images/banner_img.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: -90px;\n  z-index: 11;\n  position: relative;\n}\n\n.bottom_section[_ngcontent-%COMP%] {\n  background-color: #ededed;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .products_section[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 0 40px;\n  text-transform: uppercase;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .products_section[_ngcontent-%COMP%]   .product-box[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  position: relative;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .products_section[_ngcontent-%COMP%]   .product-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .products_section[_ngcontent-%COMP%]   .product-box[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 25px;\n  right: 25px;\n  padding: 15px;\n  background-color: #fabe12;\n  text-transform: uppercase;\n  color: #fff;\n  text-align: center;\n  font-weight: 300;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .products_section[_ngcontent-%COMP%]   .classic-title[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  margin-bottom: 30px;\n  position: relative;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .products_section[_ngcontent-%COMP%]   .classic-title[_ngcontent-%COMP%]   .stiker[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .products_section[_ngcontent-%COMP%]   .classic-title[_ngcontent-%COMP%]   .stiker[_ngcontent-%COMP%]   .inner-stiker[_ngcontent-%COMP%] {\n  font-weight: 300;\n  z-index: 2;\n  position: relative;\n  color: #fff;\n  padding-right: 50px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .products_section[_ngcontent-%COMP%]   .outer-stiker[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #d0d0d0;\n  font-weight: 300;\n  z-index: 2;\n  position: relative;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .products_section[_ngcontent-%COMP%]   .incline-div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 0;\n  border-top: 60px solid #fabe12;\n  border-right: 60px solid transparent;\n  margin-left: -15px;\n  width: 250px;\n  z-index: 1;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .history_section[_ngcontent-%COMP%] {\n  background-color: #111;\n  text-align: center;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .history_section[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 100px 0 50px;\n  text-transform: uppercase;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .history_section[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"Roboto\";\n  line-height: 1.5;\n  letter-spacing: 1px;\n  font-weight: 300;\n  font-size: 14px;\n  margin: 0px;\n  padding-bottom: 10px;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .history_section[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #fabe12;\n  text-transform: capitalize;\n  font-weight: 400;\n  font-size: 36px;\n  letter-spacing: 2px;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .history_section[_ngcontent-%COMP%]   .boxed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  line-height: 1.5;\n  letter-spacing: 1px;\n  font-weight: 300;\n  color: #fff;\n  margin: 0px;\n  padding-bottom: 10px;\n}\n.bottom_section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .history_section[_ngcontent-%COMP%]   .boxed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 60px 0 0;\n}\n[_nghost-%COMP%]  .partner_section .owl-carousel .owl-stage {\n  width: 228px;\n  height: 158px;\n}\n\n.banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n}\n\n.banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .left_side[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .left_side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n}\n\n.banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 31% !important;\n  position: absolute;\n  top: 36%;\n  right: 102px;\n}\n\n.banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%]   .banner_title[_ngcontent-%COMP%] {\n  font-family: \"Raleway\", serif;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 25px;\n  line-height: 29px;\n  text-align: center;\n  color: #FFFFFF;\n  margin: 0px;\n}\n\n.banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%]   .banner_description[_ngcontent-%COMP%] {\n  font-family: \"Raleway\", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 21px;\n  text-align: center;\n  color: #FFFFFF !important;\n  margin: 0px;\n  padding-top: 19px;\n}\n\n.banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%]   .btn_Register[_ngcontent-%COMP%] {\n  font-family: \"Raleway\", serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 23px;\n  text-align: center;\n  color: #FFFFFF;\n  background-color: #9D0000;\n  border: 0px;\n  border-radius: 5px;\n  padding: 14.5px 30px;\n  margin-top: 21px;\n}\n\n[_nghost-%COMP%]  .banner_slider .owl-carousel .owl-nav .owl-prev {\n  background-color: transparent;\n  margin: 0px;\n  padding: 0px;\n  position: absolute;\n  \n\n  top: 44%;\n  \n\n  left: 40px;\n}\n\n[_nghost-%COMP%]  .banner_slider .owl-carousel .owl-nav .owl-next {\n  background-color: transparent;\n  margin: 0px;\n  padding: 0px;\n  position: absolute;\n  \n\n  top: 44%;\n  \n\n  right: 40px;\n}\n\n@media screen and (max-width: 1380px) {\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .left_side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 411px;\n  }\n}\n@media screen and (max-width: 1210px) {\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%] {\n    top: 30%;\n  }\n  .course_section[_ngcontent-%COMP%]   .cards_flex[_ngcontent-%COMP%]   .section_img[_ngcontent-%COMP%] {\n    width: 35%;\n    top: 35px;\n  }\n}\n@media screen and (max-width: 991px) {\n  [_nghost-%COMP%]  .banner_slider .owl-carousel .owl-stage-outer {\n    height: 350px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .left_side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%] {\n    top: 27%;\n  }\n}\n@media screen and (max-width: 767px) {\n  [_nghost-%COMP%]  .banner_slider .owl-carousel .owl-stage-outer {\n    height: 300px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .left_side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%] {\n    top: 25%;\n    right: 80px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%]   .banner_title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%]   .banner_description[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding-top: 12px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%]   .btn_Register[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 10px 18px;\n    margin-top: 16px;\n  }\n}\n@media screen and (max-width: 620px) {\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%] {\n    top: 23%;\n  }\n}\n@media screen and (max-width: 575px) {\n  [_nghost-%COMP%]  .banner_slider .owl-carousel .owl-stage-outer {\n    height: 250px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .left_side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%] {\n    top: 22%;\n    right: 10px;\n    width: 43% !important;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%] {\n    \n\n    width: 100%;\n  }\n  .banner_slider[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    \n\n    width: 100%;\n  }\n  [_nghost-%COMP%]  .banner_slider .owl-theme .owl-nav {\n    \n\n    margin-bottom: 10px;\n  }\n  [_nghost-%COMP%]  .banner_slider .owl-carousel .owl-nav .owl-prev {\n    position: static;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    border-radius: 50%;\n  }\n  [_nghost-%COMP%]  .banner_slider .owl-carousel .owl-nav .owl-next {\n    position: static;\n    margin-left: 15px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    border-radius: 50%;\n  }\n  [_nghost-%COMP%]  .banner_slider .owl-carousel .owl-nav .owl-prev img {\n    height: 25px;\n    width: 25px;\n  }\n  [_nghost-%COMP%]  .banner_slider .owl-carousel .owl-nav .owl-next img {\n    height: 25px;\n    width: 25px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%]   .banner_title[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 25px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%]   .banner_description[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 20px;\n    padding-top: 12px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%]   .btn_Register[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin-top: 10px;\n    padding: 10px 20px;\n  }\n}\n@media screen and (max-width: 522px) {\n  [_nghost-%COMP%]  .banner_slider .owl-carousel .owl-nav .owl-prev {\n    bottom: -20px;\n  }\n  [_nghost-%COMP%]  .banner_slider .owl-carousel .owl-nav .owl-next {\n    bottom: -20px;\n  }\n}\n@media screen and (max-width: 500px) {\n  [_nghost-%COMP%]  .banner_slider .owl-theme .owl-nav {\n    margin-bottom: 10px 0px;\n  }\n}\n@media screen and (max-width: 425px) {\n  [_nghost-%COMP%]  .banner_slider .owl-carousel .owl-stage-outer {\n    height: 200px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .left_side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%] {\n    width: 36% !important;\n    top: 19%;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%]   .banner_title[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 20px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%]   .banner_description[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 15px;\n    padding-top: 9px;\n  }\n  .banner_slider[_ngcontent-%COMP%]   .banner_slider_content[_ngcontent-%COMP%]   .slider_flex[_ngcontent-%COMP%]   .right_side[_ngcontent-%COMP%]   .btn_Register[_ngcontent-%COMP%] {\n    font-size: 13px;\n    margin-top: 10px;\n    padding: 6px 15px;\n  }\n  [_nghost-%COMP%]  .banner_slider .owl-carousel .owl-nav .owl-prev {\n    left: 41%;\n    bottom: 0px;\n  }\n  [_nghost-%COMP%]  .banner_slider .owl-carousel .owl-nav .owl-next {\n    right: 41%;\n    bottom: 0px;\n  }\n}\n.common_heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 25px;\n  line-height: 38px;\n  color: #000000;\n  padding-bottom: 15px;\n  text-align: center;\n  margin-bottom: 30px;\n  position: relative;\n}\n.common_heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n  border: 1px solid #073266;\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  width: 7.2%;\n  left: 47%;\n}\n.common_heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before {\n  border: 1px solid #073266;\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  width: 4.2%;\n  left: 48.4%;\n  bottom: -9px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL0xpdmUlMjBQcm9qZWN0cy9ITl9FbnRlcnByaXNlcy9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUk7RUFDRSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNBTjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7QURJRTtFQUNFLHNCQUFBO0FDRko7QURLTTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ0hSO0FETU07RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDSlI7QURNUTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUNKVjtBRE9RO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ05WO0FEVU07RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDUlI7QURVUTtFQUNFLHFCQUFBO0FDUlY7QURVVTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1JaO0FEYU07RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ1hSO0FEY007RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNaUjtBRGdCSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUNkTjtBRGdCTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ2RSO0FEZ0JRO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ2RWO0FEaUJRO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNmVjtBRG9CUTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ2xCVjtBRHFCUTtFQUNFLGlCQUFBO0FDbkJWO0FENEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUMxQkY7O0FENkJBO0VBQ0Usa0JBQUE7QUMxQkY7O0FENkJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDMUJGOztBRDZCQTtFQUNFLFdBQUE7QUMxQkY7O0FENkJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUMxQkY7O0FENkJBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUMxQkY7O0FENkJBO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQzFCRjs7QUQ2QkE7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDMUJGOztBRDZCQTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQzFCRjs7QUQ2QkE7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDMUJGOztBRDZCQTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDMUJGOztBRDhCQTtFQUNFO0lBQ0UsYUFBQTtFQzNCRjtBQUNGO0FEOEJBO0VBQ0U7SUFDRSxRQUFBO0VDNUJGO0VEK0JBO0lBQ0UsVUFBQTtJQUNBLFNBQUE7RUM3QkY7QUFDRjtBRGtDQTtFQUNFO0lBQ0UsYUFBQTtFQ2hDRjtFRG1DQTtJQUNFLGFBQUE7RUNqQ0Y7RURvQ0E7SUFDRSxRQUFBO0VDbENGO0FBQ0Y7QURzQ0E7RUFDRTtJQUNFLGFBQUE7RUNwQ0Y7RUR1Q0E7SUFDRSxhQUFBO0VDckNGO0VEd0NBO0lBQ0UsUUFBQTtJQUNBLFdBQUE7RUN0Q0Y7RUR5Q0E7SUFDRSxlQUFBO0VDdkNGO0VEMENBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VDeENGO0VEMkNBO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7RUN6Q0Y7QUFDRjtBRDRDQTtFQUNFO0lBQ0UsUUFBQTtFQzFDRjtBQUNGO0FEOENBO0VBQ0U7SUFDRSxhQUFBO0VDNUNGO0VEK0NBO0lBQ0UsYUFBQTtFQzdDRjtFRGdEQTtJQUNFLFFBQUE7SUFDQSxXQUFBO0lBQ0EscUJBQUE7RUM5Q0Y7RURpREE7SUFDRSxnQkFBQTtJQUNBLFdBQUE7RUMvQ0Y7RURrREE7SUFDRSxnQkFBQTtJQUNBLFdBQUE7RUNoREY7RURtREE7SUFDRSx5QkFBQTtJQUNBLG1CQUFBO0VDakRGO0VEb0RBO0lBQ0UsZ0JBQUE7SUFDQSw0Q0FBQTtJQUNBLGtCQUFBO0VDbERGO0VEcURBO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLDRDQUFBO0lBQ0Esa0JBQUE7RUNuREY7RURzREE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFQ3BERjtFRHVEQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VDckRGO0VEd0RBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VDdERGO0VEeURBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUN2REY7RUQwREE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQ3hERjtBQUNGO0FENERBO0VBRUU7SUFDRSxhQUFBO0VDM0RGO0VEOERBO0lBQ0UsYUFBQTtFQzVERjtBQUNGO0FEK0RBO0VBQ0U7SUFDRSx1QkFBQTtFQzdERjtBQUNGO0FEaUVBO0VBQ0U7SUFDRSxhQUFBO0VDL0RGO0VEa0VBO0lBQ0UsYUFBQTtFQ2hFRjtFRG1FQTtJQUNFLHFCQUFBO0lBQ0EsUUFBQTtFQ2pFRjtFRG9FQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQ2xFRjtFRHFFQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VDbkVGO0VEc0VBO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUNwRUY7RUR1RUE7SUFDRSxTQUFBO0lBQ0EsV0FBQTtFQ3JFRjtFRHdFQTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VDdEVGO0FBQ0Y7QUQwRUk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUN4RVI7QUQwRVE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ3hFWjtBRDJFUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3pFWiIsInNvdXJjZXNDb250ZW50IjpbIi50b3Bfc2VjdGlvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICBiYWNrZ3JvdW5kOiAjMTExO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAuYmFubmVyIHtcclxuICAgICAgcGFkZGluZzogMjAwcHggMDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL0ltYWdlcy9iYW5uZXJfaW1nLmpwZ1wiKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtOTBweDtcclxuICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib3R0b21fc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICAucHJvZHVjdHNfc2VjdGlvbiB7XHJcbiAgICAgIC50aXRsZS1ib3gge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDAgNDBweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJvZHVjdC1ib3gge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYmUxMjtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcblxyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2xhc3NpYy10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAuc3Rpa2VyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAgICAgICAuaW5uZXItc3Rpa2VyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5vdXRlci1zdGlrZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBjb2xvcjogI2QwZDBkMDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5jbGluZS1kaXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDYwcHggc29saWQgI2ZhYmUxMjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDYwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhpc3Rvcnlfc2VjdGlvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIC50aXRsZS1ib3gge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxMDBweCAwIDUwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZhYmUxMjtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm94ZWQge1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgcGFkZGluZzogNjBweCAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcnRuZXJfc2VjdGlvbiB7fVxyXG4gIH1cclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAgLnBhcnRuZXJfc2VjdGlvbiAub3dsLWNhcm91c2VsIC5vd2wtc3RhZ2Uge1xyXG4gIHdpZHRoOiAyMjhweDtcclxuICBoZWlnaHQ6IDE1OHB4O1xyXG59XHJcblxyXG4uYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyogd2lkdGg6IDkyJTsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IC5sZWZ0X3NpZGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAubGVmdF9zaWRlIGltZyB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAucmlnaHRfc2lkZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAzMSUgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzNiU7XHJcbiAgcmlnaHQ6IDEwMnB4O1xyXG59XHJcblxyXG4uYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAucmlnaHRfc2lkZSAuYmFubmVyX3RpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBsaW5lLWhlaWdodDogMjlweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IC5yaWdodF9zaWRlIC5iYW5uZXJfZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxOXB4O1xyXG59XHJcblxyXG4uYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAucmlnaHRfc2lkZSAuYnRuX1JlZ2lzdGVyIHtcclxuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlEMDAwMDtcclxuICBib3JkZXI6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTQuNXB4IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjFweDtcclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAgLmJhbm5lcl9zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLXByZXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLyogdG9wOiA1MCU7ICovXHJcbiAgdG9wOiA0NCU7XHJcbiAgLyogbGVmdDogMHB4OyAqL1xyXG4gIGxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbjpob3N0OjpuZy1kZWVwIC5iYW5uZXJfc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1uZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qIHRvcDogNTAlOyAqL1xyXG4gIHRvcDogNDQlO1xyXG4gIC8qIHJpZ2h0OiAwcHg7ICovXHJcbiAgcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzgwcHgpIHtcclxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAubGVmdF9zaWRlIGltZyB7XHJcbiAgICBoZWlnaHQ6IDQxMXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIxMHB4KSB7XHJcbiAgLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXggLnJpZ2h0X3NpZGUge1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgfVxyXG5cclxuICAuY291cnNlX3NlY3Rpb24gLmNhcmRzX2ZsZXggLnNlY3Rpb25faW1nIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICB0b3A6IDM1cHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgOmhvc3Q6Om5nLWRlZXAgLmJhbm5lcl9zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLXN0YWdlLW91dGVyIHtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgfVxyXG5cclxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAubGVmdF9zaWRlIGltZyB7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXggLnJpZ2h0X3NpZGUge1xyXG4gICAgdG9wOiAyNyU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICA6aG9zdDo6bmctZGVlcCAuYmFubmVyX3NsaWRlciAub3dsLWNhcm91c2VsIC5vd2wtc3RhZ2Utb3V0ZXIge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcblxyXG4gIC5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IC5sZWZ0X3NpZGUgaW1nIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAucmlnaHRfc2lkZSB7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHJpZ2h0OiA4MHB4O1xyXG4gIH1cclxuXHJcbiAgLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXggLnJpZ2h0X3NpZGUgLmJhbm5lcl90aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAucmlnaHRfc2lkZSAuYmFubmVyX2Rlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXggLnJpZ2h0X3NpZGUgLmJ0bl9SZWdpc3RlciB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAucmlnaHRfc2lkZSB7XHJcbiAgICB0b3A6IDIzJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIDpob3N0OjpuZy1kZWVwIC5iYW5uZXJfc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZS1vdXRlciB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXggLmxlZnRfc2lkZSBpbWcge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcblxyXG4gIC5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IC5yaWdodF9zaWRlIHtcclxuICAgIHRvcDogMjIlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogNDMlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCB7XHJcbiAgICAvKiB3aWR0aDogOTklOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuYmFubmVyX3NsaWRlciB2aWRlbyB7XHJcbiAgICAvKiB3aWR0aDogOTklOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICA6aG9zdDo6bmctZGVlcCAuYmFubmVyX3NsaWRlciAub3dsLXRoZW1lIC5vd2wtbmF2IHtcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDMwcHg7ICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3Q6Om5nLWRlZXAgLmJhbm5lcl9zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLXByZXYge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbiAgOmhvc3Q6Om5nLWRlZXAgLmJhbm5lcl9zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLW5leHQge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICA6aG9zdDo6bmctZGVlcCAuYmFubmVyX3NsaWRlciAub3dsLWNhcm91c2VsIC5vd2wtbmF2IC5vd2wtcHJldiBpbWcge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgfVxyXG5cclxuICA6aG9zdDo6bmctZGVlcCAuYmFubmVyX3NsaWRlciAub3dsLWNhcm91c2VsIC5vd2wtbmF2IC5vd2wtbmV4dCBpbWcge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAucmlnaHRfc2lkZSAuYmFubmVyX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXggLnJpZ2h0X3NpZGUgLmJhbm5lcl9kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXggLnJpZ2h0X3NpZGUgLmJ0bl9SZWdpc3RlciB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMnB4KSB7XHJcblxyXG4gIDpob3N0OjpuZy1kZWVwIC5iYW5uZXJfc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1wcmV2IHtcclxuICAgIGJvdHRvbTogLTIwcHg7XHJcbiAgfVxyXG5cclxuICA6aG9zdDo6bmctZGVlcCAuYmFubmVyX3NsaWRlciAub3dsLWNhcm91c2VsIC5vd2wtbmF2IC5vd2wtbmV4dCB7XHJcbiAgICBib3R0b206IC0yMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICA6aG9zdDo6bmctZGVlcCAuYmFubmVyX3NsaWRlciAub3dsLXRoZW1lIC5vd2wtbmF2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHggMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgOmhvc3Q6Om5nLWRlZXAgLmJhbm5lcl9zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLXN0YWdlLW91dGVyIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAubGVmdF9zaWRlIGltZyB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXggLnJpZ2h0X3NpZGUge1xyXG4gICAgd2lkdGg6IDM2JSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAxOSU7XHJcbiAgfVxyXG5cclxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAucmlnaHRfc2lkZSAuYmFubmVyX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXggLnJpZ2h0X3NpZGUgLmJhbm5lcl9kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA5cHg7XHJcbiAgfVxyXG5cclxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAucmlnaHRfc2lkZSAuYnRuX1JlZ2lzdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcclxuICB9XHJcblxyXG4gIDpob3N0OjpuZy1kZWVwIC5iYW5uZXJfc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1wcmV2IHtcclxuICAgIGxlZnQ6IDQxJTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3Q6Om5nLWRlZXAgLmJhbm5lcl9zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLW5leHQge1xyXG4gICAgcmlnaHQ6IDQxJTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbW1vbl9oZWFkaW5nIHtcclxuICAgIGg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzA3MzI2NjtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogNy4yJTtcclxuICAgICAgICAgICAgbGVmdDogNDclO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzA3MzI2NjtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogNC4yJTtcclxuICAgICAgICAgICAgbGVmdDogNDguNCU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogLTlweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIudG9wX3NlY3Rpb24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBiYWNrZ3JvdW5kOiAjMTExO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9wX3NlY3Rpb24gLmNvbnRhaW5lciAuYmFubmVyIHtcbiAgcGFkZGluZzogMjAwcHggMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL0ltYWdlcy9iYW5uZXJfaW1nLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAtOTBweDtcbiAgei1pbmRleDogMTE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJvdHRvbV9zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbn1cbi5ib3R0b21fc2VjdGlvbiAuY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYm90dG9tX3NlY3Rpb24gLmNvbnRlbnQgLnByb2R1Y3RzX3NlY3Rpb24gLnRpdGxlLWJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweCAwIDQwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYm90dG9tX3NlY3Rpb24gLmNvbnRlbnQgLnByb2R1Y3RzX3NlY3Rpb24gLnByb2R1Y3QtYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJvdHRvbV9zZWN0aW9uIC5jb250ZW50IC5wcm9kdWN0c19zZWN0aW9uIC5wcm9kdWN0LWJveCBpbWcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5ib3R0b21fc2VjdGlvbiAuY29udGVudCAucHJvZHVjdHNfc2VjdGlvbiAucHJvZHVjdC1ib3ggLnByb2R1Y3QtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAyNXB4O1xuICByaWdodDogMjVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYmUxMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5ib3R0b21fc2VjdGlvbiAuY29udGVudCAucHJvZHVjdHNfc2VjdGlvbiAuY2xhc3NpYy10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm90dG9tX3NlY3Rpb24gLmNvbnRlbnQgLnByb2R1Y3RzX3NlY3Rpb24gLmNsYXNzaWMtdGl0bGUgLnN0aWtlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5ib3R0b21fc2VjdGlvbiAuY29udGVudCAucHJvZHVjdHNfc2VjdGlvbiAuY2xhc3NpYy10aXRsZSAuc3Rpa2VyIC5pbm5lci1zdGlrZXIge1xuICBmb250LXdlaWdodDogMzAwO1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmJvdHRvbV9zZWN0aW9uIC5jb250ZW50IC5wcm9kdWN0c19zZWN0aW9uIC5vdXRlci1zdGlrZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjZDBkMGQwO1xuICBmb250LXdlaWdodDogMzAwO1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm90dG9tX3NlY3Rpb24gLmNvbnRlbnQgLnByb2R1Y3RzX3NlY3Rpb24gLmluY2xpbmUtZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXRvcDogNjBweCBzb2xpZCAjZmFiZTEyO1xuICBib3JkZXItcmlnaHQ6IDYwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgd2lkdGg6IDI1MHB4O1xuICB6LWluZGV4OiAxO1xufVxuLmJvdHRvbV9zZWN0aW9uIC5jb250ZW50IC5oaXN0b3J5X3NlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYm90dG9tX3NlY3Rpb24gLmNvbnRlbnQgLmhpc3Rvcnlfc2VjdGlvbiAudGl0bGUtYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMDBweCAwIDUwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYm90dG9tX3NlY3Rpb24gLmNvbnRlbnQgLmhpc3Rvcnlfc2VjdGlvbiAudGl0bGUtYm94IHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmJvdHRvbV9zZWN0aW9uIC5jb250ZW50IC5oaXN0b3J5X3NlY3Rpb24gLnRpdGxlLWJveCAudGl0bGUge1xuICBjb2xvcjogI2ZhYmUxMjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi5ib3R0b21fc2VjdGlvbiAuY29udGVudCAuaGlzdG9yeV9zZWN0aW9uIC5ib3hlZCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uYm90dG9tX3NlY3Rpb24gLmNvbnRlbnQgLmhpc3Rvcnlfc2VjdGlvbiAuYm94ZWQgaW1nIHtcbiAgcGFkZGluZzogNjBweCAwIDA7XG59XG46aG9zdDo6bmctZGVlcCAucGFydG5lcl9zZWN0aW9uIC5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZSB7XG4gIHdpZHRoOiAyMjhweDtcbiAgaGVpZ2h0OiAxNThweDtcbn1cblxuLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiB3aWR0aDogOTIlOyAqL1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXggLmxlZnRfc2lkZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAubGVmdF9zaWRlIGltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IC5yaWdodF9zaWRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzElICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNiU7XG4gIHJpZ2h0OiAxMDJweDtcbn1cblxuLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXggLnJpZ2h0X3NpZGUgLmJhbm5lcl90aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IC5yaWdodF9zaWRlIC5iYW5uZXJfZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxOXB4O1xufVxuXG4uYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAucmlnaHRfc2lkZSAuYnRuX1JlZ2lzdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUQwMDAwO1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNC41cHggMzBweDtcbiAgbWFyZ2luLXRvcDogMjFweDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAgLmJhbm5lcl9zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLXByZXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiB0b3A6IDUwJTsgKi9cbiAgdG9wOiA0NCU7XG4gIC8qIGxlZnQ6IDBweDsgKi9cbiAgbGVmdDogNDBweDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAgLmJhbm5lcl9zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLW5leHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiB0b3A6IDUwJTsgKi9cbiAgdG9wOiA0NCU7XG4gIC8qIHJpZ2h0OiAwcHg7ICovXG4gIHJpZ2h0OiA0MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzgwcHgpIHtcbiAgLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXggLmxlZnRfc2lkZSBpbWcge1xuICAgIGhlaWdodDogNDExcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMTBweCkge1xuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAucmlnaHRfc2lkZSB7XG4gICAgdG9wOiAzMCU7XG4gIH1cbiAgLmNvdXJzZV9zZWN0aW9uIC5jYXJkc19mbGV4IC5zZWN0aW9uX2ltZyB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICB0b3A6IDM1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIDpob3N0OjpuZy1kZWVwIC5iYW5uZXJfc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZS1vdXRlciB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAubGVmdF9zaWRlIGltZyB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAucmlnaHRfc2lkZSB7XG4gICAgdG9wOiAyNyU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIDpob3N0OjpuZy1kZWVwIC5iYW5uZXJfc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZS1vdXRlciB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAubGVmdF9zaWRlIGltZyB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAucmlnaHRfc2lkZSB7XG4gICAgdG9wOiAyNSU7XG4gICAgcmlnaHQ6IDgwcHg7XG4gIH1cbiAgLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXggLnJpZ2h0X3NpZGUgLmJhbm5lcl90aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IC5yaWdodF9zaWRlIC5iYW5uZXJfZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgfVxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAucmlnaHRfc2lkZSAuYnRuX1JlZ2lzdGVyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IC5yaWdodF9zaWRlIHtcbiAgICB0b3A6IDIzJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgOmhvc3Q6Om5nLWRlZXAgLmJhbm5lcl9zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLXN0YWdlLW91dGVyIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG4gIC5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IC5sZWZ0X3NpZGUgaW1nIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG4gIC5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IC5yaWdodF9zaWRlIHtcbiAgICB0b3A6IDIyJTtcbiAgICByaWdodDogMTBweDtcbiAgICB3aWR0aDogNDMlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXgge1xuICAgIC8qIHdpZHRoOiA5OSU7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmJhbm5lcl9zbGlkZXIgdmlkZW8ge1xuICAgIC8qIHdpZHRoOiA5OSU7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgOmhvc3Q6Om5nLWRlZXAgLmJhbm5lcl9zbGlkZXIgLm93bC10aGVtZSAub3dsLW5hdiB7XG4gICAgLyogbWFyZ2luLWJvdHRvbTogMzBweDsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIDpob3N0OjpuZy1kZWVwIC5iYW5uZXJfc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1wcmV2IHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICA6aG9zdDo6bmctZGVlcCAuYmFubmVyX3NsaWRlciAub3dsLWNhcm91c2VsIC5vd2wtbmF2IC5vd2wtbmV4dCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgOmhvc3Q6Om5nLWRlZXAgLmJhbm5lcl9zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLXByZXYgaW1nIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cbiAgOmhvc3Q6Om5nLWRlZXAgLmJhbm5lcl9zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLW5leHQgaW1nIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cbiAgLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXggLnJpZ2h0X3NpZGUgLmJhbm5lcl90aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB9XG4gIC5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IC5yaWdodF9zaWRlIC5iYW5uZXJfZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgfVxuICAuYmFubmVyX3NsaWRlciAuYmFubmVyX3NsaWRlcl9jb250ZW50IC5zbGlkZXJfZmxleCAucmlnaHRfc2lkZSAuYnRuX1JlZ2lzdGVyIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMnB4KSB7XG4gIDpob3N0OjpuZy1kZWVwIC5iYW5uZXJfc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1wcmV2IHtcbiAgICBib3R0b206IC0yMHB4O1xuICB9XG4gIDpob3N0OjpuZy1kZWVwIC5iYW5uZXJfc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1uZXh0IHtcbiAgICBib3R0b206IC0yMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICA6aG9zdDo6bmctZGVlcCAuYmFubmVyX3NsaWRlciAub3dsLXRoZW1lIC5vd2wtbmF2IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4IDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgOmhvc3Q6Om5nLWRlZXAgLmJhbm5lcl9zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLXN0YWdlLW91dGVyIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG4gIC5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IC5sZWZ0X3NpZGUgaW1nIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG4gIC5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IC5yaWdodF9zaWRlIHtcbiAgICB3aWR0aDogMzYlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAxOSU7XG4gIH1cbiAgLmJhbm5lcl9zbGlkZXIgLmJhbm5lcl9zbGlkZXJfY29udGVudCAuc2xpZGVyX2ZsZXggLnJpZ2h0X3NpZGUgLmJhbm5lcl90aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IC5yaWdodF9zaWRlIC5iYW5uZXJfZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogOXB4O1xuICB9XG4gIC5iYW5uZXJfc2xpZGVyIC5iYW5uZXJfc2xpZGVyX2NvbnRlbnQgLnNsaWRlcl9mbGV4IC5yaWdodF9zaWRlIC5idG5fUmVnaXN0ZXIge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xuICB9XG4gIDpob3N0OjpuZy1kZWVwIC5iYW5uZXJfc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1wcmV2IHtcbiAgICBsZWZ0OiA0MSU7XG4gICAgYm90dG9tOiAwcHg7XG4gIH1cbiAgOmhvc3Q6Om5nLWRlZXAgLmJhbm5lcl9zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLW5leHQge1xuICAgIHJpZ2h0OiA0MSU7XG4gICAgYm90dG9tOiAwcHg7XG4gIH1cbn1cbi5jb21tb25faGVhZGluZyBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbW1vbl9oZWFkaW5nIGg0OjphZnRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNzMyNjY7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNy4yJTtcbiAgbGVmdDogNDclO1xufVxuLmNvbW1vbl9oZWFkaW5nIGg0OjpiZWZvcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDczMjY2O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDQuMiU7XG4gIGxlZnQ6IDQ4LjQlO1xuICBib3R0b206IC05cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/homepage/homepage.component */ 403);

const routes = [{
  path: '',
  pathMatch: 'full',
  component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent
}, {
  path: 'home',
  component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent
}];

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 3563);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 289);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);




(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
  ..._app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig,
  providers: [...(_app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig.providers || []), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.provideAnimations)()]
}).catch(err => console.error(err));

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  baseUrl: 'http://localhost:4200/Images'
};

/***/ }),

/***/ 5473:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class FooterComponent {
  static {
    this.ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 72,
      vars: 0,
      consts: [["id", "footer-widget", 1, "footer_section"], [1, "container", "header-bg"], [1, "row"], [1, "col-sm-3"], ["href", "#"], [1, "widget-img-box"], ["href", "assets/images/widget-big-1.png", 1, "test-popup-link"], ["src", "assets/images/widget-1.png", "alt", "widget", 1, "widget-img"], ["href", "assets/images/widget-big-2.png", 1, "test-popup-link"], ["src", "assets/images/widget-2.png", "alt", "widget", 1, "widget-img"], ["href", "assets/images/widget-big-3.png", 1, "test-popup-link"], ["src", "assets/images/widget-3.png", "alt", "widget", 1, "widget-img"], ["href", "assets/images/widget-big-4.png", 1, "test-popup-link"], ["src", "assets/images/widget-4.png", "alt", "widget", 1, "widget-img"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our Popular Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Space Robot");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lego Robot");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Toy for Robot");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Industry Robot");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sports Robot");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3)(23, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Important Link");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul")(26, "li")(27, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li")(30, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ipsum");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li")(33, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Dolar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li")(36, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Set amet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Iodiet lorem");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3)(42, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Our Latest Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul")(45, "li")(46, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Edu Robot");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li")(49, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Low Robot");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li")(52, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Mega Robot");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li")(55, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Industry Robot");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li")(58, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sports Robot");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3)(61, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Our Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 5)(64, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
      styles: [".footer_section[_ngcontent-%COMP%] {\n  background-color: #ededed;\n  padding: 80px 0;\n  border-bottom: 1px solid rgba(153, 153, 153, 0.3);\n}\n.footer_section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(153, 153, 153, 0.3);\n  color: #999;\n  padding-bottom: 25px;\n  margin-bottom: 15px;\n  font-weight: 300;\n  letter-spacing: 2px;\n}\n.footer_section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  margin-bottom: 10px;\n}\n.footer_section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 7px 0;\n}\n.footer_section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #999;\n  font-family: \"Roboto\";\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: none;\n}\n.footer_section[_ngcontent-%COMP%]   .widget-img-box[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.footer_section[_ngcontent-%COMP%]   .widget-img-box[_ngcontent-%COMP%]   .widget-img[_ngcontent-%COMP%] {\n  width: 49%;\n  display: inline-block;\n}\n\n.footer_section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\\f363\";\n  font-family: \"ionicons\";\n  padding-right: 5px;\n  font-size: 14px;\n  color: #999;\n}\n\n.footer_section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vTGl2ZSUyMFByb2plY3RzL0hOX0VudGVycHJpc2VzL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaURBQUE7QUNDRjtBRENFO0VBQ0UsaURBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNESjtBREdJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNETjtBREtFO0VBQ0UsZ0JBQUE7QUNISjtBREtJO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FDSE47O0FEUUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0xGOztBRFFBO0VBQ0UsMEJBQUE7QUNMRiIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJfc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICBwYWRkaW5nOiA4MHB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zKTtcclxuXHJcbiAgaDMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zKTtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA3cHggMDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC53aWRnZXQtaW1nLWJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICAgIC53aWRnZXQtaW1nIHtcclxuICAgICAgd2lkdGg6IDQ5JTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvb3Rlcl9zZWN0aW9uIHVsIGxpOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGYzNjNcIjtcclxuICBmb250LWZhbWlseTogXCJpb25pY29uc1wiO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5mb290ZXJfc2VjdGlvbiB1bCBsaSBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4iLCIuZm9vdGVyX3NlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xuICBwYWRkaW5nOiA4MHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMyk7XG59XG4uZm9vdGVyX3NlY3Rpb24gaDMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNTMsIDE1MywgMTUzLCAwLjMpO1xuICBjb2xvcjogIzk5OTtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG4uZm9vdGVyX3NlY3Rpb24gdWwge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5mb290ZXJfc2VjdGlvbiBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogN3B4IDA7XG59XG4uZm9vdGVyX3NlY3Rpb24gbGkgYSB7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9vdGVyX3NlY3Rpb24gLndpZGdldC1pbWctYm94IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5mb290ZXJfc2VjdGlvbiAud2lkZ2V0LWltZy1ib3ggLndpZGdldC1pbWcge1xuICB3aWR0aDogNDklO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5mb290ZXJfc2VjdGlvbiB1bCBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjM2M1wiO1xuICBmb250LWZhbWlseTogXCJpb25pY29uc1wiO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5mb290ZXJfc2VjdGlvbiB1bCBsaSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map