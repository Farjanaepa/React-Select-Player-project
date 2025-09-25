
import './App.css'
import { ToastContainer } from 'react-toastify';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'
import { Suspense, useState } from 'react'


const fetchPlayers = async () => {
  const res = await fetch('/public/players.json')
  return res.json()
}
 const playerPromise = fetchPlayers()
function App() {
 const [toggle, setToggle]=useState(true)

 const[availableBalance, setAvailableBalance] = useState(6000000000)
 const [purchasePlayers,setPurchasePlayers] = useState([])
 
 const removePlayer = (p) =>{
  const filterData = purchasePlayers.filter(ply => ply.player_name !== p.player_name)
  console.log(filterData)
  setPurchasePlayers(filterData)
  setAvailableBalance(availableBalance+ parseInt(p.price.split('$').join('')))

 }

  return (
    <>
     
     <Navbar availableBalance={availableBalance}></Navbar>


     <div className=' max-w-[1200px] mx-auto flex justify-between items-center p-2'>
      <h1 className='font-bold'>{
        toggle === true ? "Available Players" : `Selected Players (${purchasePlayers.length}/7)`
        }</h1>

      <div className='font-bold'>
        <button onClick={() => setToggle(true)} className={`py-3 p-2 border-1 border-gray-400 rounded-l-xl border-r-0 ${toggle===true?" bg-[#E7FE25]":""}`}> Available</button>
        <button onClick={()=> setToggle(false)} className={`py-3 p-2 border-1 border-gray-400 rounded-r-xl border-l-0 ${toggle===false?" bg-[#E7FE25]":""}`}> Selected <span>({purchasePlayers.length})</span></button>
      </div>
     </div>


{
  toggle === true?
      
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <AvailablePlayers purchasePlayers={purchasePlayers} setPurchasePlayers={setPurchasePlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
      </Suspense>: <SelectedPlayers removePlayer={removePlayer} purchasePlayers={purchasePlayers}></SelectedPlayers>
}
      

    <ToastContainer></ToastContainer>  
      
    </>
  );
}

export default App
