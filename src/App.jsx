import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './comps_static/Header'
import Home from './comps/Home'
import AppEmp from './comps_employee/AppEmp'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/employee" element={<AppEmp/>}/>
        <Route path="*" element={<h2>404, Page not found!</h2>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
