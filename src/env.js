import path from "path";

const ENV = {
    DB_NAME: process.env.DB_NAME || "BlueForestTreesDB",
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: process.env.DB_PORT || 27017,
    DB_COLLECTION: process.env.DB_COLLECTION || "FilmCollection",

    REST_PATH: process.env.REST_PATH || path.join(__dirname, "rest")
};

console.log({ENV});

export default ENV;