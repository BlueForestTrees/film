"use strict";

var _treesExpress = require("express-blueforest");

var _dist = require("mongo-registry/dist");

var _check = require("express-validator/check");

var _env = require("../env");

var _filmService = require("../service/filmService");

var router = (0, _treesExpress.Router)();

router.get('/api/films', (0, _treesExpress.run)(_filmService.getFilms));
router.get('/api/film/:_id', (0, _check.check)("_id"), (0, _treesExpress.run)(_filmService.getFilm));
router.get('/api/filmbyname/:name', (0, _check.check)("name"), (0, _treesExpress.run)(_filmService.getFilmByName));
router.delete('/api/film/:_id', (0, _check.check)("_id"), (0, _treesExpress.run)(_filmService.deleteFilm));
router.post('/api/film', (0, _check.check)("film"), (0, _treesExpress.run)(_filmService.saveFilm));

module.exports = router;