import {Router} from "express-blueforest";
import {check} from 'express-validator/check';
import {run} from "express-blueforest";
import {deleteFilm, getFilm, getFilmByName, getFilms, saveFilm} from "../service/filmService";

const router = Router();

router.get('/api/film/all', run(getFilms));
router.get('/api/film/:_id', check("_id"), run(getFilm));
router.get('/api/filmbyname/:name', check("name"), run(getFilmByName));
router.delete('/api/film/:_id', check("_id"), run(deleteFilm));
router.post('/api/film', check("film"), run(saveFilm));

module.exports = router;