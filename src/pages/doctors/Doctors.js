import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { doctors } from '../../data.js';
import './Doctors.css';

function Doctors() {
    return (
        <div className="doctors">
            <div className="page-banner">
                <img src="images/services/banner.jpg" alt="banner" />
            </div>
            <div className="page-header">
                <h3>Doctors</h3>
                <p>MedicalPress <BsArrowRightShort /> <span>Doctors</span></p>
            </div>
            <div className="specialistsHeader">
                <h2 className="specialistsTitle">Meet our <span className="text-sep">Doctors</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <div className="add-doctors">
                <div className="individual-doctors card">
                    {
                        doctors.map(item => (
                            <div className="doctor-info card">
                                <img src={item.img} alt="" />
                                <h5 className="doctor-name">{item.name}</h5>
                                <p className="doctor-job">{item.job}</p>
                                <p>{item.desc}</p>
                                <div className="doctor-social">
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
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Doctors;
