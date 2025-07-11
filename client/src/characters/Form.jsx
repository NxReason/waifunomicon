import { useState } from 'react';
import { Link } from 'react-router';

export default function Form({ character, save, errors }) {
  const headerText = character ? character.name : 'New character';
  const submitText = character ? 'Update' : 'Save';

  const [name, setName] = useState(character?.name ?? '');
  const handleNameInput = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    save({ name });
  };

  return (
    <div className="page">
      <h1 className="page-header">{headerText}</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name" className="text-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Raiden Ei"
            id="name"
            value={name}
            onInput={handleNameInput}
          />
          <p className="form-error">{errors.name}</p>
        </div>

        <div className="form-controls">
          <button className="btn">{submitText}</button>
          <Link className="btn" to="/">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
