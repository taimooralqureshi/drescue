// const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");
require('dotenv').config();
const url = process.env.MONGOLAB_URI;

mongoose.connect(url, {
    useNewUrlParser: true,  useUnifiedTopology: true, 
    useCreateIndex: true, useFindAndModify: false
});
const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;
