import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

const items = [
  {
    src: "assets/avatar2banner.jpg",
    altText: "Slide 1",
    eyebrow: "New This Week",
    header: "AVATAR THE WAY OF WATER",
    key: "1",
  },
  {
    src: "assets/pussinbootsbanner.jpg",
    altText: "Slide 2",
    eyebrow: "New This Week",
    header: "PUSS IN BOOTS: THE LAST WISH",
    key: "2",
  },
  {
    src: "assets/skinamarinkbanner.jpg",
    altText: "Slide 3",
    eyebrow: "New This Week",
    header: "SKINAMARINK",
    key: "3",
  },
];

function CustomCarousel() {
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
        <img src={item.src} alt={item.altText} />
        <div className="carousel-caption">
          <p className="movieCarousel__eyebrow">{item.eyebrow}</p>
          <p className="movieCarousel__caption">{item.header}</p>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CustomCarousel;
