import { useParams, Link } from 'react-router';
import Form from './Form';

export default function FormController() {
  const params = useParams();
  const [character, save] = params.id
    ? [
        { id: 1, name: 'Raiden' },
        name => {
          console.log(`updating ${name}`);
        },
      ]
    : [
        null,
        name => {
          console.log(`saving ${name}`);
        },
      ];

  return <Form character={character} save={save} />;
}
