const express = require('express');
const router = express.Router();

router.use('/dog', require('./dog.router'));
router.use('/cat', require('./cat.router'));

module.exports = router;