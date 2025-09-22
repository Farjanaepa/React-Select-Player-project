
import './App.css'
import navImg from './assets/logo.png'
import coin from './assets/download-removebg-preview.png'
function App() {
 

  return (
    <>
     
      <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className=" text-xl">
      <img className='w-[60px] h-[60px]' src={navImg} alt="" />
      </a>
  </div>
  <div className="flex items-center">
    <span className='mr-1'>60000000000</span>
    <span className='mr-1'>Coin </span>
    <img className='w-[30px]' src={coin} alt="" />
  </div>
</div>
      
    </>
  )
}

export default App
