const express = require('express');
const MensenController = require('../controllers/MensenController');

const router = express.Router();

router
  .route('/')
  .get(MensenController.getAllProducts)
  .post(MensenController.createProduct);

router
  .route('/:id')
  .get(MensenController.getProduct)
  .patch(
    MensenController.uploadProductImages,
    MensenController.resizeProductImages,
    MensenController.updateProduct
  )
  .delete(MensenController.deleteProduct);

module.exports = router;