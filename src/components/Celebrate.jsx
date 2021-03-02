import React from 'react';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

export default function Celebrate() {
  const handleClick = () => {
    confetti();
  };
  return (
    <div className='container'>
      <button onClick={handleClick}>Click to Celebrate!</button>
    </div>
  );
}
