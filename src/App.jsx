import { useState } from "react";
import Available from "./Components/Available";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Players from "./Components/Players";
import Player from "./Components/Player";

const App = () => {
  const [coin, setCoin] = useState(0);
  const [choosePlayer, setChoosePlayer] = useState([]);
  const [active, setActive] = useState('available');
  const [isActive, setIsActive] = useState({
    card: true,
    status: 'active'
  });

  const handleAvailable = (status)=>{
    if(status === 'card'){
      setIsActive({
        card: true,
        status: 'active'
      })
    }
    else{
      setIsActive({
        card: false,
        status: 'about'
      })
    }
  }
 
  const addActive = (p)=>{
    console.log(active)
    if(p === 'available'){
      setActive(p)
    }else{
      setActive('selected')
    }
    
  }

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
      <Available addActive={addActive} isActive={isActive} handleAvailable={handleAvailable} handleRemove={handleRemove} choosePlayer={choosePlayer}></Available>

      {isActive.card?<Players handleAddChoosePlayer={handleAddChoosePlayer}></Players>:<Player handleRemove={handleRemove} choosePlayer={choosePlayer}></Player>}
      
      <Footer></Footer>
    </div>
  );
};

export default App;