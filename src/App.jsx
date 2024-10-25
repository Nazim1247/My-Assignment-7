import { useState } from "react";
import Available from "./Components/Available";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewsLater from "./Components/NewsLater";
import Players from "./Components/Players";

const App = () => {
  const [coin, setCoin] = useState(0);

  const handleAddCoin = ()=>{
    setCoin(coin + 5000000)
  }

  console.log(coin)


  return (
    <div className="max-w-[1250px]">
      <Header coin={coin}></Header>
      <Banner handleAddCoin={handleAddCoin}></Banner>
      <Available></Available>
      <Players></Players>
      <NewsLater></NewsLater>
      <Footer></Footer>
    </div>
  );
};

export default App;