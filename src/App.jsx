import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/products' element={ <Products/> } />
          <Route path='/cart'/>
          <Route path='/login'/>
          <Route path='/sign-up'/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
