import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";
import { Link } from 'react-router-dom';

const items = [
  {
    src: "assets/avatar2banner.jpg",
    path: `movies/avatar-the-way-of-water`,
    altText: "Slide 1",
    eyebrow: "New This Week",
    header: "AVATAR THE WAY OF WATER",
    key: "1"
  },
  {
    src: "assets/pussinbootsbanner.jpg",
    path: `movies/puss-in-boots-the-last-wish`,
    altText: "Slide 2",
    eyebrow: "New This Week",
    header: "PUSS IN BOOTS: THE LAST WISH",
    key: "2"
  },
  {
    src: "assets/skinamarinkbanner.jpg",
    path: `movies/skinamarink`,
    altText: "Slide 3",
    eyebrow: "New This Week",
    header: "SKINAMARINK",
    key: "3"
  }
];

function CustomCarousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Link to={item.path}>
        <img src={item.src} alt={item.altText} />
        <div className="carousel-caption">
          <p className="movieCarousel__eyebrow">{item.eyebrow}</p>
          <p className="movieCarousel__caption">{item.header}</p>
        </div>
        </Link>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} {...args}>
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CustomCarousel;
