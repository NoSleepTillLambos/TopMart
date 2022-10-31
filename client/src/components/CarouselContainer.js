import "react-responsive-carousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/carousel.css";
import image1 from "../assets/cobra-irons.jpg";
import image2 from "../assets/callaway-irons.jpg";
import image3 from "../assets/taylormade-irons.jpg";

const CarouselContainer = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay>
        <div className="cobra image">
          <img src={image1} alt="cobra" />
        </div>
        <div className="callaway image">
          <img src={image2} alt="cobra" />
        </div>
        <div className="taylormade image">
          <img src={image3} alt="cobra" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
