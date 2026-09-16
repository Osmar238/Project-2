const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  primaryType: { type: String, required: true },
  secondaryType: { type: String, required: false }, // No todos tienen dos tipos
  weakness: { type: String, required: true },
  hp: { type: Number, required: true },
  attack: { type: Number, required: true },
  defense: { type: Number, required: true }
});

module.exports = mongoose.model('Pokemon', pokemonSchema);