import React from 'react'
import emailjs from "emailjs-com"

const Mailer = () => {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_6uijuyp','template_49skgwb',e.target,"5MPeHB-4qtTuCozUv").then(res=>{
      console.log(res);
    }).catch(err=>console.log(err));
  }
  return (
    <div className='container border' 
    style={{marginTop:"50px",
    width:'100%',
    backgroundImage:"url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?w=2000')",
    backgroundPosition:"center",
    backgroundSize:"cover",

    }}>
      <h1 style={{marginTop:'25px'}}>Subscribe News Letter</h1>
      <form className='row' style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name='name' className='form-control' />
        <label>Email</label>
        <input type="email" name="user_email" className='form-control'/>

        <input type='submit' value='subscribe' className='form-control btn btn-primary' style={{marginTop:'30px'}}/>

      </form>

    </div>
  )
}

export default Mailer;