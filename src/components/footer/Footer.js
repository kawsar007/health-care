import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="one">
                    <h5 className="footer-title">About MedicalPress</h5>
                    <p className="footer-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p><br/>
                    <p className="footer-paragraph">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="two">
                    <h5 className="footer-title">Recent Posts</h5>
                    <span className="listItem">Image Post Format</span><br/><br/>
                    <span className="listItem">Quote Post Format</span><br/><br/>
                    <span className="listItem">Gallery Post Format</span><br/><br/>
                    <span className="listItem">How to Live a Healthier Life</span><br/><br/>
                    <span className="listItem">The Hero In All Of Us</span><br/><br/><br/>
                </div>
                <div className="three">
                <h5 className="footer-title">Categories</h5>
                    <span className="listItem">Environment</span><br/><br/>
                    <span className="listItem">Health Basics</span><br/><br/>
                    <span className="listItem">Lifestyle</span><br/><br/>
                    <span className="listItem">Motivation</span><br/><br/>
                </div>
                <div className="four">
                    <h5 className="footer-title">Newsletter Sign Up</h5>
                    <p className="footer-paragraph">Stay updated with latest news from Medical Press.</p>
                    <form>
                        <label>Name</label><br/>
                        <input type="text" placeholder="Name"/><br/>
                        <label>Email</label><br/>
                        <input type="email" placeholder="Email"/><br/>
                        <button type="submit" className="primary-btn">Submit</button>
                    </form>
                </div>
            </div>
            <hr/>
            <div className="sub-footer">
                <div className="sub-footer-left">
                    <p>© Copyright 2021. All Rights Reserved by Medical Press</p>
                </div>
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
    )
}

export default Footer
