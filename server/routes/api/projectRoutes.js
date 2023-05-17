const router = require('express').Router();

const { getProjects, createProject } = require('../../controllers/projectController');

router.route('/').get(getProjects).post(createProject);

module.exports = router;