import { useEffect } from "react";
import { useState } from "react";


const Players = ({handleAddChoosePlayer}) => {
    const [players, setPlayers] = useState([]);
    // const {playerId, name, country, image} = players;

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    return (
        <div className="w-11/12 mx-auto grid md:grid-cols-3 gap-6 mb-56">
            {
                players.map(player => 
                <div key={player.playerId} className="card border-2">
                    <figure className="p-4">
                      <img
                        src={player.image}
                        alt="image"
                        className="rounded-xl w-full h-52" />
                    </figure>
                    <div className="p-4 space-y-3">
                      <div className="flex items-center gap-2">
                      <i className="fa-solid fa-user"></i>
                      <h2 className="card-title">{player.name}</h2>
                      </div>
                      <div className="flex justify-between items-center text-gray-500">
                        <p><i className="fa-solid fa-flag"></i> {player.country}</p>
                        <p>{player.role}</p>
                      </div>
                      <hr />
                      <h3 className="font-bold">Ratting</h3>
                      <div className="flex justify-between items-center text-gray-500">
                        <p>{player.battingType? `${player.battingType}`:`${player.bowlingType}`}</p>
                        {/* <p>Left Handed Batting</p> */}
                      </div>
                      <div className="flex justify-between items-center text-gray-500">
                        <p>Price: ${player.biddingPrice}</p>
                        <button onClick={()=>handleAddChoosePlayer(player)} className="border-2 rounded-md py-1 px-2">Choose Player</button>
                      </div>
                    </div>
                  </div>)
            }
        </div>
    );
};

export default Players;