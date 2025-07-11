import { useParams } from 'react-router';

export default function Character() {
  const params = useParams();

  return (
    <>
      <h1>Character page (id: {params.id})</h1>
    </>
  );
}
