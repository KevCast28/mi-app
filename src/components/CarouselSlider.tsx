import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from '../img/slider1.png';
import slider2 from '../img/slider2.jpg';
import slider3 from '../img/slider3.jpg';

export const CarouselSlider = () => {
  return (
    <Carousel className='carousel-container'>
                <div>
                    <img src={slider1} className='padding-img' />
                    <p className="legend">Hola</p>
                </div>
                <div>
                    <img src={slider2} className='padding-img' />
                    <p className="legend">Hola2</p>
                </div>
                <div>
                    <img src={slider3} className='padding-img' />
                    <p className="legend">Hola3</p>
                </div>
            </Carousel>
  )
}

export default CarouselSlider;
