import { useRef } from "react";


const App = () => {

  let myHeadline = useRef();

  myHeadline.current.innerHTML = "<ul><li>Dhaka</li><li>Cumila</li></ul>";


  return (
    <div>
      <h1 ref={myHeadline}></h1>
    </div>
  );
};

export default App;