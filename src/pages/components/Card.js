import Image from "next/image";
import Link from "next/link";

const Card = ({id,image, name, description, city, category}) => {
    return ( 
        <div className="text-white mx-1 duration-200 hover:shadow-md hover:scale-90 text-start ">
        <div className="bg-sky-700 border border-sky-700 ">
        <Image src="/perfil.webp" className="w-full" width= "300" height= "300" alt={name} />
        <div className="p-3">
        <h3 className="font-bold">{name} - {city}</h3>
        <span>{category}</span>
        <p>{description}</p>
        <div className=" my-2">
        <Link href={`/lawyer/${id}`} className="p-2 bg-stone-400 hover:bg-stone-500 duration-200 hover:shadow-md hover:scale-90 hover:text-white rounded  font-bold  text-base  ">Consultar gratis</Link>

        </div>
        </div>
        </div>
      </div>
     );
}
 
export default Card;