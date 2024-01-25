const multer = require('multer');
const sharp = require('sharp');
const Expertise = require('./../models/ExpertiseModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('./../utils/appError');

const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadImageCover = upload.fields([
  { name: 'imageCover', maxCount: 1 }
]); // voor imageCover

exports.uploadImages = upload.fields([
  { name: 'images', maxCount: 6 }
]); // optie voor meer images.

// imageCover resize
exports.resizeImageCover = catchAsync(async (req, res, next) => {
  if (!req.files.imageCover) return next();

  req.body.imageCover = `expertise-${req.params.id}-cover.webp`;
  await sharp(req.files.imageCover[0].buffer)
    .resize({ fit: 'contain' })
    .toFormat('webp')
    .webp({ quality: 100 })
    .toFile(`public/images/expertise/${req.body.imageCover}`);

  next();
});


// resize images
exports.resizeImages = catchAsync(async (req, res, next) => {
  if (!req.files.images) return next();

  req.body.images = [];
  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `expertise-${req.params.id}-${i + 1}.webp`;

      await sharp(file.buffer)
        .resize({ fit: 'contain' })
        .toFormat('webp')
        .webp({ quality: 100 })
        .toFile(`public/images/expertise/${filename}`);

      req.body.images.push(filename);
    })
  );

  next();
});


exports.getAllProducts = factory.getAll(Expertise);
exports.getProduct = factory.getOne(Expertise);
exports.createProduct = factory.createOne(Expertise);
exports.updateProduct = factory.updateOne(Expertise);
exports.deleteProduct = factory.deleteOne(Expertise);
