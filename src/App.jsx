import React from 'react'
import { HashRouter as Router, Routes,Route } from 'react-router-dom'
import "./Style/Style.css"
import Home from './Pages/Home.jsx'
import Ep from './Pages/Ep.jsx'
import ContactPage from './Pages/ContactPage.jsx'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
const App = () => {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path="/:title/:id" element={<Ep/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
