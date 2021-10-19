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
                <p>MedicalPress <BsArrowRightShort /> <span>Contact</span></p>
            </div>
            <div className="contact-container">
                <div className="contact-wrapper">
                <h2>Get in Touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,<br />
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam</p>
                <div className="contact-section">
                    <div className="contact-left">
                        <form>
                            <input type="text" className="form-control" placeholder="Full Name" />
                            <input type="email" className="form-control" placeholder="Email Address" />
                            <input type="number" className="form-control" placeholder="Phone" />
                            <textarea className="form-control" placeholder="Message" />
                            <strong>GDPR Agreement</strong><br/>
                            <input type="checkbox" /> I consent to having this website store my submitted information so they can respond to my inquiry.<br/>
                            <button type="submit" className="btn btn-dark my-3">Submit</button>
                        </form>
                    </div>
                    <div className="contact-right">
                        <h2>Medical Press</h2>
                        <div className="contact-address">
                            <div className="address-left">
                                <p>121 King Street, Melbourne<br />Victoria 3000 Australia</p>
                            </div>
                            <div className="address-right">
                                <p>Phone: +32654-34734-4323<br />Fax: +1-345-32543-343</p>
                            </div>
                        </div>
                        <hr />
                        <div className="contact-icon">
                            <h5>Social</h5>
                            <div className="sub-footer-right">
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-linkedin-in"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-youtube"></i>
                                <i class="fab fa-skype"></i>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
