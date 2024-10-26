/* eslint-disable react/prop-types */

import logo from '../assets/image/logo.png'
const Header = ({coin}) => {
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center py-8'>
            <div>
                <img className='w-12' src={logo} alt="" />
            </div>
            <div className='flex items-center gap-8'>
                <div className='hidden md:flex items-center gap-8'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                </div>
                <div className='flex items-center gap-2 border-2 rounded-md py-1 px-2'>
                    <p>{coin} Coin</p>
                    <i className="fa-solid fa-circle-dollar-to-slot text-orange-400"></i>
                </div>
            </div>
        </div>
    );
};

export default Header;