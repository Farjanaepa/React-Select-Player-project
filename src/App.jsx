
import './App.css'

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'
import { Suspense, useState } from 'react'


const fetchPlayers = async () => {
  const res = await fetch('/public/players.json')
  return res.json()
}

function App() {
 const [toggle, setToggle]=useState(true)
 const playerPromise = fetchPlayers()

  return (
    <>
     
     <Navbar></Navbar>


     <div className=' max-w-[1200px] mx-auto flex justify-between items-center p-2'>
      <h1 className='font-bold'>Available Players</h1>

      <div className='font-bold'>
        <button onClick={() => setToggle(true)} className={`py-3 p-2 border-1 border-gray-400 rounded-l-xl border-r-0 ${toggle===true?" bg-[#E7FE25]":""}`}> Available</button>
        <button onClick={()=> setToggle(false)} className={`py-3 p-2 border-1 border-gray-400 rounded-r-xl border-l-0 ${toggle===false?" bg-[#E7FE25]":""}`}> Selected <span>(0)</span></button>
      </div>
     </div>


{
  toggle === true?
      
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
      </Suspense>: <SelectedPlayers></SelectedPlayers>
}
      

      
      
    </>
  );
}

export default App
