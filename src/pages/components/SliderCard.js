import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import { useLawyers } from "@/hook/useLawyers";
import {useState,useEffect} from "react"

const SliderCard = () => {
    const {getLawyers} = useLawyers();
    const [lawyers, setLawyers] = useState([]);
    useEffect( () =>{
      console.log(getLawyers)
      getLawyers().then((result)=>{ 
        setLawyers(result)
      })
    }, []);
    console.log(lawyers)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
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
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
  
    ]
  
      };
      return (
       <div className="my-4">
        <Slider {...settings}>

          {
                lawyers.length >0 && lawyers.map((lawyer)=>{
                return <Card image="" name={lawyer.name_lawyer} school_number={lawyer.school_number} key={lawyer.id_lawyer} id={lawyer.id_lawyer}  city="ejemplo" />
              })
          }
        </Slider>
       </div> 
      );
    
}
 
export default SliderCard;