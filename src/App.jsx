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
        <Route path="/about" element={<About/>}/>
        <Route path="/employee" element={<AppEmp/>}/>
        <Route path="/employee:company" element={<AppEmp/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/todos" element={<AppTodo/>}/> 
        <Route path="/resume" element={<AppResume/>}/> 
        <Route path="*" element={<h2>Page 404, not found!</h2>}/>
      </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
