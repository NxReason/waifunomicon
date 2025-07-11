import './Characters.css';
import List from './List';

const initialCharacters = [
  { id: 1, Name: 'Raiden' },
  { id: 2, Name: 'Skirk' },
  { id: 3, Name: 'Yelan' },
  { id: 4, Name: 'Mavuika' },
  { id: 5, Name: 'Arle' },
  { id: 6, Name: 'Ayaka' },
  { id: 7, Name: 'Jean' },
];

export default function Characters() {
  return (
    <div className="page characters-page">
      <List characters={initialCharacters} />
    </div>
  );
}
