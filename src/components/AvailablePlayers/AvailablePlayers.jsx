import React, { use } from 'react';
import userImg from '../../assets/usericon.png'
import flagImg from '../../assets/flag.png'
const AvailablePlayers = ({playerPromise}) => {

    const playerData = use(playerPromise)
    console.log(playerData);
    return (
        <div className='max-w-[1200px] mx-auto'>

            {
                playerData.map( player =>
                    <div className="card bg-base-100 w-96 shadow-sm p-3">
                <figure>
    <img
      src={player.player_img}
      alt="Shoes" />
                </figure>
                <div className="mt-4">
                    <div className='flex'>
                        <img src={userImg} alt="" /><h2 className="card-title ml-2">{player.player_name}</h2>
                    </div>

                    <div className='flex justify-between mt-4 border-b-1 border-gray-200 pb-2 '> 
                       <div className='flex items-center'>
                         <img className='w-[20px] h-[20px]' src={flagImg} alt="" />
                         <span className='ml-2'>India</span>
                       </div>
                       <button className='btn'>All rounder</button>
                    </div>

                    <div className='flex justify-between font-bold'>
                        <span>Rating</span>
                        <span>5</span>
                    </div>

                    <div className='flex justify-between '>
                        <span className='font-bold'>Left hand bat</span>
                        <span>Right hand bowl</span>
                    </div>
                    
                    <div className="card-actions flex justify-between mt-3 items-center">
                        <p className='font-bold'>Price:$1500000</p>
                    <button className="btn">Choose Player</button>
                    </div>
                </div>
                    </div>
                )
            }
         
            

        </div>
    );
};

export default AvailablePlayers;