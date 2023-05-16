const router = require('express').Router();

const { getProjects } = require('../../controllers/projectController');

router.route('/').get(getProjects);

module.exports = router;