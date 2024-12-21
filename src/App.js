import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Training from './Pages/Training'

export default function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<SignUp/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/training' element={<Training/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}
