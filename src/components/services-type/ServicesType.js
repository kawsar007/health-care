import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/utilities.css';
import './ServicesType.css';

function ServicesType() {
    return (
        <div>
            <section className="features-main my-2">
        <div className="container grid grid-3">
            <div className="card flex">
            <div className="page-banner">
                <img src="images/services/banner.jpg" alt="banner" />
            </div>
            </div>
            <div className="card flex">
            <i class="fas fa-hospital"></i>
                <h4>Health and Medical</h4>
                <p>Read doctor-produced health and medical information written for you to make informed decisions about your health concerns.</p>
                <Link to="/services" className="danger-btn">VIEW OUR SERVICES</Link>
            </div>
            <div className="card flex">
            <i className="fas fa-first-aid"></i>
               <h4>Rehabilitation Center</h4>
                <p>When you or a loved one is overwhelmed by alcohol addiction or drug abuse, we know that you want help from a place you can trust.</p>
               
            </div>
            <div className="card flex">
            <i className="fas fa-medkit"></i>
                <h4>Medical Counseling</h4>
                <p>The Medical Counselling Committee is an organisation under the Directorate General of Health Services affiliated to the Ministry of Health and Family Welfare,</p>
            </div>
            <div className="card flex">
            <i class="fas fa-user-md"></i>
               <h4>Qualified Doctors</h4>
                <p>Find Usa Doctor List. Large Selection. Always Sale. Cheap Prices. Full Offer. Save Online. Compare Online. Simple Search. The Best Price. Compare Simply.</p>
            </div>
            <div className="card flex">
            <i class="fas fa-ambulance"></i>
                <h4>Emergency Services</h4>
                <p>Find Cleaning Services Los Angeles. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. </p>
            </div>
        </div>
    </section>
        </div>
    )
}

export default ServicesType
