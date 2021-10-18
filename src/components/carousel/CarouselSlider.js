import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { slider } from '../../data.js';
import './CarouselSlider.css';

function CarouselSlider() {
    return (
        <div className="carousel">
            <Carousel>
                {
                    slider.map(item => (
                        <Carousel.Item interval={2000} key={item.id}>
                            <img
                                className="d-block w-100 slide-image"
                                src={item.img}
                                alt="First slide"
                            />
                            <Carousel.Caption className="carousel-caption">
                                <h3 className="slide-title">{item.title}</h3>
                                <p className="slide-desc">{item.desc}</p>
                                <Button variant="danger">Read More</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }

            </Carousel>
        </div>
    )
}

export default CarouselSlider;
