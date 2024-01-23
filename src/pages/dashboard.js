import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image"
import FormPerfil from "./components/FormPerfil";
import { useLawyer } from "@/hook/useLawyer";
import { useUpdatePerfil } from "@/hook/useUpdatePerfil";
import Perfil from '../../public/perfil.png'
import { useMunicipalities } from "@/hook/useMunicipalities";
import { useModal } from "@/hook/useModal";
import { useSpecialties } from "@/hook/useSpecialties";
import FormAttention from "./components/FormAttention";
import { useDepartaments } from "@/hook/useDepartaments";

const Dashboard = () => {
    const { data: session, status } = useSession([]);
    const allMunicipalities = useMunicipalities().municipalities;
    const allDerpartaments = useDepartaments().departaments;
    const allSpecialties = useSpecialties().specialties;
    console.log(allDerpartaments,"departamentos")
    const { getInfoLawyer, lawyer, municipalities, specialties, experiences, id, attention } = useLawyer();
    const { handleModal, isModalOpen } = useModal();
    const { handleBlur, handleChange, userUpdate, onUpdate, addNewData, deleteData,loading } = useUpdatePerfil(id, getInfoLawyer, lawyer, handleModal);
    useEffect(() => {
        if (status === "authenticated" && session.user) {
            const id_lawyer = session.user.data[0].id;
            getInfoLawyer(id_lawyer);
        }
    }, [status, session]);



    return (
        lawyer ? <div className='mt-5 p-4'>
            <br />
            <h2 className='h1 text-center'>Profesional: {lawyer.name} </h2>
            <hr />
            <div className=' my-4 text-end'>
                <button className='btn btn-primary text-white'>Comparte perfil</button>
            </div>
            <div className={`p-3 ${isModalOpen == false && 'd-none'}`} style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,

                backgroundColor: "rgba(10,10,10,.4)",
            }}>
           
                {/*Inicio Modal */}
                <div className="w-100 h-100 bg-white" style={{ "overflow": "scroll" }}>
                    <div className="p-3 text-end"><button className={`btn`} onClick={handleModal} >❌</button> </div>
                    <FormPerfil lawyer={lawyer} handleBlur={handleBlur} handleChange={handleChange} userUpdate={userUpdate} onUpdate={onUpdate} />
                </div>
            

                {/* Fin Modal */}
            </div>
            <div className='row'>
                <div className=' col-12 col-md-4 p-4  bg-primary '>
                    <div className='text-center w-100 text-white p-3 col-12 col-md-6'>
                        <p className='font-bold'>Activo</p>
                        <small>Coliegiado Activo Nro: <spna className="text-stone-700">{lawyer.school_number}</spna></small>
                    </div>
                    <div className="text-center" >
                        <Image src={Perfil} width="300" height="300"  alt={lawyer.name} />
                        <div className='my-3 text-white'>

                            <p>Abogado : <span className="mx-1">{lawyer.name }</span></p>
                            <small> Celular :  {lawyer.phone}</small>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-8 my-3 my-md-0'>
                    <button className='btn btn-primary text-white' onClick={handleModal}>Editar</button>


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
                           { console.log(attention[2])}
                            {
                          
                                attention.map( day =>{
                                    return (        
                                    <tr>
                                        <td>{day.attributes.day}</td>
                                        <td>{day.attributes.hourStart || "--"}</td>
                                        <td>{day.attributes.hourEnd || "--"}</td>
                                    </tr>
                                   )}
                                )
                                
                            } 
                        </tbody>
                    </table>: <div className='p-3 my-3 d-flex align-items-center justify-content-center h-100'><p className='h1'>Sin Horario</p></div>
} 

                </div>
             <FormAttention id_lawyer={id} getInfoLawyer={getInfoLawyer} />
            </div>
            <div className='row my-4 text-white bg-info align-items-start'>
                <div className=' col-12 col-md-6 p-4'>
                    <div >

                        <h2 className='text-center text-white my-4'>Atendemos clientes en:</h2>

                        <ul className='row list-none text-center'>
                            {
                                municipalities.map((municipalitie) => {
                                    return <li className='my-1 col-6 text-center'> {municipalitie.attributes.name} <button className="btn" onClick={() => { deleteData(municipalitie.id, "municipalitie") }} >❌ </button> </li>
                                })
                            }
                            <form onSubmit={addNewData}>
                                <li><input type="hidden" value="municipalitie" name="caso" /> </li>
                                <li className="my-3">
                                    <select className="form-select" name="municipalitie" >
                                        <option>Elige una municipalidad</option>
                                        {
                                            allMunicipalities.map((municipalitie) => {
                                                return <option value={municipalitie.id}>{municipalitie.attributes.name}</option>

                                            })
                                        }
                                    </select>
                                </li>
                                <li><button type="submit" className='btn btn-secondary  w-100'>Agregar</button></li>
                            </form>

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
                                        {specialtie.attributes.name}  <button className="btn" onClick={() => { deleteData(specialtie.id, "specialtie") }}>❌ </button>
                                    </li>

                                )
                            })
                        }
                        <form onSubmit={addNewData}>
                            <li><input type="hidden" value="specialtie" name="caso" /> </li>

                            <li className="my-3">
                                <select className="form-select" name="specialtie" >
                                    <option>Elige una especialidad</option>
                                    {
                                        allSpecialties.map((specialtie) => {
                                            return <option value={specialtie.id}>{specialtie.attributes.name}</option>

                                        })
                                    }
                                </select>
                            </li>
                            <li><button type="submit" className='btn btn-secondary  w-100'>Agregar</button></li>
                        </form>
                    </ul>

                </div>

            </div>

            <div>



            </div>
            <div className='row border  border-info my-4 p-3'>

                <p> <span className='text-info fw-bold'>Experiencias: </span></p>
                {
                    experiences.map((experience) => {
                        return <p key={experience.id}><button className="btn" onClick={() => { deleteData(experience.id, "experience") }}>❌ </button>{experience.attributes.description} </p>
                    })


                }
                <form onSubmit={addNewData}>
                    <p><input type="hidden" value="experience" name="caso" /> </p>


                    <textarea className="form-control" placeholder="Agrega una experiencia" name="experience"></textarea>
                    {loading ? <p>Cargando ...</p> : ""}
                    <p className="my-3"><button type="submit" className='btn btn-primary  w-100' disabled={loading ? true: false } >Agregar</button></p>
                </form>


            </div>
            <div className='text-center '>
                <a className='btn btn-primary my-5'>WhatSapp <Image className='mx-2' src="/whatsapp.png" width="30" height="30" /> </a>
            </div>

        </div> : <p>Cargando ... </p>
    )
}
export default Dashboard;