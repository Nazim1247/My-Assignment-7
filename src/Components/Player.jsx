


const Player = ({choosePlayer, handleRemove}) => {
    return (
        <div className="w-11/12 mx-auto space-y-4 mb-96">
            <h3 className="text-xl font-bold mb-2">Selected Player:({choosePlayer.length}/6)</h3>
            {
                choosePlayer.map(p => 
                <div key={p.PlayerId} className="flex justify-between items-center border-2 p-4 rounded-lg">
                    <div className="flex gap-8 items-center">
                    <img className="w-12 h-12 rounded-full" src={p.image} alt="" />
                    <div>
                    <h3 className="font-bold">Name: {p.name}</h3>
                    <p>Role: {p.role}</p>
                    <p>Price: ${p.biddingPrice}</p>
                    </div>
                </div>
                    <button onClick={()=>handleRemove(p.name)}><i className="fa-solid fa-trash text-[#F14749]"></i></button>
                </div>)
            }
            <button className="btn bg-[#E7FE29]">Add More</button>
        </div>
    );
};

export default Player;