import React from 'react';

const SelectedCard = ({player}) => {
    return (
        <div className='border-2 mt-5 border-gray-300 p-3 rounded-xl flex justify-between items-center'>
                <div className='flex items-center'>
                    <img src={player.player_image} className='w-[60px] h-[60px] rounded-xl p-1' alt="" />
                
                <div className='ml-2'>
                    <h1 className='font-bold'> {player.player_name}</h1>
                    <p className='text-xs'>{player.player_role}</p>
                </div>
                </div>

                <div>
                    <img src={'https://i.ibb.co.com/sJRkZZnD/Frame.png'} alt="" />
                </div>
            </div>
    );
};

export default SelectedCard;