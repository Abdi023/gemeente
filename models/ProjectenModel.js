const mongoose = require('mongoose');
const slugify = require('slugify');

const projectenSchema = new mongoose.Schema(
    {
        titel: String,
        description: [String,
            "",
            ""
        ],
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

projectenSchema.index({ slug: 1 });

projectenSchema.pre('save', function (next) {
    if (this.isModified('name')) {
        this.slug = slugify(this.name, { lower: true });
    }
  next();
});

projectenSchema.post(/^find/, function (docs, next) {
    console.log(`Query took ${Date.now() - this.start} milliseconds!`);
    next();
});



const Projecten = mongoose.model('project', projectenSchema)

module.exports = Projecten;
