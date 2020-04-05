const mongoose = require("../db");
var uniqueValidator = require('mongoose-unique-validator');

const saviourSchema = mongoose.Schema({
    name : {type: String, required: true, min:3, trim: true},
    phone : {type: mongoose.SchemaTypes.String, required: true, trim: true, unique:true, index:true},
    location: {type: String},
    password : {type: String, required: true, min: 6},
    createdOn: { type: Date, default: Date.now()},
    type : {type: String, default: "individual"},
    itemlists: [mongoose.SchemaTypes.Mixed]
});

const collectionName = "saviours";
saviourSchema.plugin(uniqueValidator);
const saviour = mongoose.model(collectionName, saviourSchema);

module.exports = saviour;

