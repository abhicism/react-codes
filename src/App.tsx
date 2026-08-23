// Main component for the application.
function App() {
  function handlechange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handlechange} />
    </div>
  );
}

export default App;
