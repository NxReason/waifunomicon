import { models } from '../models/db.js';
const { ArtifactSet } = models;

export async function all(req, res) {
  const as = await ArtifactSet.findAll();

  res.json(as);
}

export async function find(req, res) {
  const { id } = req.params;

  const as = await ArtifactSet.findByPk(id);

  res.json(as);
}

export async function save(req, res) {
  const { name } = req.body;

  const as = await ArtifactSet.create({ name });

  res.json(as);
}

export async function update(req, res) {
  const { id } = req.params;
  const as = await ArtifactSet.findByPk(id);

  if (as) {
    const { name } = req.body;
    as.name = name;
    as.save();
  }

  res.json(as);
}

export async function remove(req, res) {
  const { id } = req.params;

  const as = await ArtifactSet.findByPk(id);

  if (as) {
    as.destroy();
  }

  res.json(as);
}
