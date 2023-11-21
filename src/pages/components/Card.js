import Image from "next/image";
import Link from "next/link";
import { API_URL } from "../../../config";
const Card = ({ id, image, name, school_number, city, category }) => {
  console.log(id, "id de la card")
  return (
    <div className="p-2 text-center">
      <div className="border  border-info">
        <Image src={image} className="w-100" width="0" height="0" layout="responsive" alt={name} />
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