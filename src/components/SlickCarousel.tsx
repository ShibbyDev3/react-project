// @ts-ignore
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider id="movieCarousel" {...settings}>
      <div className="carousel-item">
        <Link to="/movies/avatar-the-way-of-water">
          <img src="assets/avatar2banner.jpg" alt="Slide 1" />
          <div className="carousel-caption">
            <p className="movieCarousel__eyebrow">New This Week</p>
            <p className="movieCarousel__caption">AVATAR THE WAY OF WATER</p>
          </div>
        </Link>
      </div>
      <div className="carousel-item">
        <Link to="/movies/puss-in-boots-the-last-wish">
          <img src="assets/pussinbootsbanner.jpg" alt="Slide 2" />
          <div className="carousel-caption">
            <p className="movieCarousel__eyebrow">New This Week</p>
            <p className="movieCarousel__caption">PUSS IN BOOTS: THE LAST WISH</p>
          </div>
        </Link>
      </div>
      <div className="carousel-item">
        <Link to="/movies/skinamarink">
          <img src="assets/skinamarinkbanner.jpg" alt="Slide 3" />
          <div className="carousel-caption">
            <p className="movieCarousel__eyebrow">New This Week</p>
            <p className="movieCarousel__caption">SKINAMARINK</p>
          </div>
        </Link>
      </div>
    </Slider>
  );
}
