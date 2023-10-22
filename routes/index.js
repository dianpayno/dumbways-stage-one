const router = require('express').Router();
const {addproject, updateProject,contact,myproject,testimoni,home,deleteProject, editProject, projectDetail,} = require ('../controlers/addProjectController.js')
const {addUser,userLogin, login, register, logout} = require ("../controlers/userController.js");
const upload = require("../controlers/uploadfile.js");

// routing
router.get('/', home);
router.get('/contact', contact);
router.get('/testimoni', testimoni);   
router.get('/myproject', myproject);
router.get('/project/:id', projectDetail);

router.post('/addproject', upload.single("upload-img"), addproject);
router.get("/deleteproject/:id", deleteProject);

router.get("/editproject/:id", editProject);
router.post("/updateProject/:id", upload.single("upload-img"), updateProject);

router.get('/login', login);
router.get('/logout', logout);
router.get('/register', register);
router.post('/adduser', addUser);
router.post('/userlogin', userLogin);

module.exports = router;