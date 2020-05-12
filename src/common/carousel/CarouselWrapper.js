import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

export const CarouselWrapper = (props) => {
  const { images } = props;

  if (!images || images.length === 0) return <></>;

  return (
    <div className="carousel-wrapper">
      <Carousel
        autoPlay={true}
        showArrows={true}
        infiniteLoop={true}
        dynamicHeight={true}
        // showIndicators={true}
      >
        {images.map((img) => {
          return (
            <div key={img}>
              <img alt="" src={img} />
              {/* <p className="legend">Legend</p> */}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
