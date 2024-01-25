const mongoose = require('mongoose');
const slugify = require('slugify');

exports.organisatieSchema = new mongoose.Schema({
    _id: false,
    orgaNaam: {
        type:String
    },
    orgSlug: String,
    orgSummary: {
        type: String
    },
    // voor 4 description
    orgDescription: [
        {
            type: String
        }
    ],
    orgAlinea: {
        type: String
    },
    orgAlineah2: {
        type: String
    },
    // voor 3 descript
    orgDescription2: [
        {
            type: String
        }
    ],
    // voor 6 listen
    orglisten: [
        {
            type: String
        }
    ], 
    orgDescription3: [
        {
            type: String
        }
    ],
    
});