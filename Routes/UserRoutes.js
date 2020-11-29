const { Router } = require('express');
const router = Router();

const { createUser } = require('../Controllers/userController');

router.post('/new-user', createUser);

module.exports = router;
