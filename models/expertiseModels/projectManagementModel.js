const mongoose = require('mongoose');
const slugify = require('slugify');

// project management schema
exports.projectmgSchema = new mongoose.Schema( {
    _id: false,
    alineaNaam: {
        type: String
    },
    list1: {
        type: String
    },
    list2: {
        type: String
    },
    list3: {
        type: String
    },
    list4: {
        type: String
    },
    list5: {
        type: String
    },
    list6: {
        type: String
    },
});