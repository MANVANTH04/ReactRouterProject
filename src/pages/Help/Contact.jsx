import React from 'react'
import {Form,useActionData, redirect} from 'react-router-dom'

const Contact = () => {
    let data = useActionData()
    return (
    <div className="contact">
    
      <h3>Contact Us</h3>
      <Form method="post" action='/help/contact' >
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>

        {/* {actionData &&actionData.error&& <p>{actionData.error}</p> } */}
        {/* {data.error?<p>{data.error}</p>: "" } */}
        {data&&data.error&&<p>{data.error}</p>}
      
      </Form>
    </div>
  )
}

export default Contact


export const contactAction =async({request})=>{
    console.log(request)

    const data = await request.formData()

    console.log(data)

    const submission = {
        email : data.get('email'),
        message : data.get('message')
    }
    console.log(submission)
    if (submission.message.length <10){
        return {error: "message must be 10 characters long " }

    }
    return redirect('/')
    // return 1

}