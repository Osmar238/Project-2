const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemon');
const { pokemonValidationRules, validate } = require('../middleware/validate');

router.get('/', pokemonController.getAll);
router.get('/:id', pokemonController.getSingle);

router.post('/', pokemonValidationRules(), validate, pokemonController.createPokemon);
router.put('/:id', pokemonValidationRules(), validate, pokemonController.updatePokemon);

router.delete('/:id', pokemonController.deletePokemon);

module.exports = router;