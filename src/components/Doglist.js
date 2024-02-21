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
    
            // Fetch a random image for each breed
            const dogsData = await Promise.all(breeds.map(async (breed) => {
                try {
                    const imageResponse = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
                    if (!imageResponse.ok) {
                        throw new Error(`Failed to fetch image for ${breed}`);
                    }
                    const imageData = await imageResponse.json();
                    return {
                        name: breed,
                        image: imageData.message
                    };
                } catch (error) {
                    console.error(`Error fetching image for ${breed}:`, error);
                    return {
                        name: breed,
                        image: null // Set image to null if fetching fails
                    };
                }
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
