import { useEffect, useState } from 'react';

function GICharacterForm({ saveHandler, resetHandler, defaultName }) {
  const [name, setName] = useState(defaultName);

  useEffect(() => {
    setName(defaultName);
  }, [defaultName]);

  const handleInput = e => {
    setName(e.target.value);
  };

  const handleSave = e => {
    e.preventDefault();
    saveHandler({ name });
    setName('');
  };

  const handleReset = e => {
    e.preventDefault();
    resetHandler();
    setName('');
  };

  return (
    <form className="gi-character-form">
      <input
        type="text"
        placeholder="name"
        value={name}
        className="name-input"
        onInput={handleInput}
      />
      <button onClick={handleSave} className="btn-character-new">
        Save
      </button>
      <button onClick={handleReset} className="btn-character-reset">
        Reset
      </button>
    </form>
  );
}

export default GICharacterForm;
