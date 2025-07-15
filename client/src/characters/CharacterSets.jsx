export default function CharacterSets({
  artifactSets,
  allSets,
  selectedSet,
  setNewSet,
  selectorVisible,
  addingSet,
  handleAdd,
  handleSave,
  handleCancel,
}) {
  const items = artifactSets.map(as => {
    return (
      <li key={as.id} className="character-as-item">
        {as.name}
      </li>
    );
  });

  const unusedSets = allSets.filter(
    as => !artifactSets.map(a => a.id).includes(as.id)
  );

  if (!selectedSet && unusedSets.length > 0) {
    setNewSet(unusedSets[0].id);
  }

  const options = unusedSets.map(as => {
    return (
      <option key={as.id} value={as.id}>
        {as.name}
      </option>
    );
  });

  const newSetArea = selectorVisible ? (
    <SetSelect
      options={options}
      selectedSet={selectedSet}
      setNewSet={setNewSet}
      handleSave={handleSave}
      handleCancel={handleCancel}
      addingSet={addingSet}
    />
  ) : (
    <span className="btn btn-add-character-as" onClick={handleAdd}>
      +
    </span>
  );

  return (
    <>
      <h3>Artifact sets</h3>
      <ul className="character-as-list">{items}</ul>
      {newSetArea}
    </>
  );
}

function SetSelect({
  options,
  selectedSet,
  setNewSet,
  handleSave,
  handleCancel,
  addingSet,
}) {
  const handleChange = e => {
    setNewSet(e.target.value);
  };
  return (
    <div className="character-new-as-form">
      <select
        className="character-new-as-select"
        value={selectedSet}
        onChange={handleChange}
      >
        {options}
      </select>
      <div className="add-character-as-controls">
        <button className="btn" onClick={handleSave} disabled={addingSet}>
          Save
        </button>
        <button className="btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
