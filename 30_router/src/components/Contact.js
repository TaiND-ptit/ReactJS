import React, { Component,} from 'react';
import {Redirect} from "react-router-dom";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect : false
    }
  }

  isChange = (event) => {
  const ten = event.target.name;
  const giatri = event.target.value;
  this.setState({
    [ten]:giatri
  });
  }
  
  
  submitForm = (event) => {
   event.preventDefault();
   this.setState({
     isRedirect :true
   });
  }
  getGiatri = () => {
      var noidung="";
      noidung += this.state.name;
      noidung += this.state.email;
      noidung += this.state.phone;
      noidung += this.state.mess;
      return noidung;
  }
  
  
    render() {
      if(this.state.isRedirect){
        console.log(this.getGiatri());
        return <Redirect to ="/" />;
      }
        return (
            <div>
            <header className="masthead tintuc">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-12 my-auto">
                    <div className="header-content mx-auto">
                      <h1 className="mb-1 text-center">Trang liên hệ</h1>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <section className="page-section" id="contact">
              <div className="container">
           
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-xl-7">
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    
                      <div className="form-floating mb-3">
                        <input onChange = {(event) => this.isChange(event)}
                         className="form-control is-invalid" name="name" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" data-sb-can-submit="no" />
                        <label htmlFor="name">Full name</label>
                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                      </div>
                      
                      <div className="form-floating mb-3">
                        <input onChange = {(event) => this.isChange(event)} className="form-control" id="email" name="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" data-sb-can-submit="no" />
                        <label htmlFor="email">Email address</label>
                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                      </div>
                    
                      <div className="form-floating mb-3">
                        <input onChange = {(event) => this.isChange(event)} className="form-control" id="phone" name="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" data-sb-can-submit="no" />
                        <label htmlFor="phone">Phone number</label>
                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                      </div>
                 
                      <div className="form-floating mb-3">
                        <textarea onChange = {(event) => this.isChange(event)} className="form-control" name="mess" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required" data-sb-can-submit="no" defaultValue={""} />
                        <label htmlFor="message">Message</label>
                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                      </div>
                     
                      <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                          <div className="fw-bolder">Form submission successful!</div>
                          To activate this form, sign up at
                          <br />
                          <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                      </div>
                   
                      <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                 
                      <button onClick  ={(event) => this.submitForm(event)} 
                       className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
        );
    }
}

export default Contact;