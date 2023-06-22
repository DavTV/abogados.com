import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
const SliderCard = ({data}) => {
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
          <Card image="" name="Nombre Prueba" description="Divorcio, patria potestad, compra y venta, etc." key={1} id ={1}/>
          <Card image="" name="Nombre Prueba2" description="Divorcio, patria potestad, compra y venta, etc."key={2} id ={2}/>
          <Card image="" name="Nombre Prueba3" description="Divorcio, patria potestad, compra y venta, etc." key={3} id ={3}/>
          <Card image="" name="Nombre Prueba4" description="Divorcio, patria potestad, compra y venta, etc." key={4} id ={4} />
          <Card image="" name="Nombre Prueba4" description="Divorcio, patria potestad, compra y venta, etc." key={5} id ={5} />
          <Card image="" name="Nombre Prueba4" description="Divorcio, patria potestad, compra y venta, etc." key={6} id={6}/>
          <Card image="" name="Nombre Prueba4" description="Divorcio, patria potestad, compra y venta, etc." key={7} id={7}/>
         
        </Slider>
       </div> 
      );
    
}
 
export default SliderCard;