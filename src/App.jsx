import { useState } from "react";
import Available from "./Components/Available";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewsLater from "./Components/NewsLater";
import Players from "./Components/Players";

const App = () => {
  const [coin, setCoin] = useState(0);
  const [choosePlayer, setChoosePlayer] = useState([]);

  const handleAddChoosePlayer = (player)=>{
    const isExist = choosePlayer.find(p => p.playerId === player.playerId);
    if(!isExist){
      const newPlayer = [...choosePlayer, player];
    setChoosePlayer(newPlayer);
    }else{
      alert('already selected')
    }
    
  }

  console.log(choosePlayer)
  

  const handleAddCoin = ()=>{
    setCoin(coin + 5000000)
  }



  return (
    <div className="max-w-[1250px]">
      <Header coin={coin}></Header>
      <Banner handleAddCoin={handleAddCoin}></Banner>
      <Available choosePlayer={choosePlayer}></Available>
      <Players handleAddChoosePlayer={handleAddChoosePlayer}></Players>
      
      <NewsLater></NewsLater>
      <Footer></Footer>
    </div>
  );
};

export default App;