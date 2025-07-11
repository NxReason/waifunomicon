import { useParams, Link, useNavigate } from 'react-router';
import Form from './Form';
import { useState } from 'react';
import { useCharacters, useCharactersDispatch } from './CharacterContext';
import { save, update } from '../api/characters.js';

export default function FormController() {
  const navigate = useNavigate();
  const params = useParams();
  const [errors, setErrors] = useState({});
  const characters = useCharacters();
  const dispatch = useCharactersDispatch();

  const id = parseInt(params.id);
  const character = characters.find(c => c.id === id);

  const saveHandler = async ({ name }) => {
    const [isValid, errors] = validate({ name });
    if (!isValid) {
      setErrors(errors);
      return;
    }

    const request = () => (character ? update(id, { name }) : save({ name }));
    const { ok, data } = await request();

    if (ok) {
      const action = {
        type: character ? 'updated' : 'added',
        character: data,
      };
      dispatch(action);

      navigate('/');
    }
  };

  return <Form character={character} save={saveHandler} errors={errors} />;
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
