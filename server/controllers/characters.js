import { models } from '../models/db.js';
const { Character, ArtifactSet } = models;

export async function all(req, res) {
  const characters = await Character.findAll();
  res.json(characters);
}

export async function find(req, res) {
  const { id } = req.params;
  const c = await Character.findByPk(id, {
    include: {
      model: ArtifactSet,
      as: 'artifactSets',
      through: { attributes: [] },
    },
  });
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
