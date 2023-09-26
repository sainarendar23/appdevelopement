import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "../Assests/images/house-isolated-field.jpg" ;
import image2 from "../Assests/images/top-view-house.jpeg" ;
import image3 from "../Assests/images/home.jpg";

export const CarousalActive = () => {
    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        maxHeight: '700px',
        margin: 'auto',
    };

    return (
        <Carousel showThumbs={false}>
            <div>
                <img src={image1} alt={image1} style={imageStyle} />
            </div>
            <div>
                <img src={image2} alt={image2} style={imageStyle} />
            </div>
            <div>
                <img src={image3} alt={image3} style={imageStyle} />
            </div>
        </Carousel>
    );
}

export default CarousalActive;