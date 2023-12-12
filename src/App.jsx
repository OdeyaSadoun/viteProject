import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './comp_static/Header'
import Home from './comps/Home'
import About from './comps/About'
import AppEmp from './comps_employee/AppEmp'
import Form from './comps/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/employee" element={<AppEmp/>}/>
        <Route path="/employee:company" element={<AppEmp/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="*" element={<h2>Page 404, not found!</h2>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
