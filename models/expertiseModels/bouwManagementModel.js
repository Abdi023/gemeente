const mongoose = require('mongoose');
const slugify = require('slugify');

// Bouw management schema
exports.bouwSchema = new mongoose.Schema({
    _id: false,
    Bouwnaam: {
        type: String
    },
    alinea: {
        type: String
    }
});