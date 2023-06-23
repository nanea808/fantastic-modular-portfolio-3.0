const router = require('express').Router();

const { login, createUser, getUsers } = require('../../controllers/userController');

router.route('/').get(getUsers);
router.route('/login').post(login);
router.route('/admin').post(createUser);

module.exports = router;