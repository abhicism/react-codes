import { useReducer } from "react";

// Product stored in the cart
type Product = {
    id: number;
    name: string;
    quantity: number;
};


// All possible actions
type Action =
    // Add one laptop
    | {
        type: "addToCart";
        product: Product;
    }

    // Remove one laptop
    | {
        type: "removeFromCart";
        id: number;
    }

    // Remove everything
    | {
        type: "clearCart";
    };


// Reducer
function reducer(
    state: Product[],
    action: Action
): Product[] {

    // =========================
    // ADD TO CART
    // =========================

    if (action.type === "addToCart") {

        // Check if the product already exists
        const existingProduct = state.find(
            product => product.id === action.product.id
        );

        // If product already exists
        if (existingProduct) {

            // Increase its quantity by 1
            return state.map(product =>
                product.id === action.product.id
                    ? {
                        ...product,
                        quantity: product.quantity + 1
                    }
                    : product
            );
        }

        // Product does not exist yet
        // Add it with quantity = 1
        return [
            ...state,
            {
                ...action.product,
                quantity: 1
            }
        ];
    }


    // =========================
    // REMOVE FROM CART
    // =========================

    if (action.type === "removeFromCart") {

        return state
            .map(product =>
                product.id === action.id

                    // Decrease quantity by 1
                    ? {
                        ...product,
                        quantity: product.quantity - 1
                    }

                    // Keep other products unchanged
                    : product
            )

            // Remove the product completely
            // if quantity becomes 0
            .filter(product => product.quantity > 0);
    }


    // =========================
    // CLEAR CART
    // =========================

    if (action.type === "clearCart") {

        // Empty the entire cart
        return [];
    }


    // Return current state
    return state;
}


function App() {

    // cart = current cart state
    // dispatch = sends an action to reducer
    const [cart, dispatch] = useReducer(
        reducer,
        []
    );


    return (
        <div>

            <h1>Shopping Cart</h1>


            {/* =========================
                ADD LAPTOP
            ========================= */}

            <button
                onClick={() =>
                    dispatch({
                        type: "addToCart",

                        product: {
                            id: 1,
                            name: "Laptop",
                            quantity: 1
                        }
                    })
                }
            >
                Add Laptop
            </button>


            {/* =========================
                REMOVE LAPTOP
            ========================= */}

            <button
                onClick={() =>
                    dispatch({
                        type: "removeFromCart",
                        id: 1
                    })
                }
            >
                Remove Laptop
            </button>


            {/* =========================
                DISPLAY CART
            ========================= */}

            {cart.map(product => (
                <div key={product.id}>

                    <h2>
                        {product.name}
                    </h2>

                    <p>
                        Quantity: {product.quantity}
                    </p>

                </div>
            ))}


            {/* =========================
                CLEAR CART
            ========================= */}

            <button
                onClick={() =>
                    dispatch({
                        type: "clearCart"
                    })
                }
            >
                Clear Cart
            </button>

        </div>
    );
}

export default App;