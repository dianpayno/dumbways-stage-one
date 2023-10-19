const router = require('express').Router();
const {addproject, updateProject,contact,myproject,testimoni,home,deleteProject, editProject, projectDetail} = require ('../controlers/addProjectController.js')

// routing
router.get('/', home);
router.get('/contact', contact);
router.get('/testimoni', testimoni);   
router.get('/myproject', myproject);
router.get('/project/:id', projectDetail);

router.post('/addproject', addproject);
router.get("/deleteproject/:id", deleteProject);

router.get("/editproject/:id", editProject)
router.post("/updateProject/:id", updateProject)

module.exports = router;