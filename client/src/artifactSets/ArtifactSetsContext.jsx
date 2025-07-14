import { useContext, createContext, useReducer } from 'react';

export const ArtifactSetsContext = createContext(null);
export const ArtifactSetsDispatchContext = createContext(null);

export function useArtifactSets() {
  return useContext(ArtifactSetsContext);
}
export function useArtifactSetsDispatch() {
  return useContext(ArtifactSetsDispatchContext);
}

const initialArtifactSets = [];
export function ArtifactSetsProvider({ children }) {
  const [artifactSets, dispatch] = useReducer(
    artifactSetsReducer,
    initialArtifactSets
  );

  return (
    <ArtifactSetsContext value={artifactSets}>
      <ArtifactSetsDispatchContext value={dispatch}>
        {children}
      </ArtifactSetsDispatchContext>
    </ArtifactSetsContext>
  );
}

function artifactSetsReducer(state, action) {
  switch (action.type) {
    case 'set':
      return action.artifactSets;
    case 'add':
      return [...state, action.artifactSet];
    default:
      throw new Error('Invalid action type');
  }
}
