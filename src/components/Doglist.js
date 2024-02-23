import React, { useEffect, useState } from 'react';

const DogList = () => {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://gpbc5kdr87.execute-api.us-east-1.amazonaws.com/prod/all_dogs'); // Replace 'your-api-endpoint' with the actual endpoint URL
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setDogs(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAction = async (dogName, actionType) => {
        // Handle actions as needed
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            {dogs.map((dog, index) => (
                <div className="card_item" key={index}>
                    <div className="card_inner">
                        {/* Display dog details */}
                        <img src={dog.image} alt={dog.name} />
                        <div>Name: {dog.name}</div>
                        <div>State: {dog.state}</div>
                        <div>Weight: {dog.weight}</div>
                        <div>Color: {dog.color}</div>
                        <div>Age: {dog.age}</div>
                        <div>Shelter: {dog.shelter}</div>
                        <div>City: {dog.city}</div>
                        <div>Species: {dog.species}</div>
                        <div>Entry Date: {dog.entryDate}</div>
                        <div>Description: {dog.description}</div>
                        <div>Birthday: {dog.birthday}</div>
                        <div>DID: {dog.did}</div>

                        {/* Add action buttons */}
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