import { useLoaderData, useParams } from "react-router-dom";


const CareerDetails = () => {
    const {id} = useParams()
    const career = useLoaderData() 

  return (

    <div className="career-details">
    <h2>Career Details for {career.title}</h2> 
    <p>Starting salary: {career.salary}</p>
     <p>Location: {career.location}</p>
    <div className="details">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
    </div>
  </div>
  
    
  )
}

export default CareerDetails


// normal one 

export const CareerDetailsLoader = async ({ params }) => {
    const { id } = params
  
    const res = await fetch('http://localhost:4000/careers/' + id)
    console.log(!res.ok)
  
    if (!res.ok) {
      throw Error('Could not find that career.')
    }
  
    return res.json()
  }

            // to start server for json objects
            //  reactrouterproject % json-server -p 4000 -w ./data/db.json 



// so now we have to code the error page if the user sent a request to carres:id and if 
// the id is not matching in the 