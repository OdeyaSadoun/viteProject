import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './comp_static/Header'
import Home from './comps/Home'
import resumeSlice from './featurers/resumeSlice'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Login from './auto_comps/Login'
import Signup from './auto_comps/SignUp'
import Logout from './auto_comps/Logout'
import { AppContext } from './context/context'
import { useState } from 'react'
import ResumeInput from './resume/ResumeInput'
import ListOfResumes from './resume/ListOfResumes'
import ResumeOutput from './resume/ResumeOutput'
import ResumeSingle from './resume/ResumeSingle'


function App() {

  const [userId, setUserId] = useState("");
  const [loginUser, setLoginUser] = useState(false);
  const [cv, setCv] = useState({});

  const myStore = configureStore({
    reducer: {
      resumeSlice
    }
  })

  return (
    <BrowserRouter>
    <Provider store={myStore}>
    <AppContext.Provider value={{userId, setUserId, loginUser, setLoginUser, cv, setCv}}>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/resume/add" element={<ResumeInput/>}/> 
        <Route path="/resume/showall" element={<ListOfResumes/>}/> 
        <Route path="/resume/:id" element={<ResumeSingle/>}/> 
        <Route path="/users/login" element={<Login/>}/> 
        <Route path="/users/signup" element={<Signup/>}/> 
        {/* <Route path="/users/logout" element={}/>  */}
        <Route path="*" element={<h2>Page 404, not found!</h2>}/>
      </Routes>
      </AppContext.Provider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
