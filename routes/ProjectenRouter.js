const express = require('express');
ProjectenController = require('./../controllers/ProjectenController');

const router = express.Router();

router
  .route('/')
  .get(ProjectenController.getAllProducts)
  .post(ProjectenController.createProduct);

router
  .route('/:id')
  .get(ProjectenController.getProduct)
  .patch(
    ProjectenController.uploadProductImageCover,
    ProjectenController.resizeImageCover,
    ProjectenController.updateProduct,
    ProjectenController.uploadProductImages,
    ProjectenController.resizeProductImages,
    ProjectenController.updateProduct
    
  )
  .delete(ProjectenController.deleteProduct);


module.exports = router;