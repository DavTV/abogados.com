import { useMunicipalities } from "@/hook/useMunicipalities";
import { useSpecialties } from "@/hook/useSpecialties";
import { useState } from "react"; 
import { API_URL } from "../../config";
import { useDepartaments } from "./useDepartaments";
export const useFilter=(setDataFilter)=>{
    const {municipalities} = useMunicipalities();
    const{departaments} = useDepartaments();
    const {specialties} = useSpecialties();
    const [departamentSelect, setDepartamentSelect] = useState('');
    const [specialtieSelect, setSpecialtieSelect] = useState('');
    // const router = useRouter();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(departamentSelect,specialtieSelect)
        if(departamentSelect == "" || specialtieSelect == ""){
            alert("Llene todos los datos primero.")
            return;   
        }
         try {
           
            // Realiza la solicitud GET al endpoint utilizando fetch
            
            const response = await fetch(`${API_URL}/lawyers?population=*&filters[departaments][name][$eq]=${departamentSelect}&filters[specialties][name][$eq]=${specialtieSelect}`);
        
            
            const data = await response.json();
            console.log("filtrada",data.data);
            setDataFilter(data.data,departamentSelect)
            // if(router){
            //     router.push('/listLawyer');
            // }
          } catch (error) {
            console.error('Error al realizar la consulta:', error.message);
          }
       
        }
        return{handleSubmit,setDepartamentSelect,setSpecialtieSelect,departaments,specialties}
        
}