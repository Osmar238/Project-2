const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainer');
const { trainerValidationRules, validate } = require('../middleware/validate');

router.get('/', trainerController.getAll);
router.get('/:id', trainerController.getSingle);

router.post('/', trainerValidationRules(), validate, trainerController.createTrainer);
router.put('/:id', trainerValidationRules(), validate, trainerController.updateTrainer);

router.delete('/:id', trainerController.deleteTrainer);

module.exports = router;