const Trainer = require('../models/trainer');

const getAll = async (req, res, next) => {
  try {
    const result = await Trainer.find();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const getSingle = async (req, res, next) => {
  try {
    const result = await Trainer.findById(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const createTrainer = async (req, res, next) => {
  try {
    const trainer = new Trainer({
      name: req.body.name,
      badge: req.body.badge,
      region: req.body.region
    });
    
    const result = await trainer.save();
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const updateTrainer = async (req, res, next) => {
  try {
    const trainer = {
      name: req.body.name,
      badge: req.body.badge,
      region: req.body.region
    };
    
    await Trainer.findByIdAndUpdate(req.params.id, trainer);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

const deleteTrainer = async (req, res, next) => {
  try {
    await Trainer.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getSingle, createTrainer, updateTrainer, deleteTrainer };