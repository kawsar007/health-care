import React from 'react';
import '../../css/utilities.css';
import './ServicesType.css';

function ServicesType() {
    return (
        <div>
            <section className="features-main my-2">
        <div className="container grid grid-3">
            <div className="card flex">
                <i className="fas fa-server fa-3x"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis iure, minima impedit quae fuga consequuntur sunt dolor. Quibusdam, corporis?</p>
            </div>
            <div className="card flex">
            <i class="fas fa-hospital"></i>
                <h4>Health and Medical</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis iure, minima impedit quae fuga consequuntur sunt dolor.</p>
                <button type="button" className="danger-btn">VIEW OUR SERVICES</button>
            </div>
            <div className="card flex">
            <i className="fas fa-first-aid"></i>
               <h4>Rehabilitation Center</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
               
            </div>
            <div className="card flex">
            <i className="fas fa-medkit"></i>
                <h4>Medical Counseling</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card flex">
            <i class="fas fa-user-md"></i>
               <h4>Qualified Doctors</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card flex">
            <i class="fas fa-ambulance"></i>
                <h4>Emergency Services</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </section>
        </div>
    )
}

export default ServicesType
