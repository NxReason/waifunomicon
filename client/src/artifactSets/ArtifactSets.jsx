import { Link } from 'react-router';
import './ArtifactSets.css';
import List from './List';
import { useArtifactSets } from './ArtifactSetsContext';

export default function ArtifactSets() {
  const artifactSets = useArtifactSets();
  return (
    <>
      <Link className="btn" to="/artifact-sets/new">
        New artifact set
      </Link>
      <List artifactSets={artifactSets} />
    </>
  );
}
