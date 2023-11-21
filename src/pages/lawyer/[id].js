import Image from 'next/image';
import { useEffect } from 'react';
import Perfil from '../../../public/perfil.png'
import { useLawyer } from '@/hook/useLawyer';
import { useRouter } from "next/router";

const Lawyer = () => {
    const router = useRouter();
    const id_lawyer = router.query.id;  
    const {getInfoLawyer,lawyer,municipalities,specialties,experiences,id} = useLawyer();
   

    useEffect(() => {
        getInfoLawyer(id_lawyer);
    }, [])

    return (
        <div className='mt-5 p-4'>
            <br />
            <h2 className='h1 text-center'>Profesional: {lawyer.name} </h2>
            <hr />
            <div className=' my-4 text-end'>
                <button className='btn btn-primary text-white'>Comparte perfil</button>
            </div>
            <div className='row'>

                <div className=' col-12 col-md-6 p-4  bg-primary '>
                    <div className=' w-100 text-white p-3 col-12 col-md-6'>
                        <p className='font-bold'>Activo</p>
                        <small>Coliegiado Activo Nro: <spna className="text-stone-700">{lawyer.school_number}</spna></small>
                    </div>
                    <div>
                        <Image src={Perfil} width="0" height="0" layout='responsive' />
                        <div className='my-3 text-white'>

                            <p>Abogado: {lawyer.name}</p>
                            <small> Celular: {lawyer.phone}</small>
                        </div>
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
            <div className='row my-4 text-white bg-info align-items-start'>
                <div className=' col-12 col-md-6 p-4'>
                    <div >
                        <h2 className='text-center text-white my-4'>Atendemos clientes en:</h2>

                        <ul className='row list-none text-center'>
                            {
                                // console.log(municipalities,"las municipalidades")
                                municipalities.map((municipalitie)=>{
                                       return   <li className='my-1 col-6 text-center'> ⭐ {municipalitie.attributes.name}  </li>
                                })

                            }

                        </ul>

                    </div>
                </div>
                <div className=' col-12 col-md-6 p-4'>
                    <h2 className='font-bold text-center text-white my-4'>Especialistas en:</h2>
                    <ul className='text-center list-none'>
                        {
                            specialties.map((specialtie) => {
                                return (
                                    <li className='my-1'>
                                        {specialtie.attributes.name}
                                    </li>

                                )
                            })
                        }

                    </ul>

                </div>
            </div>
            <div>

                {

                    //    console.log(office_location)
                    // !googleLoaded ? <div>Cargando Mapa</div> : <Map
                    //     containerElement={<div style={{ height: '500px', width: '100%' }} />}
                    //     mapElement={<div style={{ height: '100%' }} />}
                    //     location={office_location}
                    // />


                }


            </div>
            <div className='row border  border-info my-4 p-3'>

                <p> <span className='text-info fw-bold'>Experiencias: </span></p>
                {
                    experiences.map((exp) => {
                        return <p>{exp.attributes.description}</p>
                    })


                }

            </div>
            <div className='text-center '>
                <a className='btn btn-primary my-5'>WhatSapp <Image className='mx-2' src="/whatsapp.png" width="30"  height="30" /> </a>
            </div>

        </div>
    );
}

export default Lawyer;