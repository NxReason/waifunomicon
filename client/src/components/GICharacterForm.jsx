import { useEffect, useState } from 'react';

function GICharacterForm({ saveHandler, defaultName }) {
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

  return (
    <form className="gi-character-form">
      <input
        type="text"
        placeholder="name"
        value={name}
        onInput={handleInput}
      />
      <button onClick={handleSave} className="btn-character-new">
        Save
      </button>
    </form>
  );
}

export default GICharacterForm;
