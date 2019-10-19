const express = require('express');
const router = express.Router();
const catsService = require('../controller/catController');

// Cats Routes
router.post('/', catsService.saveCat);
router.get('/', catsService.getCats);
router.get('/:id', catsService.getCat);
router.put('/:id', catsService.updateCat);
router.delete('/:id', catsService.deleteCat);

module.exports = router;