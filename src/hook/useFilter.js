import { useMunicipalities } from "@/hook/useMunicipalities";
import { useSpecialties } from "@/hook/useSpecialties";
import { useState } from "react"; 
import { API_URL } from "../../config";
export const useFilter=(setDataFilter)=>{
    const {municipalities} = useMunicipalities();
    const {specialties} = useSpecialties();
    const [municipalitieSelect, setMunicipalitiesSelect] = useState('');
    const [specialtieSelect, setSpecialtieSelect] = useState('');
    // const router = useRouter();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(municipalitieSelect,specialtieSelect)
        if(municipalitieSelect == "" || specialtieSelect == ""){
            alert("Llene todos los datos primero.")
            return;   
        }
         try {
           
            // Realiza la solicitud GET al endpoint utilizando fetch
            
            const response = await fetch(`${API_URL}/lawyers?population=*&filters[municipalities][name][$eq]=${municipalitieSelect}&filters[specialties][name][$eq]=${specialtieSelect}`);
        
            
            const data = await response.json();
            console.log("filtrada",data.data);
            setDataFilter(data.data,municipalitieSelect)
            // if(router){
            //     router.push('/listLawyer');
            // }
          } catch (error) {
            console.error('Error al realizar la consulta:', error.message);
          }
       
        }
        return{handleSubmit,setMunicipalitiesSelect,setSpecialtieSelect,municipalities,specialties}
        
}