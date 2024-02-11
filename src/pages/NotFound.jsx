import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h2> NotFound</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Nam, debitis quos repudiandae neque placeat commodi 
         voluptatem cupiditate ad recusandae veritatis ratione 
         laudantium officia, obcaecati nobis dolores quasi natus atque excepturi.</p>
        <p> NotFound, Go to {<Link to="/">Home</Link>}.</p>
    </div>
  )
}

export default NotFound