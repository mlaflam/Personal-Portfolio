import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mailIcon from '../assets/mail-icon-1.png';
import '../contact.css'


const Contact = () => {
  const form = useRef();

  const initialValues = { user_name: "", user_email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    };
  
    useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendEmail();
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.user_name) {
      errors.user_name = "Required";
    }

    if (!values.user_email) {
      errors.user_email = "Required";
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "Invalid email address";
    }

    if (!values.message) {
      errors.message = "Required";
    }

    return errors;
  };

  const sendEmail = () => {
    toast.success("Message Sent!");
    clearInput();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const clearInput = () => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormValues(initialValues);
    }
  };

  

  return (
    <>
      <Navbar />

      <div className='contact-page'>
        <form ref={form} onSubmit={handleFormSubmit} className="section-block">
        
          <div className='about-page-contact-section' >
            <div className='another-one'>
              <div className="section-container-two">
                <img className="contact-section-icon" src={mailIcon} alt="Mail Icon" />
                <div className="section-title">Contact Us</div>
              </div>

              <div className='contact-block'>
                <div className='contact-form-block'>

                  <div className='contact-form-top-block'>

                    <div className='contact-form-inner-block'>
                      <div className='contact-info'> Full Name
                        <p className='errors'>{formErrors.user_name}</p>
                      </div>
                      <input className='name-info' id='info-1' placeholder="Name" type="text" name="user_name"
                        value={formValues.user_name} onChange={handleChange} />
                    </div>

                    <div className='contact-form-inner-block'>
                      <div className='contact-info'>Email Address
                        <p className='errors'>{formErrors.user_email}</p>
                      </div>
                      <input className='email-info' id='info-2' placeholder="Email" type="email" name="user_email"
                        value={formValues.user_email} onChange={handleChange} />

                    </div>
                  </div>

                  <div className='contact-form-bottom-block'>
                    <div className='contact-info'>Message
                      <p className='errors'>{formErrors.message}</p>
                    </div>
                    <textarea className='message-info' id='info-3' placeholder="Message" name="message"
                      value={formValues.message} onChange={handleChange} />
                  </div>

                  <div className='button-block'>

                    <input className='contact-button'
                      value="Send Message" type='submit' placeholder='Send Message' />

                  </div>


                </div>

              </div>

            </div>


          </div>
          <ToastContainer />
        </form>
      </div>
      
    </>
  )
}

export default Contact