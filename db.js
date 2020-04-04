// const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");
const url = "mongodb://tester:tester1@ds042677.mlab.com:42677/drescue";

// const dbPath = "mongodb://<dbuser>:<dbpassword>@ds250607.mlab.com:38485/test-db";
mongoose.connect(url, {
    useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true
});
const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;
