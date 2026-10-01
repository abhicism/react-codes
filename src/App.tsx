import { useReducer } from "react";

// Product type
type Product = {
    id: number;
    name: string;
};

// Define all possible actions
type Action =
    // Action for adding a product
    | { type: "addToCart"; product: Product }

    // Action for removing a product
    | { type: "removeFromCart"; id: number }

    // Action for clearing the entire cart
    | { type: "clearCart" };


// Reducer function
// It receives the current state and the action
function reducer(
    state: Product[],   // Current cart
    action: Action      // Instruction from dispatch()
): Product[] {

    // Check if the action is "addToCart"
    if (action.type === "addToCart") {

        // Add the new product to the existing cart
        // ...state keeps all existing products
        return [...state, action.product];
    }


    // Check if the action is "removeFromCart"
    if (action.type === "removeFromCart") {

        // Keep every product except the one whose id matches
        return state.filter(
            product => product.id !== action.id
        );
    }


    // Check if the action is "clearCart"
    if (action.type === "clearCart") {

        // Return an empty array
        // This means the cart is now empty
        return [];
    }


    // If no action matches, return the existing state
    return state;
}


function App() {

    // useReducer returns:
    // cart    → current state
    // dispatch → function used to send an action
    const [cart, dispatch] = useReducer(
        reducer,    // Reducer function
        []          // Initial cart state
    );


    // Example product
    const product = {
        id: 1,
        name: "Laptop"
    };


    return (
        <div>

            <h1>Shopping Cart</h1>


            {/* Add product to cart */}
            <button
                onClick={() =>
                    dispatch({
                        // Tell reducer what happened
                        type: "addToCart",

                        // Send the product that should be added
                        product: product
                    })
                }
            >
                Add Laptop
            </button>


            {/* Remove product from cart */}
            <button
                onClick={() =>
                    dispatch({
                        // Tell reducer to remove a product
                        type: "removeFromCart",

                        // Tell reducer which product to remove
                        id: 1
                    })
                }
            >
                Remove Laptop
            </button>


            {/* Clear the entire cart */}
            <button
                onClick={() =>
                    dispatch({
                        // Tell reducer to empty the cart
                        type: "clearCart"
                    })
                }
            >
                Clear Cart
            </button>


            {/* Display number of products in the cart */}
            <h2>
                Cart Items: {cart.length}
            </h2>

        </div>
    );
}

export default App;