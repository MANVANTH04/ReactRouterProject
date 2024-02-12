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



// <div className="career-details">
// {careers.map(career=>(
//     <>
//     <h2>Career details for </h2>
//     <p> Title :- {career.title} </p>
//     <p>Starting Salary:- {career.salary} </p>
//     <p>Location:- {career.location}</p>
//     </>
// ))}

//     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium mollitia voluptatem 
//     laboriosam nobis soluta iure, autem, tenetur consectetur dolorem culpa minima repudiandae eligendi.
//      Asperiores itaque nesciunt harum fugit distinctio at!</p>
// </div>