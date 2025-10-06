import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import React, { useRef } from "react";
import emailjs from "emailjs-com"; 


const Contact = () => {
 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zwhdbk2", // ✅ Service ID
        "template_oxfznz5", // ✅ Template ID
        form.current,
        "rf8RUDMW3jwSNk1JH" // ✅ Public Key
      )
      .then(
        (result) => {
          console.log("Message Sent!", result.text);
          alert("Message Sent Successfully! ✅");
          form.current.reset(); // Clears form after successful send
        },
        (error) => {
          console.error("Failed...", error.text);
          alert(`Failed to send message. Error: ${error.text} ❌`); // Better error feedback
        }
      );
  };


  return (
    <section id="contact">
    <>
    <h1 className="heading-contact">Contact With Me</h1>
   
    <div className="contact-container">
      
      <div className="contacta">
        <div className="format-contact">
        <img className="contact-image" src="/contact1.png" alt="contact-image"/>
        <div className="contact-content">
        <p className="contact-content-p">Satendra Kumar</p>
        <p className="contact-content-p">Software Developer</p>
        <p className="contact-content-p">I am available for freelance work. Connect with me via and call in to my account.</p>
      <p className="contact-content-p">Phone: +91 7068130564</p>
      <p className="contact-content-p">Email: satendra.kumar.iiitbhopal@gmail.com</p>
       <div className="find-with-me">
                  
                  <div className="">
                    <a href="https://www.linkedin.com/in/satendra-kumar-b2a843190/" target="_blank" rel="noopener noreferrer">
                      {/* <img src="/javaSpringboot.png" alt="LinkedIn" className="my-skills" /> */}
                      <FaLinkedin  className="my-skills"/>
                    </a>
                    <a href="https://www.instagram.com/gautam100.01/" target="_blank" rel="noopener noreferrer">
                      
                      <FaInstagram className="my-skills" />
                    </a>
                  </div>
                </div>
      </div>
      </div>
      
      </div>
      

 < div className="contactb">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="name-phone" style={{ paddingTop:"15px"}}>
        <label htmlFor="user_name">Your Name</label>
        <input type="text" id="user_name" name="user_name" required />

        <label htmlFor="user_phone">Phone Number</label>
     
        <input type="text" id="user_phone" name="user_phone" required />

        <label htmlFor="user_email">Email</label>
        <input type="email" id="user_email" name="user_email" required />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Your Message</label>
        {/* Changed name from 'message' to 'message' (already good) */}
        <textarea id="message" name="message" rows="5" required />
</div>
        <button style={{height:"50px"}} type="submit">Send Message</button>
        
      </form>
    </div>

















       </div>
   
     </>
     </section>
  )
}

export default Contact;