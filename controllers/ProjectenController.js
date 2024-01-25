const multer = require('multer');
const sharp = require('sharp');
const Projecten = require('./../models/ProjectenModel');
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

exports.uploadProductImageCover = upload.fields([
  { name: 'imageCover', maxCount: 1 }
]);

exports.uploadProductImages = upload.fields([
  { name: 'images', maxCount: 1 }
]);


exports.resizeImageCover = catchAsync(async (req, res, next) => {
  if(!req.files.imageCover) return next();

  req.body.imageCover = `project-${req.params.id}-cover.webp`;
  await sharp(req.files.imageCover[0].buffer)
    .resize({ fit: 'contain' })
    .toFormat('webp')
    .webp({ quality: 100 })
    .toFile(`public/images/projecten/${req.body.imageCover}`);
  
  next();
});

exports.resizeProductImages = catchAsync(async (req, res, next) => {
  if (!req.files.images) return next();

  req.body.images = [];

  await Promise.all(
    
    req.files.images.map(async (file, i) => {
      const filename = `project-${req.params.id}-${i + 1}.webp`;
      await sharp(file.buffer)
        .resize({ fit: 'contain' })
        .toFormat('webp')
        .webp({ quality: 100 })
        .toFile(`public/images/projecten/${filename}`);

      req.body.images.push(filename);
    })
  );

  next();
});

exports.getAllProducts = factory.getAll(Projecten);
exports.getProduct = factory.getOne(Projecten);
exports.createProduct = factory.createOne(Projecten);
exports.updateProduct = factory.updateOne(Projecten);
exports.deleteProduct = factory.deleteOne(Projecten);
