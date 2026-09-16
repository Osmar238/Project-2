const express = require('express');
const router = express.Router();

router.use('/pokemon', require('./pokemon'));
router.use('/trainers', require('./trainer'));

module.exports = router;
