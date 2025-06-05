export default function ArtifactList({ artifacts }) {
  const artItems = artifacts.map(a => {
    return (
      <li key={a.id} className="artifact-item">
        <h4 className="artifact-item-name">{a.name}</h4>
        <p className="artifact-item-desc">
          <span>{a.slot}</span>
          <span>lvl: {a.level}</span>
        </p>
      </li>
    );
  });

  return <ul className="artifact-list">{artItems}</ul>;
}
