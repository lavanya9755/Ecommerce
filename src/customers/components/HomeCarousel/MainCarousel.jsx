import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
    // const navigate =useNavigate
    const items = mainCarouselData.map((item)=> <img className="cursor-pointer" role="presentation" src={item.path} alt="abc"/>);
    return(
    
    <AliceCarousel
        disableButtonsControls
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
        touchTracking={true}
        
    />
 
    )
}

export default MainCarousel;