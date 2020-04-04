const mongoose = require("../db");
var uniqueValidator = require('mongoose-unique-validator');
const schema = {
    name : {type: String, required: true, min:3, trim: true},
    phone : {type: mongoose.SchemaTypes.String, required: true, trim: true, unique:true, index:true},
    location: {type: String},
    password : {type: String, required: true, min: 6},
    createdOn: { type: Date, default: Date.now()}
};

const collectionName = "saviours";
const saviourSchema = mongoose.Schema(schema);
saviourSchema.plugin(uniqueValidator);
const saviour = mongoose.model(collectionName, saviourSchema);

module.exports = saviour;

