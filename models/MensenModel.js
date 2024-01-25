const mongoose = require('mongoose');
const slugify = require('slugify');

const alineaSchema = new mongoose.Schema({
  _id: false,
  alineaNaam: {
    type: String,
  },
  alineaParagraph: {
    type: String,
  },
});

const projectListSchema = new mongoose.Schema({
  _id: false,
  list1: {
    type: String,
  },
  list2: {
    type: String,
  },
  list3: {
    type: String,
  },
});

const mensenSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    slug: String,
    summary: {
      type: String,
    },
    description: {
      type: String,
    },
    alineas: [
      {
        _id: false,
        alinea1: alineaSchema,
        alinea2: alineaSchema,
      },
    ],
    projecten: [
      {
        _id: false,
        projectheader: {
          type: String,
        },
        projectlist: [projectListSchema],
      },
    ],
    imageCover: {
      type: String,
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

mensenSchema.index({ slug: 1 });

mensenSchema.pre('save', function (next) {
  if (this.isModified('name')) {
    this.slug = slugify(this.name, { lower: true });
  }
  next();
});

mensenSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

const Mensen = mongoose.model('Mensen', mensenSchema);

module.exports = Mensen;
