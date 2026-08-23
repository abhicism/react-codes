import {useState} from 'react';

function App() {
    const [name, setName] = useState('');

    function handlechange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h1>Hello {name}</h1>
            <input type="text" 
            placeholder="Enter your name"
             onChange={handlechange} />
        </div>
    );
}

export default App;