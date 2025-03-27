const { GICharacter } = require('../models').models;

async function all(req, res) {
  const characters = await GICharacter.findAll();
  res.json({ characters });
}

async function create(req, res) {
  const reqChar = req.body.character;
  console.log(reqChar);
  try {
    const character = await GICharacter.create(reqChar);
    res.json({ character });
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function update(req, res) {
  const id = req.params.id;
  const reqChar = req.body.character;
  try {
    const character = await GICharacter.findByPk(id);
    await character.update({ ...reqChar });

    res.json({ character });
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function remove(req, res) {
  const id = req.params.id;
  try {
    const character = await GICharacter.destroy({
      where: { id },
    });
    res.json(character);
  } catch (err) {
    res.status(400).json({ err });
  }
}

module.exports = {
  all,
  create,
  update,
  remove,
};
