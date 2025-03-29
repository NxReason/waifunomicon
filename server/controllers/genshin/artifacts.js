const { Artifact, ArtifactSet } = require('../../models').models;

async function all(req, res) {
  const artifacts = await Artifact.findAll({
    include: 'ArtifactSet',
  });
  res.json({ artifacts });
}
async function find(req, res) {
  const { id } = req.params;

  const artifact = await Artifact.findByPk(id);
  if (!artifact) {
    res.status(404).json({ err: `Artifact with id ${id} doesn't exist` });
    return;
  }
  res.json({ artifact });
}
async function create(req, res) {
  const reqChar = req.body.artifact;
  try {
    const artifact = await Artifact.create(reqChar);
    res.json({ artifact });
  } catch (err) {
    res.status(400).json({ err });
  }
}
async function update(req, res) {
  const id = req.params.id;
  const reqArtifact = req.body.artifact;
  try {
    const artifact = await Artifact.findByPk(id);
    await artifact.update({ ...reqArtifact });

    res.json({ artifact });
  } catch (err) {
    res.status(400).json({ err });
  }
}
async function remove(req, res) {
  const id = req.params.id;
  try {
    const artifact = await Artifact.destroy({
      where: { id },
    });
    res.json(artifact);
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
