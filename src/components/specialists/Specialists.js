import React from 'react';
import { Button } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { specilized } from '../../data.js';
import './Specialists.css';

function Specialists() {
    return (
        <div className="specialists">
            <div className="specialistsHeader">
                <h2 className="specialistsTitle">Meet our <span className="text-sep">Medical Specialists</span></h2>
                <p>We don't replace your primary doctor, we provide additional care when it's needed most.</p>
            </div>
            <div className="specialists-details">
                {
                    specilized.map(item => (
                        <div className="specialists-info">
                            <img src={item.img} alt="" />
                            <h5 className="specialists-name">{item.name}</h5>
                            <span className="specialists-icon"> <AiOutlinePlus/> </span>
                            <p className="specialists-desc">{item.desc}</p>
                            <Button variant="danger">Read More</Button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Specialists;
