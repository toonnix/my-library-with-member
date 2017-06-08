/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
	"development": {
		"dialect": "postgres",
		"database": "mylibraryMember",
		"username": "librarian",
		"password": "admin",
		"host": "localhost",
		"port": 5432,
		"express": {
			"port": 3100,
			"ip": "127.0.0.1"
		}
	},
	"test": {
		"dialect": "postgres",
		"database": "mylibraryMember",
		"username": "librarian",
		"password": "admin",
		"host": "localhost",
		"port": 5432
	},
	"production": {
		"dialect": "postgres",
		"database": "dund0u3u59u1v",
		"username": "mhifnkruoxymho",
		"password": "6a2fc6364e279637a362c51ea08c168de688fb3e1e60e866aa144b26be573e72",
		"host": "ec2-54-83-26-65.compute-1.amazonaws.com",
		"port": 5432,
		"express": {
			"port": 80,
			"ip": "0.0.0.0"
		}
	}
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var express = __webpack_require__(1);
var bodyParser = __webpack_require__(6);
var passport = __webpack_require__(8);
var session = __webpack_require__(7);
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', __webpack_require__(5));
exports["default"] = app;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Sequelize = __webpack_require__(9);
var config_1 = __webpack_require__(11);
var sequelize = new Sequelize(config_1["default"]);
exports["default"] = {
    sequelize: sequelize,
    Sequelize: Sequelize
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var app_1 = __webpack_require__(2);
var db_1 = __webpack_require__(3);
var config_1 = __webpack_require__(11);
db_1["default"].sequelize.sync().then(function () {
    console.log('Connect to the Database!');
})["catch"](function (err) {
    console.log(err, "Something went wrong with the Database Update!");
});
app_1["default"].listen(config_1["default"].express.port, config_1["default"].express.ip, function (error) {
    if (error) {
        process.exit(10);
    }
    console.log('express is listening on http://' +
        config_1["default"].express.ip + ':' + config_1["default"].express.port);
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var express_1 = __webpack_require__(1);
var router = express_1.Router();
module.exports = router;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var configFile = __webpack_require__(0);
var config;
switch (process.env.NODE_ENV) {
    case 'development':
        config = configFile.development;
    case 'production':
        config = configFile.production;
    default:
        config = configFile.development;
}
exports["default"] = config;


/***/ })
/******/ ]);