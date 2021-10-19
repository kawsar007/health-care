import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import {services} from '../../data.js';

function ServicesDetails() {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    console.log(service, "This is my single services");
 
    useEffect(() => {
        fetch(`./services.json/${serviceId}`)
           .then(res => res.json())
           .then(data => setService(data))
    }, [serviceId])

    return (
        <div>
            <h2>This is ServicesDetails {serviceId}</h2>
        </div>
    )
}

export default ServicesDetails;
