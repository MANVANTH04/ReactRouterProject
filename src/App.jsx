import { useState } from 'react'
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <header>
      <nav>
      <h1>Jobrouter</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
      </header>
      <main>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        </Routes>
      </main>
    </BrowserRouter>
    </>
  )
}


export default App
