import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images, isFirst }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      {isFirst && (
        <button className="explore-button">
          Explore
        </button>
      )}
      <div className="left-arrow" onClick={goToPrevious}>
        &#10094;
      </div>
      <div className="carousel-image">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <div className="right-arrow" onClick={goToNext}>
        &#10095;
      </div>
    </div>
  );
};

export default Carousel;
