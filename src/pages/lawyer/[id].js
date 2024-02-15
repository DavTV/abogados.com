import Image from 'next/image';
import { useEffect } from 'react';
import Perfil from '../../../public/perfil.png'
import { useLawyer } from '@/hook/useLawyer';
import { useRouter } from "next/router";
import { API_IMG } from '../../../config';

const Lawyer = () => {
    const router = useRouter();
    const id_lawyer = router.query.id;  
    const {getInfoLawyer,lawyer,departaments,specialties,experiences,id,attention} = useLawyer();
    const aux =  lawyer.photo ? lawyer.photo.data : Perfil.src ;       
    // console.log(lawyer.photo,"poto")
    // console.log(aux)
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

            <div className=' col-12 col-md-4 p-4  bg-primary '>
                    <div className='text-center w-100 text-white p-3 col-12 col-md-6'>
                        <p className='font-bold'>Activo</p>
                        <small>Coliegiado Activo Nro: <spna className="text-stone-700">{lawyer.school_number}</spna></small>
                    </div>
                    <div className="text-center" >
                        <Image src={aux[0].attributes ? API_IMG+aux[0].attributes.url:Perfil.src} width="300" height="300"  alt={lawyer.name} />
                        <div className='my-3 text-white'>

                            <p>Abogado : <span className="mx-1">{lawyer.name }</span></p>
                            <small> Celular :  {lawyer.phone}</small>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-8'>

            {/* actualizando el class por className */}
            { attention.length > 0 ?
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>Horario</th>
                                <th>AM</th>
                                <th>PM</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                          
                                attention.map( day =>{
                                    return (        
                                    <tr>
                                        <td>{day.attributes.day}</td>
                                        <td>{day.attributes.hourStart || "No"}</td>
                                        <td>{day.attributes.hourEnd || "Attención"}</td>
                                    </tr>
                                   )}
                                )
                                
                            } 
                        </tbody>
                    </table>: <div className='p-3 my-3 d-flex align-items-center justify-content-center h-100'><p className='h1'>Sin Horario</p></div>
} 
    
                </div>

            </div>
            <div className='row my-4 text-white bg-info align-items-start'>
                <div className=' col-12 col-md-6 p-4'>
                    <div >
                        <h2 className='text-center text-white my-4'>Atendemos clientes en:</h2>

                        <ul className='row list-none text-center'>
                            {
                                // console.log(municipalities,"las municipalidades")
                                departaments.map((departament)=>{
                                       return   <li className='my-1 col-6 text-center'> ⭐ {departament.attributes.name}  </li>
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