import React from 'react';

function DogRating({ dog, onRate }) {
  const [rating, setRating] = React.useState(null);

  const handleRate = (newRating) => {
    setRating(newRating);
    onRate(dog.id, newRating);
  };

  return (
    <div>
      <h1>Dog Rating Screen</h1>
      {/* Display dog's details here */}
      <button onClick={() => handleRate('wag')}>Wag</button>
      <button onClick={() => handleRate('growl')}>Growl</button>
      <button onClick={() => handleRate('super wag')}>Super Wag</button>
    </div>
  );
}

export default DogRating;