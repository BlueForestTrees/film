import ENV from "./env";
import {dbConnect} from "mongo-connexion";
import startExpress from "express-blueforest";



export default dbConnect(ENV)
    .then(startExpress(ENV))