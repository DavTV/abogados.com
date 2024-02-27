import Image from "next/image";
import Link from "next/link";
import { API_IMG } from "../../../config";
const Card = ({ id, image, name, school_number, city, category }) => {
  console.log(API_IMG+image,"foto")
const imageLoader = () => {
    return `${image}`
}
   
  return (
    <div className="p-2 text-center">
      <div className="border  border-info">
        <Image src={image } loader={imageLoader} className="w-100" width="0" height="0" style={{"maxHeight":"200px", "objectFit":"cover"}} layout="responsive" alt={name} />
        <div className="p-3">
          <p className="text-info">{name}</p>
          <span>{category}</span>
          <p>NC: {school_number}</p>
          <div className=" my-2">
            <Link href={`/lawyer/${id}`} className=" btn btn-primary  ">Consultar</Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;