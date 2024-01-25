const mongoose = require('mongoose');
const slugify = require('slugify');

// 6verschillende models van expertiseModel alleen.
// const Wibaut = require('./expertiseModels/wibautgroepModel');
// const Projectmanagement = require('./expertiseModels/projectManagementModel');
// const PlanningAndStructure = require('./expertiseModels/planningAndStructureModel');
// const Organisatie = require('./expertiseModels/organisatieModel');
// const Maatschappelijk = require('./expertiseModels/maatschappelijkModel');
// const BouwManagement = require('./expertiseModels/bouwManagementModel');

const expertSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        description: String,
        name: {
            type: String
        },
        slug: String,
        summary: {
            type: String
        },
        imageCover: {
            type: String
        },
        // // wibautgroepmodel
        // wibautgroep: [
        //     {
        //         _id: false,
        //         description1: Wibaut.wibautgroepSchema,
        //         description2: Wibaut.wibautgroepSchema,
        //         alinea: Wibaut.wibautgroepSchema,
        //     }
        // ],
        // personen: [Wibaut.personenSchema],
        images: [String],
        createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
        }
    }, 
    {
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
);

expertSchema.index({ slug: 1 });

expertSchema.pre('save', function (next) {
    if (this.isModified('name')) {
        this.slug = slugify(this.name, { lower: true });
    }
  next();
});

expertSchema.post(/^find/, function (docs, next) {
    console.log(`Query took ${Date.now() - this.start} milliseconds!`);
    next();
});



const Expertise = mongoose.model('Expertise', expertSchema)

module.exports = Expertise;
