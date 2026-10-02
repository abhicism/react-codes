import {
    createContext,
    useContext,
    useReducer
} from "react";


// ======================================================
// 1. Product Type
// ======================================================

type Product = {
    id: number;
    name: string;
    price: number;
};


// ======================================================
// 2. Action Type
// ======================================================

type Action =
    | {
          type: "addToCart";
          product: Product;
      }
    | {
          type: "removeFromCart";
          id: number;
      };


// ======================================================
// 3. Cart Context Type
// ======================================================

type CartContextType = {
    cart: Product[];
    dispatch: React.Dispatch<Action>;
};


// ======================================================
// 4. Create Cart Context
// ======================================================

const CartContext = createContext<CartContextType | null>(null);


// ======================================================
// 5. Reducer
// ======================================================

function cartReducer(
    state: Product[],
    action: Action
) {

    // Add product to cart
    if (action.type === "addToCart") {

        return [
            ...state,
            action.product
        ];
    }


    // Remove product from cart
    if (action.type === "removeFromCart") {

        return state.filter(
            product => product.id !== action.id
        );
    }


    return state;
}


// ======================================================
// 6. CartProvider
// ======================================================

function CartProvider({
    children
}: {
    children: React.ReactNode;
}) {

    const [cart, dispatch] = useReducer(
        cartReducer,
        []
    );


    return (
        <CartContext.Provider
            value={{
                cart,
                dispatch
            }}
        >
            {children}
        </CartContext.Provider>
    );
}


// ======================================================
// 7. ProductList Component
// ======================================================

function ProductList() {

    const context = useContext(CartContext);

    if (!context) {
        return <p>CartContext is not available</p>;
    }

    const { dispatch } = context;


    const products: Product[] = [
        {
            id: 1,
            name: "Laptop",
            price: 50000
        },
        {
            id: 2,
            name: "Mouse",
            price: 1000
        },
        {
            id: 3,
            name: "Keyboard",
            price: 2000
        }
    ];


    return (
        <div>

            <h2>Products</h2>

            {products.map(product => (

                <div key={product.id}>

                    <span>
                        {product.name} - ₹{product.price}
                    </span>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "addToCart",
                                product
                            })
                        }
                    >
                        Add to Cart
                    </button>

                </div>

            ))}

        </div>
    );
}


// ======================================================
// 8. Cart Component
// ======================================================

function Cart() {

    const context = useContext(CartContext);

    if (!context) {
        return <p>CartContext is not available</p>;
    }

    const { cart, dispatch } = context;


    return (
        <div>

            <h2>Cart</h2>

            {cart.length === 0 && (
                <p>Your cart is empty</p>
            )}


            {cart.map(product => (

                <div key={product.id}>

                    <span>
                        {product.name} - ₹{product.price}
                    </span>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "removeFromCart",
                                id: product.id
                            })
                        }
                    >
                        Remove
                    </button>

                </div>

            ))}

        </div>
    );
}


// ======================================================
// 9. App Component
// ======================================================

function App() {

    return (

        <CartProvider>

            <h1>Shopping Cart</h1>

            <ProductList />

            <hr />

            <Cart />

        </CartProvider>

    );
}


export default App;