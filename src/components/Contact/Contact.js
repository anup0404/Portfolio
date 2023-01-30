import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="contact_container">
        <div className="contact_container_left">
          <h1><span>Contact</span></h1>
          <br />
          <p className="contact_info">
            I would love to hear about your project and how i could help .Please
            fill in the form ,and I will get back to you as soon as possible.
          </p>
        </div>
        <div className="contact_container_right">
          <form>
            <label for="fname" className="contacthere">
              NAME :
            </label>
            <br/>
            
            <input type="text" />
            <br/>
            
            <label for="email" className="contacthere">
              EMAIL :
            </label>
            <br/>
            
            <input type="email" />
            <br/>
            <label for="number" className="contacthere">
              MOBILE NO :
            </label>
            <br/>
           
            
            <input type="text" />
            <br/>
            
            <label for="message" className="contacthere">
              MESSAGE :
            </label><br/>
          
          
            <textarea
              rows="5"
              cols="30"
              name="massage"
              id="message_discription"
            />
            <br />
            <button type="submit" id="button">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
