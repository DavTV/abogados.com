import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Testimone from "./Testimone";
const SliderTestimone = ({data}) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplaySpeed: 2000,
        responsive: [
          {
              breakpoint: 1000,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
              }
          },
          {
              breakpoint: 700,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          }
  
    ]
  
      };
      return (
       <div className="my-4">
        <Slider {...settings}>
            <Testimone key={1} />
            <Testimone key={2}/>
            <Testimone key={3}/>
            <Testimone key={4}/>
            <Testimone key={5}/>
            <Testimone key={6}/>
            <Testimone key={7}/>
        </Slider>
       </div> 
      );
    
}
 
export default SliderTestimone;