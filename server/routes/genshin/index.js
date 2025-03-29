const router = require('express').Router();
const characters = require('./characters');
const artifacts = require('./artifacts');

router.use('/characters', characters);
router.use('/artifacts', artifacts);

module.exports = router;
