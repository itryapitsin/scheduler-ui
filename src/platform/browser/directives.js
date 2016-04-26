/*
 * These are globally available directives in any template
 */
"use strict";
var core_1 = require('angular2/core');
// Angular 2 Router
var router_1 = require('angular2/router');
// application_directives: directives that are global through out the application
exports.APPLICATION_DIRECTIVES = router_1.ROUTER_DIRECTIVES.slice();
exports.DIRECTIVES = [
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { multi: true, useValue: exports.APPLICATION_DIRECTIVES })
];
//# sourceMappingURL=directives.js.map