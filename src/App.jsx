import { useRef } from "react";


const App = () => {

  let myHeadline = useRef();

  myHeadline.current.innerText = "Hello World";


  return (
    <div>
      <h1 ref={myHeadline}></h1>
    </div>
  );
};

export default App;