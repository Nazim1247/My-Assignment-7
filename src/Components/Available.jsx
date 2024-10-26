


const Available = ({choosePlayer, handleAvailable, isActive, addActive}) => {
    return (
        <div className="w-11/12 mx-auto flex justify-between items-center py-8">
            <h3 className="text-2xl font-bold">Available Players</h3>
            <div className="flex border-2 rounded-lg py-2 px-6 gap-8">
                <button onClick={()=>{addActive('available'),handleAvailable('card')}} className={`${isActive.card?'btn active':'btn'}`}>Available:</button>
                <button onClick={()=>{addActive('selected'),handleAvailable('about')}} className={`${isActive.card?'btn':'btn active'}`}>Selected ({choosePlayer.length})</button>
            </div>
            
        </div>
    );
};

export default Available;