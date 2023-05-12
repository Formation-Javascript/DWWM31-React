import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailPage() {
  const params = useParams(); // params.id
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/${params.id}`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [params.id]);

  return (
    <div>
      <img src={data?.image} alt={data?.name} />
      <h2>{data?.name}</h2>
    </div>
  );
}
