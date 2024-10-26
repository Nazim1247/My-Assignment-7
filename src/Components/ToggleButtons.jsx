import { useState } from "react";
import Available from "./Available";


const ToggleButtons = () => {
    const [activeButton, setActiveButton] = useState('available');
    const handleButtonClick = (button)=>{
        console.log('clicked')
        setActiveButton(button)
    }


    return (
        <div>
            hello
            <Available activeButton={activeButton} handleButtonClick={handleButtonClick}></Available>
        </div>
    );
};

export default ToggleButtons;