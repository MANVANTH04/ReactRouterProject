import React from 'react'
import { useLocation,Link } from 'react-router-dom'

const Breadcrumbs = () => {
    const location = useLocation()

    let currentLink = []
    const crumbs = location.pathname.split('/')
    .filter(crumb=>crumb!="")
    .map(crumb=>{
        currentLink+= "/"+crumb   // `/${crumb}`
        // here for every one of the array element we are going to return the component so that's the reason why we are getting the specific link for every element in the array 
        return(
            <div className="crumb" key={crumb}>
                <Link to={currentLink}>{crumb}</Link>
            </div>
        )

    })

    // you can basically create a funciton or a variable and then you can return the values / components like we have
    // did it above. 
   

  return (
    <div className='breadcrumbs'>
        {crumbs}
    </div>
    
  )
}

export default Breadcrumbs