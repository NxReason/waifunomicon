import { useParams } from 'react-router';
import { useArtifactSets } from './ArtifactSetsContext';

export default function ArtifactSet() {
  const params = useParams();
  const id = parseInt(params.id);
  const artifactSets = useArtifactSets();
  const artifactSet = artifactSets.find(as => as.id === id);

  return (
    <>
      <h1>
        Artifact Set (id: {id}, name: {artifactSet.name})
      </h1>
    </>
  );
}
