"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Angular 2 decorators and services
 */
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var home_1 = require('./home');
var router_active_1 = require('./router-active');
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(appState) {
        this.appState = appState;
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.name = 'Angular 2 Webpack Starter';
        this.url = 'https://twitter.com/AngularClass';
    }
    App.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            pipes: [],
            providers: [],
            directives: [router_active_1.RouterActive],
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [
                require('normalize.css'),
                "\n    md-toolbar ul {\n      display: inline;\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      width: 60px;\n    }\n    md-toolbar li {\n      display: inline;\n    }\n    md-toolbar li.active {\n      background-color: lightgray;\n    }\n  "],
            template: "\n    <header>\n      <md-toolbar color=\"primary\">\n        <span>{{ name }}</span>\n        <nav>\n          <ul>\n            <li router-active>\n              <a [routerLink]=\" ['Index'] \">Index</a>\n            </li>\n            |\n            <li router-active>\n              <a [routerLink]=\" ['Home'] \">Home</a>\n            </li>\n            |\n            <li router-active>\n              <a [routerLink]=\" ['About'] \">About</a>\n            </li>\n          </ul>\n        </nav>\n      </md-toolbar>\n    </header>\n\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n\n    <pre>this.appState.state = {{ appState.state | json }}</pre>\n\n    <footer>\n      WebPack Angular 2 Starter by <a [href]=\"url\">@AngularClass</a>\n      <div>\n        <img [src]=\"angularclassLogo\" width=\"10%\">\n      </div>\n    </footer>\n  "
        }),
        router_1.RouteConfig([
            { path: '/', name: 'Index', component: home_1.Home, useAsDefault: true },
            { path: '/home', name: 'Home', component: home_1.Home },
            // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
            { path: '/about', name: 'About', loader: function () { return require('es6-promise!./about')('About'); } }
        ])
    ], App);
    return App;
}());
exports.App = App;
/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
//# sourceMappingURL=app.component.js.map