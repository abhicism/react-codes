// Import tools needed for routing and navigation
import {
    BrowserRouter, // Enables routing in the browser
    Routes,        // Holds all route definitions
    Route,         // Connects a URL path to a component
    Link           // Navigates between pages without reloading
} from "react-router";


// Import page components
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
    return (

        // Wrap the application to enable routing
        <BrowserRouter>

            {/* Navigation links displayed on the page */}
            <nav>
                <Link to="/">Home</Link>{" | "}
                <Link to="/about">About</Link>{" | "}
                <Link to="/products">Products</Link>
            </nav>

            {/* React Router displays the component
                matching the current URL */}
            <Routes>

                {/* Show Home when the URL is "/" */}
                <Route
                    path="/"
                    element={<Home />}
                />

                {/* Show About when the URL is "/about" */}
                <Route
                    path="/about"
                    element={<About />}
                />

                {/* Show Products when the URL is "/products" */}
                <Route
                    path="/products"
                    element={<Products />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;