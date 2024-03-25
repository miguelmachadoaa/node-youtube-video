const {Router} = require('express');

const projectController = require("../../controllers/projectController");

const router = Router();

router.get('/', projectController.getAllProjects)

router.get('/:id', projectController.getProjectById)

router.patch('/:id', projectController.updateProject)

router.post('/', projectController.createProject)

router.delete('/:id', projectController.deleteProject)

module.exports = router;

