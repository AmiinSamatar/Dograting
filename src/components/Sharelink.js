import React from 'react';

function ShareLink({ dog }) {
  const shareLink = `https://yourapp.com/dogs/${dog.id}`;

  return (
    <div>
      <h1>Share Link Screen</h1>
      <a href={shareLink}>Share {dog.name}'s Profile</a>
    </div>
  );
}

export default ShareLink ;