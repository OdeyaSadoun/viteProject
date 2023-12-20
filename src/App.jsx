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
import counterSlice from './featurers/counterSlice'
import todosSlice from './featurers/todosSlice'
import resumeSlice from './featurers/resumeSlice'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import counter from './redux_comps/counter'
import Counter from './redux_comps/counter'
import AppTodo from './todos_redux_comps/appTodo'

import AppResume from './resume/AppResume'
import FireLiveToys from './toys_comps/ToysList'
import AutoComp from './auto_comps/AutoComp'
import Login from './auto_comps/Login'
import Signup from './auto_comps/SignUp'


function App() {

  const myStore = configureStore({
    reducer: {
      counterSlice,
      todosSlice,
      resumeSlice
    }
  })

  return (
    <BrowserRouter>
    <Provider store={myStore}>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/resume" element={<AppResume/>}/> 
        <Route path="/users/login" element={<Login/>}/> 
        <Route path="/users/signup" element={<Signup/>}/> 
        <Route path="*" element={<h2>Page 404, not found!</h2>}/>
      </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
