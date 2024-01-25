const express = require('express');
const PublicatiesController = require('./../controllers/PublicatiesController');

const router = express.Router();

router
    .route('/')
    .get(PublicatiesController.getAllProducts)
    .post(PublicatiesController.createProduct);

router
    .route('/:id')
    .get(PublicatiesController.getProduct)
    .patch(
        PublicatiesController.uploadProductImages,
        PublicatiesController.resizeProductImages,
        PublicatiesController.updateProduct
        )
    .delete(PublicatiesController.deleteeProduct);


module.exports = router;