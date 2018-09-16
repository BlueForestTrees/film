import {col} from "mongo-registry"
import ENV from "../env";

const films = col(ENV.DB_COLLECTION);

export const saveFilm = ({doc}) => films.update({_id: doc._id}, doc, {upsert: true});
export const deleteFilm = ({_id}) => films.deleteOne({_id});
export const getFilm = ({_id}) => films.findOne({_id});
export const getFilmByName = ({name}) => films.findOne({"f.name": name});
export const getFilms = () => films.find({}, {_id: 1, "f.name": 1}).toArray();