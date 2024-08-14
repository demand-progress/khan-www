import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header>

      </header>
      <h1>
        Lina Khan is standing up for the little guy too much. What about us big guys?
      </h1>
      <div className='quote'>
      “We’ve given a lot of money,
        I mean A LOT. Is there no return
        on our investment?” *
      
      </div>
      <Carousel>
        <div>
          <img src={reactLogo} alt='React Logo' />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src={viteLogo} alt='Vite Logo' />
          <p className='legend'>Legend 2</p>
        </div>
      </Carousel>
    </div>
  )
}

export default App
