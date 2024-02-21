import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import { useLawyers } from "@/hook/useLawyers";
import { useState, useEffect } from "react"
import Perfil from '../../../public/perfil.png'
import { API_IMG } from "../../../config";


const SliderCard = () => {
  const { getLawyers } = useLawyers();
  const [lawyers, setLawyers] = useState([]);

  const getLawyersPromise= async()=>{
    const result = await getLawyers();
    if (result) setLawyers(result);

  }
  useEffect(() => {
    getLawyersPromise()
  }, []);


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
          lawyers.length > 0 && lawyers.map((lawyer) => {
            const aux = lawyer.attributes.photo.data;
            return <Card image={aux ?`${API_IMG}${aux[0].attributes.url}`:Perfil.src} name={lawyer.attributes.name} school_number={lawyer.attributes.school_number} key={lawyer.attributes.id} id={lawyer.id} city="ejemplo" /> 
            // return <Card image={Perfil} name={lawyer.attributes.name} school_number={lawyer.attributes.school_number} key={lawyer.attributes.id} id={lawyer.id} city="ejemplo" /> 
          })
        }
      </Slider>
    </div>
  );

}

export default SliderCard;