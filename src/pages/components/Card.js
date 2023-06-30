import Image from "next/image";
import Link from "next/link";

const Card = ({id,image, name, description, city, category}) => {
    return ( 
        <div className="p-2">
        <div className="border  border-info">
        <Image src="/perfil.webp" className="w-100" width="0" height="0" layout="responsive" alt={name} />
        <div className="p-3">
        <h5 className="text-info">{name} - {city}</h5>
        <span>{category}</span>
        <p className="truncate-text">{description}</p>
        <div className=" my-2">
        <Link href={`/lawyer/${id}`} className=" btn btn-primary  ">Consultar</Link>

        </div>
        </div>
        </div>
      </div>
     );
}
 
export default Card;