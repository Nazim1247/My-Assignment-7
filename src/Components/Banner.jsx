/* eslint-disable react/prop-types */

import './Banner.css'
import banner from '../assets/image/banner-main.png'
const Banner = ({handleAddCoin}) => {
    return (
        <div className='w-11/12 mx-auto text-center space-y-2 md:space-y-5 background rounded-2xl'>
            <img className='mx-auto' src={banner} alt="" />
            <h1 className='text-2xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-gray-400'>Beyond Boundaries Beyond Limits</p>
            <button onClick={handleAddCoin} className='btn bg-[#E7FE29] font-bold'>Claim Free Credit</button>
        </div>
    );
};

export default Banner;