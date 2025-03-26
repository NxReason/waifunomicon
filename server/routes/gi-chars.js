const router = require('express').Router();
const { GICharacter } = require('../models').models;

router.get('/', async (req, res) => {
  const characters = await GICharacter.findAll();
  res.json({ characters });
});

module.exports = router;
