import React, { useEffect, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../../css/utilities.css';
// import { services } from '../../data.js';
import './Services.css';

function Services() {
    const [services, setServices] = useState([]);
 
    useEffect(() => {
        fetch('./services.json')
           .then(res => res.json())
           .then(data => setServices(data));
    }, [])


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
                            <div key={item?.id} className="services-details">
                                <img src={item?.img} alt="" />
                                <div className="services-info">
                                    <h4 className="services-title">{item?.title}</h4>
                                    <p className="services-desc">{item?.desc}</p>
                                    <Link to={`/service/${item?.id}`} type="button" className="services-btn">Read More</Link>
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
