import './artifacts.css';
import { useEffect, useReducer } from 'react';
import api from '../../api/genshin';
import List from './List';

export default function Artifacts() {
  const [artifacts, dispatch] = useReducer(artifactReducer, []);

  useEffect(() => {
    api.artifacts.all().then(arts => {
      if (arts) {
        dispatch({
          type: 'SET_ARTIFACTS',
          artifacts: arts,
        });
      }
    });
  }, []);

  return (
    <div>
      <List artifacts={artifacts} />
    </div>
  );
}

function artifactReducer(artifacts, action) {
  switch (action.type) {
    case 'SET_ARTIFACTS': {
      return action.artifacts;
    }
  }
}
