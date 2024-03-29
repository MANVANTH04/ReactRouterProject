import {  useState } from 'react'
import {createBrowserRouter, createRoutesFromElements, useLoaderData, RouterProvider, Route, Routes, Link, NavLink} from 'react-router-dom'
// pages
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Faq from './pages/Help/Faq.jsx'
import Contact, {contactAction} from './pages/Help/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Career,{gettingdata} from './pages/Career.jsx'
import CareerDetails, { CareerDetailsLoader } from './pages/CareerDetails.jsx'
import CareerError from './pages/CareerError.jsx'
//layouts

import RootLayout from './Layouts/RootLayout.jsx'
import HelpLayout from './Layouts/HelpLayout.jsx'
import CareerLayout from './Layouts/CareerLayout.jsx'



function App() {
  const [count, setCount] = useState(0)

  // const Careers = useLoaderData()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>

        <Route path="help" element={<HelpLayout/>}>
          <Route path="faq" element={<Faq/>}/>
          <Route path="contact" action={contactAction} element = {<Contact/>}/>
        </Route>

        <Route path='career' loader={gettingdata} errorElement={<CareerError/>} element={<CareerLayout/>} >
          <Route index loader={gettingdata} element={<Career />}/>
          <Route path=':id' loader={CareerDetailsLoader}  element={<CareerDetails/>}/>
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



          {/* reactrouterproject % json-server -p 4000 -w ./data/db.json */}
