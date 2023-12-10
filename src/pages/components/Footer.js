import Image from "next/image";
import Link from "next/link";
const Footet = () => {
    return ( 
        <div className="container-lg mx-auto row bg-info text-white p-4">
                <div className="col-6 col-md-4">
                    <p>Políticas y privacidad</p>
                </div>
                <div className="col-6 col-md-4">
                    <p>Terminos y condiciones</p>
                </div>
                <div className="col-6 col-md-2">
                    <p>Referencia de responsabilidad</p>
                    <a src="https://abogadosdb.onrender.com/admin/auth/login" target="_blank"  >Panel de administración</a>
                </div>
                <div className="col-6 col-md-2">
                <p className="text-white font-bold text-3xl"><Link href="/"><Image src="/logo.png" width="150" height="70" /></Link></p>
                </div>

        </div>
     );
}
 
export default Footet;