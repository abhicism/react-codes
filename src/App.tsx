import {useState} from 'react';

function App() {
    //state variable to track login status 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //function to toggle login/logout state
    function toggleLogin() {
        setIsLoggedIn(!isLoggedIn);
    }
    return (
        <div>
            <h1>Welcome to My React App</h1>
            <p>{isLoggedIn ? 'You are logged in.' : 'You are logged out.'}</p>
            <button onClick={toggleLogin}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

/* 
<button onClick={toggleLogin}> creates a button ,
onclick attribute is used to specify the function to be called when the button is clicked.

{isLoggedIn ? "Logout" : "Login"}  
This is a ternary operator inside JSX. 

{isLoggedIn ? "You are logged in." : "You are logged out."}


*/


export default App;