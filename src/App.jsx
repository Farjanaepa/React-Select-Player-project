
import './App.css'
import navLogo from './assets/logo.png'
import coin from './assets/images.png'
function App() {
 

  return (
    <>

      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className='w-[60px] h-[60px]' src={navLogo} alt="" />
          </a>
        </div>
        <div className="flex items-center">
         <span className='mr-1'>600000000000</span>
         <span className='mr-1'> Coin </span>
         <img className='w-[30px]' src={coin} alt="" />
        </div>
      </div>

    </>
  )
}

export default App
