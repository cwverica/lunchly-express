/** Database for lunchly */
const { MY_DB_LOGIN, MY_DB_PW } = require("./secret_keys")
const pg = require("pg");
let DB_URI;

if (!MY_DB_LOGIN) {
    DB_URI = "postgresql:///lunchly";
} else {
    DB_URI = `postgres://${MY_DB_LOGIN}:${MY_DB_PW}@localHost:5432/lunchly`
}

const db = new pg.Client(DB_URI);

db.connect();

module.exports = db;
