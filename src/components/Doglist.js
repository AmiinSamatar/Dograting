import React, { useEffect, useState } from 'react';

const DogList = () => {
    const [dogs, setDogs] = useState([]);

    const getDogs = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/list/all");
            if (!response.ok) {
                throw new Error('Failed to fetch dogs');
            }
            const data = await response.json();
            const breeds = Object.keys(data.message);

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
                        image: null
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

    const handleAction = async (dogName, actionType) => {
        try {
            const response = await fetch(`/api/dogs/${actionType}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ dogName })
            });

            if (!response.ok) {
                throw new Error(`Failed to ${actionType} for ${dogName}`);
            }

            console.log(`${actionType} action performed for ${dogName}`);
        } catch (error) {
            console.error(`Error performing ${actionType} action for ${dogName}:`, error);
        }
    };

    return (
        <div className="container">
            {dogs.map((dog, index) => (
                <div className="card_item" key={index}>
                    <div className="card_inner">
                        <img src={dog.image} alt={dog.name} />
                        <div className="dogName">{dog.name}</div>
                        <button className="actionButton" onClick={() => handleAction(dog.name, 'wag')}>Wag</button>
                        <button className="actionButton" onClick={() => handleAction(dog.name, 'growl')}>Growl</button>
                        <button className="actionButton" onClick={() => handleAction(dog.name, 'superwag')}>Super Wag</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DogList;
