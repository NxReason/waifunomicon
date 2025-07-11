import { useParams, Link } from 'react-router';
import Form from './Form';
import { useState } from 'react';

export default function FormController() {
  const [errors, setErrors] = useState({});
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
          const [isValid, errors] = validate({ name });
          setErrors(errors);
          if (!isValid) {
            return;
          }

          console.log(`saving ${name}`);
        },
      ];

  return <Form character={character} save={save} errors={errors} />;
}

function validate({ name }) {
  const errors = {};
  let isValid = true;

  if (!name) {
    isValid = false;
    errors.name = `name can't be empty`;
  }

  return [isValid, errors];
}
