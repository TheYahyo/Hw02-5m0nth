import React, { useState, useEffect } from 'react';

function Home() {
    const [name, setName] = useState('');
    const [names, setNames] = useState(() => {
 
        const savedNames = localStorage.getItem('names');
        return savedNames ? JSON.parse(savedNames) : [];
    });

    useEffect(() => {
        localStorage.setItem('names', JSON.stringify(names));
    }, [names]);

    const addName = () => {
        if (name.trim()) {
            setNames([...names, name]);
            setName('');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="write the name" 
            />
            <button onClick={addName}>add name</button>
            <ul>
                    {
                        names.map((name, index) => (
                        <li key={index}><br/>{name}</li>
                    ))}
            </ul>
        </div>
    );
}

export default Home;


// import { useState, useEffect } from "react"
// import axios from 'axios';

// function Home () {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         axios('https://jsonplaceholder.typicode.com/users')
//             .then(({ data }) => {
//                 setUsers(data)
//             })
//     }, [])

        
//     return (
//         <div>
//             <h1>Home</h1>
//             {
//                 users.map(item => {
//                     return <h1 key={item.id}>{item.name}</h1>
//                 })
//             }
//         </div>
//     )
// }

// export default Home;