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


  const handleRemove = (name)=>{
    const removePlayer = choosePlayer.filter(p => p.name !== name);
    setChoosePlayer(removePlayer);
  }

  const handleAddChoosePlayer = (player)=>{
    const isExist = choosePlayer.find(p => p.playerId === player.playerId);
    if(isExist || coin < player.biddingPrice){
      alert('already selected')
    }else{
      const newPlayer = [...choosePlayer, player];
    setChoosePlayer(newPlayer);
    handleRemoveCoin(player.biddingPrice)
    }
  }
  
  const handleRemoveCoin = (price)=>{
    setCoin(coin - price)
  }

  const handleAddCoin = ()=>{
    setCoin(coin + 5000000)
    
  }



  return (
    <div className="max-w-[1250px]">
      <Header coin={coin}></Header>
      <Banner handleAddCoin={handleAddCoin}></Banner>
      <Available handleRemove={handleRemove} choosePlayer={choosePlayer}></Available>
      <Players handleAddChoosePlayer={handleAddChoosePlayer}></Players>
      
      <NewsLater></NewsLater>
      <Footer></Footer>
    </div>
  );
};

export default App;