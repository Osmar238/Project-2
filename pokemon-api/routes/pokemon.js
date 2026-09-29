const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemon');
const { pokemonValidationRules, validate } = require('../middleware/validate');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', isAuthenticated, pokemonController.getAll);
router.get('/:id', isAuthenticated, pokemonController.getSingle);

router.post('/', isAuthenticated, pokemonValidationRules(), validate, pokemonController.createPokemon);
router.put('/:id', isAuthenticated, pokemonValidationRules(), validate, pokemonController.updatePokemon);

router.delete('/:id', isAuthenticated, pokemonController.deletePokemon);

module.exports = router;