import { useContext, useState } from 'react'
import { useRouter } from "next/router";
import { MyContext } from '../../context/dataContext'
import Image from 'next/image';
const Lawyer = () => {
    const data = useContext(MyContext);
    // const citys = data.dataCitys;
    const router = useRouter();
    const [cityRouter, setCityRouter] = useState(router.query.id)


    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>Este es el ID del usuario: {cityRouter}</p>
            <div className='grid grid-cols-2 gap-4 '>
                <div>

                    <div className=' bg-sky-700 text-white mb-4 p-3'>
                        <p className='font-bold'>Lieda. Ejemplo Número Uno</p>
                        <small>Coliegiado Activo Nro: <spna className="text-stone-700">123456789</spna></small>
                    </div>
                    <div>
                        <Image src="/perfil.webp" width="0" height="0" layout='responsive' />

                    </div>
                </div>
                <div>

                    <div className=' text-end p-3'>
                        <button className='p-2 bg-cyan-500  hover:bg-cyan-600 duration-200 hover:shadow-md hover:scale-90 rounded mx-1 my-3'>Comparte perfil</button>
                    </div>
                    <div>
                        <Image src="/" alt='mapa' width="0" height="0" layout='responsive' />
                    </div>
                    <div className='border-2 border-sky-700 p-4 text-center'>
                        <h2 className='font-bold text-center my-4'>Atendemos clientes en:</h2>

                        <ul className='grid grid-cols-2 '>
                            <li className='my-1'>
                                ⭐El Salvador
                            </li>
                            <li className='my-1'>
                                ⭐Europa
                            </li>
                            <li className='my-1'>
                                ⭐USA, Canada
                            </li>
                            <li className='my-1'>
                                ⭐Resto del mundo
                            </li>
                        </ul>

                    </div>
                </div>
                <div className='border-2 border-sky-700 p-4'>
                    <table class="table-auto w-full text-center">
                        <thead>
                            <tr>
                                <th>Horario</th>
                                <th>AM</th>
                                <th>PM</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr>
                                <td>Lunes</td>
                                <td>8:00</td>
                                <td>5:00</td>
                            </tr>
                            <tr>
                                <td>Martes</td>
                                <td>8:00</td>
                                <td>5:00</td>
                            </tr>
                            <tr>
                                <td>Miercoles</td>
                                <td>8:00</td>
                                <td>5:00</td>
                            </tr>
                            <tr>
                                <td>Jueves</td>
                                <td>8:00</td>
                                <td>5:00</td>
                            </tr>
                            <tr>
                                <td>Viernes</td>
                                <td>8:00</td>
                                <td>5:00</td>
                            </tr>
                            <tr>
                                <td>Domingo</td>
                                <td>Cerrado</td>
                                {/* <td>5:00</td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='border-2 border-sky-700 p-4'>
                    <h2 className='font-bold text-center my-4'>Especialistas en:</h2>

                </div>
            </div>
        </div>
    );
}

export default Lawyer;