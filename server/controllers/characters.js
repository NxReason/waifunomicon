import Character from '../models/Character.js';

export async function all(req, res) {
  const characters = await Character.findAll();
  res.json(characters);
}

export async function find(req, res) {
  const { id } = req.params;
  const c = await Character.findByPk(id);
  res.json(c);
}

export async function save(req, res) {
  const { name } = req.body;
  const c = await Character.create({ name });
  res.json(c);
}

export async function update(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  const c = await Character.findByPk(id);
  c.name = name;
  c.save();

  res.json(c);
}

export async function remove(req, res) {
  const { id } = req.params;

  const c = await Character.findByPk(id);
  c.destroy();

  res.json(c);
}
