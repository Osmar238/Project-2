const Pokemon = require('../models/pokemon');

const getAll = async (req, res, next) => {
  try {
    const result = await Pokemon.find();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const getSingle = async (req, res, next) => {
  try {
    const result = await Pokemon.findById(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const createPokemon = async (req, res, next) => {
  try {
    const pokemon = new Pokemon({
      name: req.body.name,
      primaryType: req.body.primaryType,
      secondaryType: req.body.secondaryType,
      weakness: req.body.weakness,
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense
    });
    
    const result = await pokemon.save();
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const updatePokemon = async (req, res, next) => {
  try {
    const pokemon = {
      name: req.body.name,
      primaryType: req.body.primaryType,
      secondaryType: req.body.secondaryType,
      weakness: req.body.weakness,
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense
    };
    
    await Pokemon.findByIdAndUpdate(req.params.id, pokemon);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

const deletePokemon = async (req, res, next) => {
  try {
    await Pokemon.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getSingle, createPokemon, updatePokemon, deletePokemon };