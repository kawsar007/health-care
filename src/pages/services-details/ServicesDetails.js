import React from 'react';
import { useParams } from 'react-router';
// import {services} from '../../data.js';

function ServicesDetails() {
    const {serviceId} = useParams();

    return (
        <div>
            <h2>This is ServicesDetails {serviceId}</h2>
        </div>
    )
}

export default ServicesDetails
