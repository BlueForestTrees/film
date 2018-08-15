"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _env = require("./env");

var _env2 = _interopRequireDefault(_env);

var _treesDb = require("mongo-connexion");

var _treesExpress = require("express-blueforest");

var _treesExpress2 = _interopRequireDefault(_treesExpress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorAdapter = function errorAdapter(err) {};

exports.default = (0, _treesDb.dbConnect)(_env2.default).then((0, _treesExpress2.default)(_env2.default, errorAdapter));