import Available from "./Components/Available";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Players from "./Components/Players";

const App = () => {
  return (
    <div className="max-w-[1250px]">
      <Header></Header>
      <Banner></Banner>
      <Available></Available>
      <Players></Players>
      <Footer></Footer>
    </div>
  );
};

export default App;