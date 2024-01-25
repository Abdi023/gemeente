const express = require('express');
const ExpertiseController = require('./../controllers/ExpertiseController');

const router = express.Router();

router
  .route('/')
  .get(ExpertiseController.getAllProducts)
  .post(ExpertiseController.createProduct);

/*  
2x moet ExpertiseController.updateProduct na toevoegen
  ExpertiseController.uploadImageCover,
  ExpertiseController.resizeImageCover,

en ook na
  ExpertiseController.uploadImages,
  ExpertiseController.resizeImages,

1x toevoegen ERROR: voorkom dat.
*/

router
  .route('/:id')
  .patch(
    ExpertiseController.uploadImageCover,
    ExpertiseController.resizeImageCover,
    ExpertiseController.updateProduct,
    ExpertiseController.uploadImages,
    ExpertiseController.resizeImages,
    ExpertiseController.updateProduct
  )
  .delete(ExpertiseController.deleteProduct);


module.exports = router;
