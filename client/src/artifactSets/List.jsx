import { Link } from 'react-router';

export default function List({ artifactSets }) {
  const items = artifactSets.map(ArtifactSetItem);
  return (
    <>
      <ul className="artifact-set-list">{items}</ul>
    </>
  );
}

function ArtifactSetItem({ id, name }) {
  return (
    <li key={id} className="artifact-set-item">
      <Link to={`/artifact-sets/${id}`}>{name}</Link>
    </li>
  );
}
