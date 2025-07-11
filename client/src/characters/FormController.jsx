import { useParams, Link, useNavigate } from 'react-router';
import Form from './Form';
import { useState } from 'react';
import { useCharacters, useCharactersDispatch } from './CharacterContext';

export default function FormController() {
  const navigate = useNavigate();
  const params = useParams();
  const [errors, setErrors] = useState({});
  const characters = useCharacters();
  const dispatch = useCharactersDispatch();

  const id = parseInt(params.id);
  const character = characters.find(c => c.id === id);

  const handleCreate = ({ name }) => {
    const [isValid, errors] = validate({ name });
    if (!isValid) {
      setErrors(errors);
      return;
    }

    dispatch({
      type: 'added',
      character: { id: Math.round(Math.random() * 1000000), name },
    });
    navigate('/');
  };
  const handleUpdate = ({ name }) => {
    const [isValid, errors] = validate({ name });
    if (!isValid) {
      setErrors(errors);
      return;
    }

    dispatch({
      type: 'updated',
      character: { id, name },
    });
    navigate('/');
  };

  const save = character ? handleUpdate : handleCreate;

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
