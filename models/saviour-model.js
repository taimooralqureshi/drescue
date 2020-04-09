const mongoose = require("../db");
var uniqueValidator = require('mongoose-unique-validator');

const saviourSchema = mongoose.Schema({
    name        : { type: String, required: [true, 'name is required'], min:3, trim: true},
    phone       : { type: String, required: [true, 'phone number is required'], 
                    match: [/\d{11}/, 'number must be 11-digit'], trim: true, unique:true, index:true},
    location    : { type: String},
    password    : { type: String, required: [true, 'password is required'], min: 6},
    createdOn   : { type: Date, default: Date.now()},
    type        : { type: String, default: "individual"},
    itemlists   : [ mongoose.SchemaTypes.Mixed]
});

const collectionName = "saviours";
saviourSchema.plugin(uniqueValidator);
const saviour = mongoose.model(collectionName, saviourSchema);

module.exports = saviour;

