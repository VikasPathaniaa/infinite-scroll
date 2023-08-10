import React from 'react';
import logo from "../assets/scroll.png"

const Header = () => {
    return (
        <div className='shadow-[0_5px_40px_5px_rgba(0,0,0,0.3)]'>
        <div className='flex w-[80%] m-auto justify-between items-center'>
            <div>
                <img src={logo} alt='logo not found' width={60} height={60}/>
            </div>
            <div>
            <h2 className='text-[20px]'> Infinite Scroll</h2>
            </div>
            <div>
                <input type='text' placeholder='search here' className='p-2 border-[2px] rounded-md focus:outline-none' />
            </div>
        </div>
        </div>
    )
}

export default Header
