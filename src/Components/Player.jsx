

const Player = ({choosePlayer}) => {
    return (
        <div className="">
            {
                choosePlayer.map(p => 
                <div key={p.PlayerId} className="flex gap-8">
                    <img className="w-12 h-12 rounded-full" src={p.image} alt="" />
                    <div>
                    <h3 className="font-bold">{p.name}</h3>
                    <p>{p.role}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Player;