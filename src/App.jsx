import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {

  const ItemObj = {
    name: 'Gazi Akter',
    age: 37,
    city: 'Cumilla'
  }
  return (
    <div>
      <Header/>
      <Hero item={ItemObj}/>
      <Footer/>
    </div>
  );
};

export default App;