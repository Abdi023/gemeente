const express = require('express');
const ViewsController = require('../controllers/ViewsController');

const router = express.Router();

//  pagina
router.get('/',  ViewsController.MensenPagina)

router.get('/mensen/:slug', ViewsController.ViewMensenPagina)


// expertise 
router.get('/expertise', ViewsController.ExpertisenPagina);

router.get('/viewexpert/:slug', ViewsController.ViewExpertisenPagina);

// 
router.get('/projecten', ViewsController.ProjectenPagina);

// 
router.get('/project/:slug', ViewsController.ViewProjectenPagina);


// 
router.get('/publicaties', ViewsController.PublicatiesPagina);

// 
router.get('/viewpublicatie/:slug', ViewsController.ViewPublicPagina);


// pbm bestanden routes
router.get('/pmb', ViewsController.PMBindex);
router.get('/pmb/organisatie', ViewsController.PMBorganisaties);
router.get('/pmb/projecten', ViewsController.PMBprojecten);
// viewprojecten pagina
router.get('/pmb/projecten/viewproject', ViewsController.PMBviewProject);
router.get('/pmb/projecten/viewproject2', ViewsController.PMBviewProject2);
router.get('/pmb/projecten/viewproject3', ViewsController.PMBviewProject3);
router.get('/pmb/projecten/viewproject4', ViewsController.PMBviewProject4);
router.get('/pmb/projecten/viewproject5', ViewsController.PMBviewProject5);
router.get('/pmb/projecten/viewproject6', ViewsController.PMBviewProject6);
router.get('/pmb/projecten/viewproject7', ViewsController.PMBviewProject7);
router.get('/pmb/projecten/viewproject8', ViewsController.PMBviewProject8);

// 
router.get('/pmb/werken', ViewsController.PMBwerken);




module.exports = router;