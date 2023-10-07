import { useContext, useState } from 'react'
import { useRouter } from "next/router";
// import { MyContext } from '../../context/myContext'
import Image from 'next/image';
import Map from '../components/map/Map';
import { useEffect } from 'react';
const Lawyer = () => {
    // const data = useContext(MyContext);
    // const citys = data.dataCitys;
    const router = useRouter();
    const [id_lawyer, setId_lawyer] = useState(router.query.id)
    const [municipalities, setMunicipalities] = useState([]);
    const [specialtys, setSpecialtys] = useState([]);
    const [lawyer, setLawyer] = useState({});
    const [experience, setExperience] = useState([]);
    // const google= "AIzaSyBn6M-RfKSn_eyAml9FdSfnEIZlPuOemtY"}
    const [googleLoaded, setGoogleLoaded] = useState(false);
    const [office_location, setOffice_location] = useState([]);
    
    
   
    
    const getInfoLawyer = async () => {
        try {
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ id_lawyer })
          };
      
          
          const [response, response2, response3, response4] = await Promise.all([
            fetch('http://localhost:3000/api/lawyers/getLawyer', options),
            fetch('http://localhost:3000/api/specialty/getSpecialtyLawyer', options),
            fetch('http://localhost:3000/api/locations/getMunicipalitiesLawyer', options),
            fetch('http://localhost:3000/api/experience/getExperience', options)
          ]);
      
        // comentario
          if (!response.ok || !response2.ok || !response3.ok || !response4.ok) {
            throw new Error('Error al obtener los datos');
          }
      
        
          const [data, data2, data3, data4] = await Promise.all([
            response.json(),
            response2.json(),
            response3.json(),
            response4.json()
          ]);
      
          console.log(data4);
      
         
          setLawyer(data);
          setSpecialtys(data2);
          setMunicipalities(data3.result);
          setExperience(data4);
          setOffice_location(data.office_location.split(','));
        } catch (error) {
          console.error('Error al realizar la consulta:', error.message);
        }
      };
      
    
    useEffect(()=>{
        getInfoLawyer();
},[])
useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBn6M-RfKSn_eyAml9FdSfnEIZlPuOemtY&v=3.exp&libraries=geometry,drawing,places`;
    script.onload = () => {
      setGoogleLoaded(true);
    };
    document.body.appendChild(script);
  }, []);

//    if (!googleLoaded) {
//         return <div>Loading Google Maps...</div>;
//     }
    return (
        <div className='mt-5 p-4'>
            <br />
            <h2 className='h1 text-center'>Profesional: {lawyer.name_lawyer} </h2>
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
                        <Image src="/perfil.webp" width="0" height="0" layout='responsive' />
                    <div className='my-3 text-white'>

                        <p>Abogado: {lawyer.name_lawyer}</p>
                        <small> Celular: {lawyer.phone_number}</small>
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
                                // console.log(municipalities)
                                municipalities.map((municipalitie)=>{
                                       return   <li className='my-1 col-6 text-center'> ⭐ {municipalitie.name_municipalities}  </li>
                                })
                            }
                           
                        </ul>

                    </div>
                </div>
                <div className=' col-12 col-md-6 p-4'>
                    <h2 className='font-bold text-center text-white my-4'>Especialistas en:</h2>
                    <ul className='text-center list-none'>
                        {
                         specialtys.map((specialty)=>{
                              return (
                                <li className='my-1'>
                                    {specialty.description_specialty}
                                </li>

                              )
                          })  
                        }
                        
                    </ul>

                </div>
            </div>
            {/* <div className='row border  border-info my-4 p-3'>

                <p> <span className='text-info fw-bold'>Descripión del servicio: </span></p>
                <p>Esta va a ser la descripción del servicio ofrecido por el abogado e esta página, puede ser una descripción en general de sus servicios coorente a sus especialidades
                </p>
              
            </div> */}
           
           <div>
               {
//   console.log(lawyer.office_location)

               }
                {
                   
                    //    console.log(office_location)
                       !googleLoaded  ?  <div>Cargando Mapa</div> :  <Map
                       containerElement={<div style={{ height: '500px', width: '100%' }} />}
                       mapElement={<div style={{ height: '100%' }} />}
                       location={office_location}
                     />
                       
               
                }
           

            </div>
            <div className='row border  border-info my-4 p-3'>

                <p> <span className='text-info fw-bold'>Experiencias: </span></p>
                {
                    experience.map((exp)=>{
                        return <p>{exp.description_experience}</p>
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