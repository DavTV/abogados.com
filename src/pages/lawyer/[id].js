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
        <div className='mt-5 p-4'>
            <br />
            <h2 className='h1 text-center'>Profesional: {cityRouter}</h2>
            <hr />
            <div className=' my-4 text-end'>
                <button className='btn btn-primary text-white'>Comparte perfil</button>
            </div>
            <div className='row'>

                <div className=' col-12 col-md-6 p-4  bg-primary '>
                    <div className=' w-100 text-white p-3 col-12 col-md-6'>
                        <p className='font-bold'>Lieda. Ejemplo Número Uno</p>
                        <small>Coliegiado Activo Nro: <spna className="text-stone-700">123456789</spna></small>
                    </div>
                    <div>
                        <Image src="/perfil.webp" width="0" height="0" layout='responsive' />

                    </div>
                </div>
                <div className='col-12 col-md-6'>

                  
                    <table class="table text-center">
                        <thead>
                            <tr>
                                <th>Horario</th>
                                <th>AM</th>
                                <th>PM</th>
                            </tr>
                        </thead>
                        <tbody >
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
                    {/* <div style={{ "maxHeight": "400px", "overflow": "hidden" }} className="my-3 p-3 md:p-0 border-2 border-sky-700 ">
                        <Image src="/mapa.PNG" alt='mapa' width="0" height="0" layout='responsive' />
                    </div> */}
                </div>
                
            </div>
            <div className='row my-4 text-white bg-info'>
                <div className=' col-12 col-md-6 p-4'>
                <div className=' py-3'>
                        <h2 className='text-center text-white my-4'>Atendemos clientes en:</h2>

                        <ul className='row list-none text-center'>
                            <li className='my-1 col-6'>
                                ⭐El Salvador
                            </li>
                            <li className='my-1 col-6'>
                                ⭐Europa
                            </li>
                            <li className='my-1 col-6'>
                                ⭐USA, Canada
                            </li>
                            <li className='my-1 col-6'>
                                ⭐Resto del mundo
                            </li>
                        </ul>

                    </div>
                </div>
                <div className=' col-12 col-md-6 p-4'>
                    <h2 className='font-bold text-center text-white my-4'>Especialistas en:</h2>
                    <ul className='text-center list-none'>
                        <li className='my-1'>
                            Asunto A, preuba de asusnto para cuadro.
                        </li>
                        <li className='my-1'>
                            Asunto B, preuba de asusnto para cuadro.
                        </li>
                        <li className='my-1'>
                            Asunto C,preuba de asusnto para cuadro.
                        </li>
                        <li className='my-1'>
                            Asunto D,preuba de asusnto para cuadro.
                        </li>
                    </ul>

                </div>
            </div>
            <div className='row border  border-info my-4 p-3'>

                <p> <span className='text-info fw-bold'>Descripcion del servicio: </span>
                    Campo para escribir todas las cosas que hace las características del servicoo y cualquier otra información.
                </p>
                <p>
                Campo para escribir todas las cosas que hace las características del servicoo y cualquier otra información., Campo para escribir todas las cosas que hace las características del servicoo y cualquier otra información.
                </p>
            </div>
        </div>
    );
}

export default Lawyer;