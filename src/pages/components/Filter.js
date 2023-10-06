import { useDepartaments } from "@/hook/useDepartaments";
import { useSpecialtys } from "@/hook/useSpecialtys";
import { useFilter } from "@/hook/useFilter";
import {useState} from 'react';
// import { useRouter } from 'next/router';
const Filter = ({setDataFilter}) => {
    // const {citys, categorys,handleSubmit,setCategorySelect,setCitySelect} = useFilter(setDataFilter,setCityRouter);
    const {departaments} = useDepartaments();
    const {specialtys} = useSpecialtys();
    const [apartamentSelect, setApartamentSelect] = useState('');
    const [specialtySelect, setSpecialtySelect] = useState('');
    // const router = useRouter();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(apartamentSelect,specialtySelect)
        if(apartamentSelect == "" || specialtySelect == ""){
            alert("Llene todos los datos primero.")
            return;
        }
         try {
             const options={
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json', // Especificamos que estamos enviando JSON
                },
                body: JSON.stringify({apartamentSelect,specialtySelect})
             }
            // Realiza la solicitud GET al endpoint utilizando fetch
            const response = await fetch('http://localhost:3000/api/lawyers/getLawyersDepartamentSpecialty',options);
        
            // Verifica si la respuesta es exitosa (código 200)
            
            if (!response.ok) {
              throw new Error('Error al obtener los datos');
            }
            
            const data = await response.json();
            console.log("filtrada");
            setDataFilter(data,apartamentSelect)
            // if(router){
            //     router.push('/listLawyer');
            // }
          } catch (error) {
            console.error('Error al realizar la consulta:', error.message);
          }
       
        }
        
    

    return ( 
        <div className=" p-3 my-8 container bg-info my-5">
            <form className="text-center" onSubmit={handleSubmit}>
                <div className="row justify-content-center ">
                <div className="my-2 col-12 col-md-5 ">

                    <select className="form-select" onChange={(e) => { 
                    setApartamentSelect(e.target.value) }    
                
                }>
                        <option value="">Seleciona departamento</option>
                        {
                            departaments.map((departament, index) => {

                                return <option value={departament.id_location} key={departament.id_location} >{departament.name_departament}</option>
                            })
                        }

                    </select>
                </div>
                <div className="my-2 col-12 col-md-5">
                    <select className=" form-select" onChange={(e) => {setSpecialtySelect(e.target.value)} } >
                        <option value="">Seleciona Especialidad</option>
                        {
                            specialtys.map((specialty) => {

                                return <option value={specialty.id_specialty}>{specialty.description_specialty}</option>
                            })
                        }
                    </select>
                </div>
                <div className="my-2 col-12 col-md-2">
                    <button className=" btn btn-primary ">Buscar</button>

                </div>
                </div>
            </form>
        </div>
     );
}
 
export default Filter;