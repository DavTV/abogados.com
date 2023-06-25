import {useContext,useState } from 'react'
import { useRouter } from "next/router";
import { MyContext } from '../../context/dataContext'
import Image from 'next/image';
const Lawyer = () => {
    const data =  useContext(MyContext);
    // const citys = data.dataCitys;
    const router = useRouter();
    const [cityRouter, setCityRouter] = useState(router.query.id)


    return ( 
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>Este es el ID del usuario: {cityRouter}</p>
            <div className='grid grid-cols-2 gap-4 '>
            <div>

                <div className=' bg-sky-700 text-white mb-4 p-3'>
                    <p className='font-bold'>Lieda. Ejemplo Número Uno</p>
                    <small>Coliegiado Activo Nro: <spna className="text-stone-700">123456789</spna></small>
                </div>
                <div>
                    <Image  src="/perfil.webp" width="0" height="0" layout='responsive'/>
                </div>
            </div>
            <div>

<div className=' text-end p-3'>
    <button className='p-2 bg-cyan-500  hover:bg-cyan-600 duration-200 hover:shadow-md hover:scale-90 rounded mx-1 my-3'>Comparte perfil</button>
</div>
<div>
    <Image  src="/" alt='mapa' width="0" height="0" layout='responsive'/>
</div>
</div>
            </div>
        </div>
     );
}
 
export default Lawyer;