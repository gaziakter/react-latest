import { useRef } from "react";


const App = () => {

  let myHeadline = useRef();

const change = ()=> {
  myHeadline.current.classList.remove('text-success');
  myHeadline.current.classList.add('text-danger');
}


  return (
    <div>
        <h1 ref={myHeadline} className="text-success">Hello Bangladesh!</h1>

     <button onClick={change}>Submit</button>
    </div>
  );
};

export default App;