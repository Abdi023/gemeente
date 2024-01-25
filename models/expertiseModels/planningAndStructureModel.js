const mongoose = require('mongoose');
const slugify = require('slugify');

// Planning en structurering schema
exports.plan_structureSchema = new mongoose.Schema({
        _id: false,
        alineaNaam: {
            type: String
        },
        alineaText: {
            type: String
        },
        planlisten: [
            {
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
            }
        ],
        videoHeader: {
            type: String
        },
        video: {
            type: String
        },
});