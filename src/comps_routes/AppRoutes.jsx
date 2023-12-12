import React,{useState} from 'react'
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import Home from './Home'
import Gallery from './Gallery'
import About from './About'
import VipList from '../VipList'
import { AppContext } from '../context/context'
import Counter from './Counter'

const AppRoutes = () => {

    const [number, setNumber] = useState(4);
    const [coins, setCoins] = useState(6);
    const [counter, setCounter] = useState(0);
  return (
    <BrowserRouter>

    <AppContext.Provider value={{
        val: "koko",
        number, setNumber,
        coins, setCoins,
        counter, setCounter
    }}>

   
    <header className='p-2 container bg-info'>
        <div className='float-end h5'> Coins
        </div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/vip">Vip</Link>
        <Link to="/counter">Counter</Link>
    </header>

    <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/vip" element={<VipList/>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
    </Routes>
    </AppContext.Provider>
    </BrowserRouter>
  )
}

export default AppRoutes