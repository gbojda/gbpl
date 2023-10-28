import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import icona from '../Assets/githubicon.png';
import linkedin from '../Assets/linkedin.png';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_no6s0cd', 'template_b7s471n', form.current, 'xUKTx-cdk09Fbg90R')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email successfully sent!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">Cooperation</h1>
            <p className="clientDesc">
            If you are interested in cooperation, please contact me. < br/>
            Just fill in the fields below and send the message.
            </p>

            <p className="linkedintitle">
            You can also contact me via the LinkedIn platform. <br />
            The link is below.
            </p>
            
        {/* <div className="clientImgs">
            <img src={Walmart} alt="Client" className="clientImg" />
            <img src={Adobe} alt="Client" className="clientImg" />
            <img src={Microsoft} alt="Client" className="clientImg" />
            <img src={Facebook} alt="Client" className="clientImg" />
            </div> */}
            </div>
        
        <div id="contact">
          {/* <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span> */}
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name" name='your_name'/>
            <input type="email" className="email" placeholder="Your Email" name='your_email'/>
            <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
           
             <a href="https://www.linkedin.com/in/grzegorzbojda/" target="_blank">
              <img src={linkedin} alt="GitHub" className="link" a href="https://www.w3schools.com/" />
              </a>
              <a href="https://github.com/gbojda" target="_blank">
              <img src={icona} alt="GitHub" className="link" />
              </a>
            </div>
          </form>
       </div>
    </section>
  )
}

export default Contact;