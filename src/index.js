import ENV from "./env";
import {dbInit} from "mongo-registry";
import startExpress from "express-blueforest";

export default dbInit(ENV, [])
    .then(startExpress(ENV))