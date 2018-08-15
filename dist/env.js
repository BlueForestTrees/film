"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENV = {
    DB_NAME: process.env.DB_NAME || "BlueForestTreesDB",
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: process.env.DB_PORT || 27017,
    DB_COLLECTION: process.env.DB_COLLECTION || "FilmCollection",

    REST_PATH: process.env.REST_PATH && _path2.default.join(__dirname, process.env.REST_PATH) || _path2.default.join(__dirname, "/rest")
};

console.log({ ENV: ENV });

exports.default = ENV;