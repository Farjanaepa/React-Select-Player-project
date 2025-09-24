import React, { useState } from 'react';
import userImg from '../../assets/usericon.png'
import flagImg from '../../assets/flag.png'

const PlayerCard = ({ player,setAvailableBalance,availableBalance }) => {

    const [isSelected,setSelected] = useState(false)

    return (
         <div className="card bg-base-100  shadow-sm p-3 ">
                <figure>
                    <img
                    src={player.player_img}
                    alt="Shoes" 
                    className='w-[full] h-[250px] object-cover'/>
                </figure>
                <div className="mt-4">
                    <div className='flex'>
                        <img src={userImg} alt="" /><h2 className="card-title ml-2">{player.player_name}</h2>
                    </div>

                    <div className='flex justify-between mt-4 border-b-1 border-gray-200 pb-2 '> 
                       <div className='flex items-center'>
                         <img className='w-[20px] h-[20px]' src={flagImg} alt="" />
                         <span className='ml-2'>{player.player_country}</span>
                       </div>
                       <button className='btn'>{player.player_role}</button>
                    </div>

                    <div className='flex justify-between font-bold'>
                        <span>{player.rating}</span>
                        <span>5</span>
                    </div>

                    <div className='flex justify-between '>
                        <span className='font-bold'>{player.batting_style}</span>
                        <span>{player.bowling_style}</span>
                    </div>
                    
                    <div className="card-actions flex justify-between mt-3 items-center">
                        <p className='font-bold'>Price: ${player.price.toLocaleString()}</p>
                    <button disabled={isSelected} onClick={()=>{
                        setSelected(true)
                        setAvailableBalance(500)
                    }} className="btn">{isSelected === true ? "Selected" : "Choose player"}</button>
                    </div>
                </div>
                    </div>
    );
};

export default PlayerCard;