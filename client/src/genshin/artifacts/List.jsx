export default function ArtifactList({ artifacts }) {
  const artItems = artifacts.map(a => {
    return (
      <li key={a.id}>
        {a.name} [level: {a.level} / slot: {a.slot}]
      </li>
    );
  });

  return <ul>{artItems}</ul>;
}
