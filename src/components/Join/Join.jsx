import React, { useEffect, useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form = useRef()

     const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_spm3pbo', 'template_ktvz7lq', form.current, 'HypmtmfUMTn4iwcjA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
         const email = document.getElementById('email')
         email.value =""
    };
  return (
      <div className="join" id='join'>
          <div className="left-j">
              <hr />
              <div>
              <span className='stroke-text'>READY TO</span><span>LEVEL UP</span>
              </div>
              <div>
                  <span>YOUR BODY</span><span className='stroke-text'>WITH US?</span>
              </div>
          </div>
          <div className="right-j">
              <form ref={form} onSubmit={sendEmail} className='email-container'>
                  <input type="email" id='email' name='uesr-email' placeholder='Enter your email address here...' required />
                  <button type='submit' className='btn btn-j'>Join Now</button>
              </form>
          </div>
    </div>
  )
}

export default Join