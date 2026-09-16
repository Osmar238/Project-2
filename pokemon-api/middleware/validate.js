const { check, validationResult } = require('express-validator');

const pokemonValidationRules = () => {
  return [
    check('name', 'Pokemon name is required').not().isEmpty(),
    check('primaryType', 'Primary type is required').not().isEmpty(),
    check('weakness', 'Weakness is required').not().isEmpty(),
    check('hp', 'HP must be a numeric value').isNumeric(),
    check('attack', 'Attack must be a numeric value').isNumeric(),
    check('defense', 'Defense must be a numeric value').isNumeric()
  ];
};

// NUEVAS REGLAS PARA ENTRENADORES
const trainerValidationRules = () => {
  return [
    check('name', 'Trainer name is required').not().isEmpty(),
    check('badge', 'Badge is required').not().isEmpty(),
    check('region', 'Region is required').not().isEmpty()
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.path]: err.msg }));

  return res.status(400).json({
    errors: extractedErrors,
  });
};

module.exports = {
  pokemonValidationRules,
  trainerValidationRules,
  validate
};