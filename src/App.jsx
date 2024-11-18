import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {

  const handleClick = () =>{
    alert('Hello Bangladesh');
  }

  return (
    <div>
      <Header/>
      <Hero click={handleClick}/>
      <Footer/>
    </div>
  );
};

export default App;