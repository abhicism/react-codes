import {memo, useState} from 'react';
//type childprops = React.PropsWithChildren
type childprops = {
    name : string 
}

const Child =
memo(function Child({name}:childprops){
    console.log("child render")
    return <h2> hell0  {name}</h2> ;
})

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>hello</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <Child name="abhishek" />
    </>
  );
}

export default App;