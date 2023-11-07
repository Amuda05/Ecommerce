import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Componnet/NavBar'
import Header from './Header'
import Sectionpage from './Sectionpage'
import Aside from './Aside'
import Footer from './Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Header/>
    <Sectionpage/>
    <Aside/>
    <Footer/>
    </> 
  )
}

export default App
