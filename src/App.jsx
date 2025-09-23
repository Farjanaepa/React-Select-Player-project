
import './App.css'

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'
import { Suspense } from 'react'


const fetchPlayers = async () => {
  const res = await fetch('/public/players.json')
  return res.json()
}

function App() {
 
 const playerPromise = fetchPlayers()

  return (
    <>
     
     <Navbar></Navbar>

      {/* available players */}
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
      </Suspense>
      

      {/* Selected Players */}
      <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
