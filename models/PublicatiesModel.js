const mongoose = require('mongoose');

const publicatieSchema = new mongoose.Schema({
    titel: String,
    smarty: [
        {
            _id: false,
            alinea: String,
            description: [String],
        }
    ],
    imageCover: {
        type: String
    },
    bigData: [
        {
            _id: false,
            naam: String,
        }
    ],
    alineaPDF: {
        type: String
    },
    images: [String],
    pdfName: [String],
    pdf: [String]

});

publicatieSchema.post(/^find/, function (docs, next) {
    console.log(`Query took ${Date.now() - this.start} milliseconds!`);
    next();
});

const publicaties = mongoose.model('Publicaties', publicatieSchema);

module.exports = publicaties;