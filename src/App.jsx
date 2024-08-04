import './App.css'
import Banner from './components/Banner'
import Best from './components/Best'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Mains from './components/Mains'
import Markline from './components/Markline'
import Navbar from './components/Navbar'
import Transformation from './components/Transformation'
import {Outlet} from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
