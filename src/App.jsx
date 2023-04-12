import { useState } from 'react'

import viteLogo from '/vite.svg'

import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <NavBar></NavBar>
     <Outlet></Outlet>
     <Footer></Footer>
    
    </div>
  )
}

export default App
