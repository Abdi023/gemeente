const multer = require('multer');
const sharp = require('sharp');
const Publicaties = require('./../models/PublicatiesModel');
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


exports.uploadProductImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 10 }
]);

exports.resizeProductImages = catchAsync(async (req, res, next) => {
  if (!req.files.imageCover || !req.files.images) return next();

  req.body.imageCover = `publicatie-${req.params.id}-cover.webp`;
  await sharp(req.files.imageCover[0].buffer)
    .resize({ fit: 'contain' })
    .toFormat('webp')
    .webp({ quality: 100 })
    .toFile(`public/images/publicaties/${req.body.imageCover}`);

  req.body.images = [];

  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `publicatie-${req.params.id}-${i + 1}.webp`;

      await sharp(file.buffer)
        .resize({ fit: 'contain' })
        .toFormat('webp')
        .webp({ quality: 100 })
        .toFile(`public/images/publicaties/${filename}`);

      req.body.images.push(filename);
    })
  );

  next();
});








exports.getAllProducts = factory.getAll(Publicaties);
exports.getProduct = factory.getOne(Publicaties);
exports.createProduct = factory.createOne(Publicaties);
exports.updateProduct = factory.updateOne(Publicaties);
exports.deleteeProduct = factory.deleteOne(Publicaties);
