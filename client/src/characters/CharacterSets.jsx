export default function CharacterSets({
  artifactSets,
  allSets,
  selectorVisible,
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

  const options = allSets.map(as => {
    return <option key={as.id}>{as.name}</option>;
  });

  const newSetArea = selectorVisible ? (
    <SetSelect
      options={options}
      handleSave={handleSave}
      handleCancel={handleCancel}
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

function SetSelect({ options, handleSave, handleCancel }) {
  return (
    <div className="character-new-as-form">
      <select className="character-new-as-select">{options}</select>
      <div className="add-character-as-controls">
        <button className="btn" onClick={handleSave}>
          Save
        </button>
        <button className="btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
