const express = require('express');
const router = express.Router();
const dogService = require('../controller/dogController');

// Dogs Routes
router.post('/', dogService.saveDog);
router.get('/', dogService.getDogs);
router.get('/:id', dogService.getDog);
router.put('/:id', dogService.updateDog);
router.delete('/:id', dogService.deleteDog);

module.exports = router;