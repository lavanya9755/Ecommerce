import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomeSectionCarousel = ({data,sectionName}) => {
    const carouselRef = useRef(null); // Use ref to control carousel
    const [activeIndex, setActiveIndex] = useState(0); // Track the current slide index

    // Responsive settings
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    // Carousel items
    const items = data.slice(0, 10).map((item, index) => (
        <HomeSectionCard key={index} product={item} />
    ));

    // Move to previous slide
    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    // Move to next slide
    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    // Sync active index when slide changes
    const handleSlideChange = (e) => {
        setActiveIndex(e.item);
    };

    return (
        <div className="border">
            <h2 className="text-2x1 font-extrabold text-gray-800 py-5">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    keyboardNavigation
                    onSlideChanged={handleSlideChange} // Sync index
                />

                {/* Left Button - No Change in UI */}
                {activeIndex !== 0 && (
                    <Button
                        variant="contained"
                        className="z-50 bg-black"
                        onClick={slidePrev}
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            left: "1rem",
                            transform: "translateY(-50%) rotate(90deg)",
                            bgcolor: "black",
                        }}
                        aria-label="previous"
                    >
                        <ArrowCircleLeftIcon sx={{ transform: "rotate(-90deg)" }} />
                    </Button>
                )}

                {/* Right Button - No Change in UI */}
                {activeIndex < items.length - 5 && (
                    <Button
                        variant="contained"
                        className="z-50 bg-black"
                        onClick={slideNext}
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            right: "1rem",
                            transform: "translateY(-50%) rotate(90deg)",
                            bgcolor: "black",
                        }}
                        aria-label="next"
                    >
                        <ArrowCircleLeftIcon sx={{ transform: "rotate(90deg)" }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
