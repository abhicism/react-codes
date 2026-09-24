import { useRef } from "react"; 
// Import useRef hook from React

function App() {

    const boxRef = useRef<HTMLDivElement>(null); 
    // Create a reference to the box div element

    function handleMeasure() {
        // Function to measure the box dimensions

        const rectangle =
            boxRef.current?.getBoundingClientRect(); 
        // Get the bounding rectangle of the box

        console.log("Width:", rectangle?.width); 
        // Log the width of the box
        console.log("Height:", rectangle?.height); 
        // Log the height of the box
    }

    return (
        <div>
            {/* Container div */}

            <div
                ref={boxRef} 
                // Attach the reference to this div
                style={{
                    width: "300px",
                    height: "150px",
                    border: "2px solid black"
                }}
            >
                Box
                {/* The box element */}
            </div>

            <button onClick={handleMeasure}>
                {/* Button triggers handleMeasure */}
                Measure Box
            </button>

        </div>
    );
}

export default App; 
// Export the component
