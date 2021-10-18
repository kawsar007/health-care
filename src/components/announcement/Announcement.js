import React from 'react';
import './Announcement.css';

function Announcement() {
    return (
        <div className="announcement">
            <div className="announcement_left">
                <p>Welcome to MedicalPress a Premium Medical Theme</p>
            </div>
            <div className="announcement_right">
                <p>Opening Hours :<span className="time"> Monday to Saturday - 8am to 9pm</span>  Contact : <span  className="time"> +1-800-654-3210</span></p>
            </div>
        </div>
    )
}

export default Announcement
