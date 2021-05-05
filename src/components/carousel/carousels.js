import React from 'react';
import {Carousel} from "react-bootstrap";
import './carousel.css'

function Carousels() {
    return (
        <Carousel fade className="carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    width={900}
                    height={500}
                    src="https://cdn.shopify.com/s/files/1/0309/9246/6055/files/Main-Image-Slider-Desktop-2_b74bbcdd-71d0-4330-bec0-208375f65e5c.jpg?v=1614084668"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    width={900}
                    height={500}
                    src="https://cdn.shopify.com/s/files/1/0309/9246/6055/files/Main-Image-Slider-Desktop-3.jpg?v=1614254987"
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;