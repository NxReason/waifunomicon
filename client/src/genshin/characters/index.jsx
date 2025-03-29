import './characters.css';
import { useEffect, useReducer } from 'react';
import api from '../../api/gi';
import Form from './Form';
import List from './List';

export default function Characters() {
  const [state, dispatch] = useReducer(charactersReducer, initialState);

  useEffect(() => {
    api.characters.all().then(charData => {
      if (charData) {
        dispatch({ type: 'SET_CHARACTER_LIST', payload: charData });
      }
    });
  }, []);

  const setEditingId = id => {
    dispatch({
      type: 'SET_EDITING_CHARACTER',
      payload: id,
    });
  };

  const removeCharacter = async id => {
    const ok = await api.characters.remove(id);
    if (ok) {
      dispatch({
        type: 'REMOVE_CHARACTER',
        payload: id,
      });
    }
  };

  const processFormSubmit = async character => {
    if (state.editingId) await updateCharacter(character);
    else await saveCharacter(character);
  };

  const updateCharacter = async character => {
    const charData = await api.characters.update({
      ...character,
      id: state.editingId,
    });
    if (charData) {
      dispatch({
        type: 'UPDATE_CHARACTER',
        payload: charData,
      });
    }
  };

  const saveCharacter = async character => {
    const charData = await api.characters.create(character);
    if (charData) {
      dispatch({
        type: 'ADD_CHARACTER',
        payload: charData,
      });
    }
  };

  const editingName = state.editingId
    ? state.characters.find(c => c.id === state.editingId)?.name
    : '';

  return (
    <section className="page">
      <List
        characters={state.characters}
        handleUpdate={setEditingId}
        handleRemove={removeCharacter}
      />
      <Form
        saveHandler={processFormSubmit}
        resetHandler={() => setEditingId(null)}
        defaultName={editingName}
      />
    </section>
  );
}

const initialState = {
  characters: [],
  editingId: null,
};

function charactersReducer(state, action) {
  switch (action.type) {
    case 'SET_CHARACTER_LIST': {
      return { ...state, characters: action.payload };
    }
    case 'SET_EDITING_CHARACTER': {
      return { ...state, editingId: action.payload };
    }
    case 'ADD_CHARACTER': {
      return { ...state, characters: [...state.characters, action.payload] };
    }
    case 'REMOVE_CHARACTER': {
      const newEditingId =
        state.editingId === action.payload ? null : state.editingId;
      return {
        ...state,
        editingId: newEditingId,
        characters: state.characters.filter(c => c.id !== action.payload),
      };
    }
    case 'UPDATE_CHARACTER': {
      const newCharacters = state.characters.map(c => {
        if (c.id === action.payload.id) {
          return action.payload;
        }
        return c;
      });
      return { ...state, characters: newCharacters };
    }
    default: {
      console.error(`Invalid action type: ${action.type}`);
    }
  }
}
