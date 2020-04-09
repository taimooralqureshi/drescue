const mongoose = require("../db");
const uniqueValidator = require('mongoose-unique-validator');
const schema = {
    name        : { type: String, required: [true, 'name is required!'] },
    phone       : { type: String, required: [true, 'phone number is required!'] },
    nic         : { type: String, required: [true, 'nic is required!'], 
                    match: [/\d{13}/,'must be 13-digit number'], max:13, min:13, unique:true, index:true},
    location    : { type: String},
    createdOn   : { type: Date, default: Date.now()},
    UpdateOn    : { type: Date, required:Date },
    status      : { type: Boolean, default:true}
};

const collectionName = "seekers"; // Name of the collection of documents
const seekerSchema = mongoose.Schema(schema);
seekerSchema.plugin(uniqueValidator);
const Seeker = mongoose.model(collectionName, seekerSchema);
module.exports = Seeker;
