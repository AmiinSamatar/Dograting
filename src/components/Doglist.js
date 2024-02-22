import React, { useEffect, useState } from 'react';

const DogList = () => {
    const [dogs, setDogs] = useState([]);
    const [criteria, setCriteria] = useState({
        state: '',
        minWeight: '',
        maxWeight: '',
        color: '',
        minAge: '',
        maxAge: ''
    });

    useEffect(() => {
        const sampleDogs = [
            { 
                name: 'Buddy', 
                state: 'California', 
                weight: 20, 
                color: 'Brown', 
                age: 3, 
                image: 'https://img.freepik.com/free-photo/cute-shepherd-dog-posing-isolated-white-background_155003-46179.jpg?t=st=1708605222~exp=1708608822~hmac=faf9d53b3c2ec095399518160591a9334e67f3120dbe2c58b9aba628a75c5259&w=1060', 
                shelter: 'Best Friends Animal Society', 
                city: 'Los Angeles', 
                species: 'German Shephered', 
                entryDate: '2023-02-15', 
                description: 'Friendly and energetic, loves long walks in the park.', 
                birthday: '2021-04-10', 
                did: '123456', 
                
            },
            { 
                name: 'Charlie', 
                state: 'New York', 
                weight: 25, 
                color: 'Black', 
                age: 4, 
                image: 'https://img.freepik.com/free-photo/dog-labrador-retriever-lying-grass-chews-stick_8353-6451.jpg?w=1060&t=st=1708619668~exp=1708620268~hmac=4f156868698e1192d1dcb67350c3b42006ce13d7867276330144a11f8f997e62', 
                shelter: 'Animal Haven', 
                city: 'New York City', 
                species: 'Labrador Retriever', 
                entryDate: '2023-05-20', 
                description: 'Loyal and playful, loves playing fetch.', 
                birthday: '2019-12-05', 
                did: '234567', 
               
            },
            { 
                name: 'Max', 
                state: 'California', 
                weight: 18, 
                color: 'White', 
                age: 2, 
                image: 'https://img.freepik.com/free-photo/cute-golden-retriever_144627-26658.jpg?w=740&t=st=1708619765~exp=1708620365~hmac=d243018b0b0ffe807427b018a7cd9e071f8b3f14bafc1d75f74d8f7f8a1606a4', 
                shelter: 'Los Angeles Animal Services', 
                city: 'Los Angeles', 
                species: 'Golden Retriever', 
                entryDate: '2023-01-10', 
                description: 'Gentle and affectionate, enjoys cuddles and belly rubs.', 
                birthday: '2021-07-20', 
                did: '345678', 
               
            },
            { 
                name: 'Cooper', 
                state: 'Texas', 
                weight: 22, 
                color: 'Brown', 
                age: 5, 
                image: 'https://img.freepik.com/free-photo/black-labrador-dog-taken-against-dark-backdrop_155003-8917.jpg?w=740&t=st=1708619612~exp=1708620212~hmac=75f35eaaacaf708dca4615de06269a87e694598267effd51264494e9c68825a4', 
                shelter: 'Austin Pets Alive!', 
                city: 'Austin', 
                species: 'Labrador Retriever', 
                entryDate: '2022-11-30', 
                description: 'Active and playful, loves outdoor adventures.', 
                birthday: '2017-09-12', 
                did: '456789', 
               
            },
            { 
                name: 'Bailey', 
                state: 'Texas', 
                weight: 22, 
                color: 'Brown', 
                age: 5, 
                image: 'https://img.freepik.com/free-psd/adorable-chocolate-labrador-retriever-portrait_53876-74022.jpg?w=740&t=st=1708619820~exp=1708620420~hmac=d394a52e476ece09a2e4f72271f9e4ed2affe88e2bd3173360d2f3b79a395da4', 
                shelter: 'Houston SPCA', 
                city: 'Houston', 
                species: 'Mixed ', 
                entryDate: '2022-10-20', 
                description: 'Intelligent and loyal, enjoys learning new tricks.', 
                birthday: '2017-08-25', 
                did: '567890', 
               
            },
            { 
                name: 'Daisy', 
                state: 'Texas', 
                weight: 22, 
                color: 'Brown', 
                age: 5, 
                image: 'https://img.freepik.com/free-psd/adorable-white-bulldog-puppy-portrait_53876-74044.jpg?size=626&ext=jpg&uid=R136436511&ga=GA1.1.1720393731.1706527104&semt=sph', 
                shelter: 'Dallas Animal Services', 
                city: 'Dallas', 
                species: 'Bulldog', 
                entryDate: '2023-01-05', 
                description: 'Charming and affectionate, loves snuggling on the couch.', 
                birthday: '2017-11-18', 
                did: '678901', 
               
            },
            { 
                name: 'Lucy', 
                state: 'Texas', 
                weight: 22, 
                color: 'Brown', 
                age: 5, 
                image: 'https://img.freepik.com/free-photo/e6mmqmducags9ema81vqg4lssvin112lzmqib9g8jpg_181624-57371.jpg?w=740&t=st=1708619464~exp=1708620064~hmac=6a432d7a6a4fe123d5e2b7d4eb4fd708f4eb2ed417539a218038b93d1072f7f7', 
                shelter: 'San Antonio Humane Society', 
                city: 'San Antonio', 
                species: 'Poodle', 
                entryDate: '2022-12-10', 
                description: 'Playful and intelligent, enjoys learning new tricks.', 
                birthday: '2017-10-30', 
                did: '789012', 
                color: 'Brown'
            },
            { 
                name: 'Rocky', 
                state: 'Texas', 
                weight: 22, 
                color: 'Brown', 
                age: 5, 
                image: 'https://img.freepik.com/free-photo/black-labrador-retriever-standing-green-forest_23-2148045690.jpg?size=626&ext=jpg&uid=R136436511&ga=GA1.1.1720393731.1706527104&semt=sph', 
                shelter: 'Fort Worth Animal Shelter', 
                city: 'Fort Worth', 
                species: 'Labrador Retriever', 
                entryDate: '2022-09-25', 
                description: 'Energetic and adventurous, loves outdoor hikes.', 
                birthday: '2017-06-15', 
                did: '890123', 
                
            },
            { 
                name: 'Luna', 
                state: 'Texas', 
                weight: 22, 
                color: 'Brown', 
                age: 5, 
                image: 'https://img.freepik.com/premium-photo/french-bulldog-18-months-old-sitting_191971-5291.jpg?size=626&ext=jpg&uid=R136436511&ga=GA1.1.1720393731.1706527104&semt=sph', 
                shelter: 'El Paso Animal Services', 
                city: 'El Paso', 
                species: 'French Bulldog', 
                entryDate: '2023-03-12', 
                description: 'Sweet and affectionate, loves cuddling on the couch.', 
                birthday: '2017-03-20', 
                did: '901234', 
               
            },
           
        ];
        
          
       

        // Apply filters based on criteria
        const filteredDogs = sampleDogs.filter(dog => {
            return (
                (!criteria.state || dog.state === criteria.state) &&
                (!criteria.minWeight || dog.weight >= parseInt(criteria.minWeight)) &&
                (!criteria.maxWeight || dog.weight <= parseInt(criteria.maxWeight)) &&
                (!criteria.color || dog.color.toLowerCase() === criteria.color.toLowerCase()) &&
                (!criteria.minAge || dog.age >= parseInt(criteria.minAge)) &&
                (!criteria.maxAge || dog.age <= parseInt(criteria.maxAge))
            );
        });

        setDogs(filteredDogs);
    }, [criteria]); // Update dogs when criteria changes

    const handleAction = async (dogName, actionType) => {
        // Handle actions as needed
    };

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
