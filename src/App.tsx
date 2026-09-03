// Define TypeScript type for the props of the ProductCard component
type ProductProps = {
    name: string;  // Name of the product
    price: number; // Price of the product
};

// Functional component to display individual product details
function ProductCard({
    name,
    price
}: ProductProps) {  //productProps is type annotation for the props object
    return (
        <div>
            {/* Display the product name inside an h2 tag */}
            <h2>{name}</h2>
            {/* Display the product price with the Rupee symbol */}
            <p>₹{price}</p>
        </div>
    );
}

// Define TypeScript type for the structure of each product item in the array
type Product = {
    id: number;    // Unique identifier for the product
    name: string;  // Name of the product
    price: number; // Price of the product
};

// Main application component
function App() {
    // List of product items to display
    const products: Product[] = [
        {
            id: 1,
            name: "Laptop",
            price: 50000
        },
        {
            id: 2,
            name: "Phone",
            price: 25000
        },
        {
            id: 3,
            name: "Headphones",
            price: 3000
        }
    ];

    return (
        <div>
            {/* Page heading */}
            <h1>Products</h1>

            {/* Map over the products array to dynamically render a ProductCard for each product */}
            {products.map((product, index) => (
                <div key={product.id}>
                    <ProductCard
                        name={product.name}
                        price={product.price}
                    />
                    {index < products.length - 1 && <hr />}
                </div>
            ))}
        </div>
    );
}

export default App;
