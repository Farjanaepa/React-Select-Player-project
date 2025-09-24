import React from 'react';
import navImg from '../../assets/logo.png'
import coin from '../../assets/images.png'

const Navbar = ({availableBalance}) => {
    return (
        <div>
             <div className="navbar max-w-[1200px] mx-auto">
  <div className="flex-1">
    <a className=" text-xl">
      <img className='w-[60px] h-[60px]' src={navImg} alt="" />
      </a>
  </div>
  <div className="flex items-center">
    <span className='mr-1'>{availableBalance}</span>
    <span className='mr-1'>Coin </span>
    <img className='w-[25px]' src={coin} alt="" />
  </div>
      </div>
        </div>
    );
};

export default Navbar;