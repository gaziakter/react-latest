import { useRef } from "react";


const App = () => {

  let firstName = useRef();
  let lastName = useRef();

const change = ()=> {
  let fName = firstName.current.value;
  let lName = lastName.current.value;

  
  alert(fName+' '+lName);
}


  return (
    <div>
     <input ref={firstName} type="text" placeholder="First Name" />
     <input ref={lastName} type="text" placeholder="Last Name" />

     <button onClick={change}>Submit</button>
    </div>
  );
};

export default App;