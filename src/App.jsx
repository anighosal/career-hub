import { useState } from 'react'

import viteLogo from '/vite.svg'

import Home from './components/Home/Home'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header></Header>
     <Outlet></Outlet>
     <Footer></Footer>
    
    </div>
  )
}

export default App
