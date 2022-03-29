
import React, { Component } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {

  // Connection for Emailjs.

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'service_7jkaecf', e.target, '3v-MlhA1NCWoz2z6c')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  }

  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input type="text" className="form-control" placeholder="Name" name="name" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="email" className="form-control" placeholder="Email Address" name="email" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="text" className="form-control" placeholder="Subject" name="subject" />
            </div>
            <div className="col-8 form-group mx-auto">
              <textarea className="form-control" id="" cols="30" row="8" placeholder="Your message" name="message"></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input type="submit" className="btn btn-info" value="Send Message"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

