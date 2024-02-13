import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


const CareerError = () => {
    const error = useRouteError()
  return (
    <div><h1>{error.message}</h1>
        {/* <h6>could not found what you are looking</h6> */}
        <Link to='/career'>Go to Careers Page</Link></div>
  )
}

export default CareerError