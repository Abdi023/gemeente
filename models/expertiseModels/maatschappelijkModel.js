const mongoose = require('mongoose');
const slugify = require('slugify');

// Maatschappelijk vastgoed schema
exports.maatschappelijkSchema = new mongoose.Schema({
    _id: false,
    Maatnaam: {
        type: String
    },
    alinea: {
        type: String
    }
});