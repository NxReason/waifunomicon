import { useEffect, useState } from 'react';
import api from '../../api/genshin';

export default function Loadout() {
  const [isFormOpen, setFormOpen] = useState(true);
  const [artifacts, setArtifacts] = useState([]);

  const handleFormToggle = () => {
    setFormOpen(!isFormOpen);
  };

  useEffect(() => {
    api.artifacts.all().then(as => {
      if (as) {
        setArtifacts(as);
      }
    });
  }, []);

  return (
    <div>
      <h3>Loadouts:</h3>
      <button onClick={handleFormToggle}>
        {isFormOpen ? 'Cancel' : 'Add'}
      </button>
      {isFormOpen && <LoadoutForm artifacts={artifacts} />}
    </div>
  );
}

function LoadoutForm({ artifacts }) {
  const handleSubmit = e => {
    e.preventDefault();
  };

  const artifactsSorted = {
    Flower: [],
    Feather: [],
    Sands: [],
    Goblet: [],
    Mask: [],
  };
  artifacts.forEach(a => {
    switch (a.slot) {
      case 'Flower':
        artifactsSorted.Flower.push(<option>{a.name}</option>);
        break;
      case 'Feather':
        artifactsSorted.Feather.push(<option>{a.name}</option>);
        break;
      case 'Sands':
        artifactsSorted.Sands.push(<option>{a.name}</option>);
        break;
      case 'Goblet':
        artifactsSorted.Goblet.push(<option>{a.name}</option>);
        break;
      case 'Mask':
        artifactsSorted.Mask.push(<option>{a.name}</option>);
        break;
      default:
        console.error(`Unknow artifact type: ${a.slot}`);
        break;
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Flower</p>
        <select>{...artifactsSorted.Flower}</select>
      </div>
      <div>
        <p>Feather</p>
        <select>{...artifactsSorted.Feather}</select>
      </div>
      <div>
        <p>Sands</p>
        <select>{...artifactsSorted.Sands}</select>
      </div>
      <div>
        <p>Goblet</p>
        <select>{...artifactsSorted.Goblet}</select>
      </div>
      <div>
        <p>Mask</p>
        <select>{...artifactsSorted.Mask}</select>
      </div>
    </form>
  );
}
