const express = require('express');
const router = express.Router();
const catsService = require('../services/catsService');
const dogService = require('../services/dogsService');

// Cats Routes
router.post('/cats', catsService.saveCat);
router.get('/cats', catsService.getCats);
router.get('/cats/:id', catsService.getCat);
router.put('/cats/:id', catsService.updateCat);
router.delete('/cats/:id', catsService.deleteCat);

// Dogs Routes
router.post('/dogs', dogService.saveDog);
router.get('/dogs', dogService.getDogs);
router.get('/dogs/:id', dogService.getDog);
router.put('/dogs/:id', dogService.updateDog);
router.delete('/dogs/:id', dogService.deleteDog);

module.exports = router;