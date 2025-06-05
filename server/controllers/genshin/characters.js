const { GICharacter } = require('../../models').models;

async function all(req, res) {
  const characters = await GICharacter.findAll({
    include: 'GILoadout',
  });
  res.json({ characters });
}

async function find(req, res) {
  const { id } = req.params;
  const character = await GICharacter.findByPk(id);
  if (!character) {
    res.status(404).json({ err: `Character with id ${id} doesn't exist` });
    return;
  }
  res.json({ character });
}

async function create(req, res) {
  const reqChar = req.body.character;
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
  find,
  create,
  update,
  remove,
};
