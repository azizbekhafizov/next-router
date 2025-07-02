'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1> Xatolik yuz berdi</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Qayta urinish</button>
    </div>
  );
}
