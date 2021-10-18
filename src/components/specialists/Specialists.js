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
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
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
