import { useRef } from "react";


const App = () => {

  let number = useRef(0);

const change = ()=> {
  number.current++;
  console.log(number.current);
}


  return (
    <div>

     <button onClick={change}>Submit</button>
    </div>
  );
};

export default App;