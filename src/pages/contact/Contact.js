import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import '../../css/utilities.css';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
             <div className="page-banner">
                <img src="images/services/banner.jpg" alt="banner" />
            </div>
            <div className="page-header">
                <h3>Contact</h3>
                <p>MedicalPress <BsArrowRightShort/> <span>Contact</span></p>
            </div>
            <div className="contact-form">
                <h1>This is contact Form</h1>
            </div>
        </div>
    )
}

export default Contact;
