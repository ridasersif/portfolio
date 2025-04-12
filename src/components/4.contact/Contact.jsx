import React from "react";
import './Contact.css'

const Contact =()=>{
    return (
        <section className="contact-us" >
           <h1 className="title">
            <span className="icon-envelope"></span>
            Contact Us
           </h1>
           <p className="sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, id?</p>
           <div className="flex">
            <form className="">

               <div className="flex" style={{marginTop: "24px"}}>
                    <label  htmlFor="email">Email Address</label>
                    <input required type="email" id="email" />
               </div>

                <div className="flex" style={{marginTop: "1rem"}}>
                    <label htmlFor="message">Your message</label>
                    <textarea required name="" id="message"></textarea>
                </div>
                <button type="submit" className="submit">submit</button>
            </form>
            <div className="animation border">animation </div>
           </div>
        </section>
    );
}
export default Contact;