"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilms = exports.getFilmByName = exports.getFilm = exports.deleteFilm = exports.saveFilm = undefined;

var _treesDb = require("mongo-connexion");

var _env = require("../env");

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var films = (0, _treesDb.col)(_env2.default.DB_COLLECTION);

var saveFilm = exports.saveFilm = function saveFilm(_ref) {
  var doc = _ref.doc;
  return films.update({ _id: doc._id }, doc, { upsert: true });
};
var deleteFilm = exports.deleteFilm = function deleteFilm(_ref2) {
  var _id = _ref2._id;
  return films.deleteOne({ _id: _id });
};
var getFilm = exports.getFilm = function getFilm(_ref3) {
  var _id = _ref3._id;
  return films.findOne({ _id: _id });
};
var getFilmByName = exports.getFilmByName = function getFilmByName(_ref4) {
  var name = _ref4.name;
  return films.findOne({ "f.name": name });
};
var getFilms = exports.getFilms = function getFilms() {
  return films.find({}, { _id: 1, "f.name": 1 }).toArray();
};