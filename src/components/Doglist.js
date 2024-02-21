import React, { useEffect, useState } from 'react';

const Doglist = () => {
    const [dogs, setDogs] = useState([]);

    const getDogs = async () => {
      try {
          const response = await fetch("https://dog.ceo/api/breeds/list/all");
          if (!response.ok) {
              throw new Error('Failed to fetch dogs');
          }
          const data = await response.json();
          // Extract the list of dog breeds from the response
          const breeds = Object.keys(data.message);
          // Create an array of dog objects with name and image properties
          const dogsData = breeds.map((breed, index) => ({
              name: breed,
              // You can use a placeholder image or fetch dog images from another endpoint
              image: `https://via.placeholder.com/150/000000/FFFFFF/?text=${breed}`, 
              // Example placeholder image URL
          }));
          setDogs(dogsData);
      } catch (error) {
          console.error('Error fetching dogs:', error);
      }
  }

    useEffect(() => {
        getDogs();
    }, []);

    return (
        <div className="container">
            {dogs.map((dog, index) => (
                <div className="card_item" key={index}>
                    <div className="card_inner">
                        {/* Assuming there is an image property for each dog */}
                        <img src={dog.image} alt={dog.name} />
                        <div className="dogName">{dog.name}</div>
                        {/* You can add more details based on the API response */}
                        {/* For example: dog.breed, dog.temperament, etc. */}
                        <button className="seeMore">See More</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Doglist;
