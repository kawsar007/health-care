import React from 'react'
import CarouselSlider from './carousel/CarouselSlider'
import ServicesType from './services-type/ServicesType'
import Specialists from './specialists/Specialists'

function Home() {
    return (
        <div>
            <CarouselSlider/>
            <Specialists/>
            <ServicesType/>
        </div>
    )
}

export default Home
