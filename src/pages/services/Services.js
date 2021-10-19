import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import '../../css/utilities.css';
import { services } from '../../data.js';
import './Services.css';

function Services() {
    return (
        <div className="services">
            <div className="page-banner">
                <img src="images/services/banner.jpg" alt="banner" />
            </div>
            <div className="page-header">
                <h3>Services</h3>
                <p>MedicalPress <BsArrowRightShort/> <span>Services</span></p>
            </div>
            <div className="all-services">
                <div className="services-individual">
                    {
                        services.map(item => (
                            <div key={item.id} className="services-details">
                                <img src={item.img} alt="" />
                                <div className="services-info">
                                    <h4 className="services-title">{item.title}</h4>
                                    <p className="services-desc">{item.desc}</p>
                                    <button type="button" className="services-btn">Read More</button>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default Services