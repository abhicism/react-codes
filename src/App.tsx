// Main component for the application.
function App() {
  function handlechange() {
    console.log("clicked");
  }
  return (
    <div>
    <input type ="text" onChange={handlechange} />
    </div>
  );
}

export default App;
