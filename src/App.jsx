import {  useState } from 'react'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes, Link, NavLink} from 'react-router-dom'
// pages
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Faq from './pages/Help/Faq.jsx'
import Contact from './pages/Help/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
//layouts

import RootLayout from './Layouts/RootLayout.jsx'
import HelpLayout from './Layouts/HelpLayout.jsx'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path="help" element={<HelpLayout/>}>
          <Route path="faq" element={<Faq/>}/>
          <Route path="contact" element = {<Contact/>}/>
        </Route>

        <Route path='*' element={<NotFound/>}/>

      </Route>

    )
  )

  return (
    <>
    <RouterProvider router ={router}/>

    </>
  )
}


export default App


    /* <BrowserRouter>
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
    </BrowserRouter> */