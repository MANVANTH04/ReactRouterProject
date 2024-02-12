import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'



const Career = () => {
    const careers = useLoaderData()
    
  return (
    <div className='careers'>
    <h1> Career</h1>
    {careers.map(career=>(
        <Link to={`/career/${career.id}`} > 
        <p>{career.title}</p>
        <p>Based in {career.location}</p>
        </Link>
    ))}
    </div>
  )
}

export default Career


//loader function

 export const gettingdata = async ()=>{
   const res = await fetch("http://localhost:4000/careers")
    
    return res.json()
}

// export gettingdata