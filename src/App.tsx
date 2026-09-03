//mini project : small product list



//declare the product element type
    type Product = {
        id : number;
        name: string;
        model : string;
        price: number;
    };

    function App() {
    const products: Product[] = [
        //sample product data with list of array of objects
        { id: 1, name: "Product 1", model: "Model A", price: 100 },
        { id: 2, name: "Product 2", model: "Model B", price: 200 },
        { id: 3, name: "Product 3", model: "Model C", price: 300 },
    ];

    return (
        <div>
            <h1>Product List</h1>
            <ol>
                {products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Model: {product.model}</p>
                        <p>Price: ${product.price}</p>
                        <br></br>
                    </div>
                ))}
            </ol>
        </div>
    );
}

export default App;