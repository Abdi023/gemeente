const mongoose = require('mongoose');

// voor wibautgroep
exports.wibautgroepSchema = new mongoose.Schema({
    _id: false,
    wibautDescription: {
        type: String
    },
    wibautDescription2: {
        type: String
    },
    wibautAlinea: {
        type: String
    },
});

exports.personenSchema = new mongoose.Schema({
    _id: false,
    persoon: [String,
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    persoonCV: [String,
        "",
        "",
        "",
        "",
        "",
        "",
    ],
});

