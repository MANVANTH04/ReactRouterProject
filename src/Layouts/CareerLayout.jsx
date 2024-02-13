import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'

const CareerLayout = () => {
    const careers = useLoaderData()
  return (
    <div>

    <h1>CareerLayout</h1>
    <p> Lorem ipsum,  pariatur enim. Quas, numquam inventore soluta.</p>

    <Outlet/>

    </div>
  )
}

export default CareerLayout

// export const gettingdata = async ()=>{
//     const res = await fetch("http://localhost:4000/careers")
     
//      return res.json()
//  }



