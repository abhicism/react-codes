import { useRef } from "react";

function App() {
  const bottomRef = useRef<HTMLDivElement>(null);

  function scrollToBottom() {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <button onClick={scrollToBottom}>Scroll to Bottom</button>

      <div style={{ height: "1500px" }}>
        <p>Lots of content...</p>
        <p>Lots of content...</p>
        <p>Lots of content...</p>
        <p>Lots of content...</p>
        <p>Lots of content...</p>
      </div>

      <div ref={bottomRef}>Bottom of the page</div>
    </div>
  );
}

export default App;
