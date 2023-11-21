import { useState,useEffect } from "react";
import { API_URL } from "../../config";
export const useSpecialties=()=>{
    
    const [specialties, setSpecialties] = useState([]);

    const getSpecialties= async()=>{
      try {
        // Realiza la solicitud GET al endpoint utilizando fetch
        const response = await fetch(`${API_URL}/specialties`);
    
  
        const data = await response.json();
        setSpecialties(data.data)
  
      } catch (error) {
        console.error('Error al realizar la consulta:', error.message);
      }
   
    }
    useEffect(() => {
        getSpecialties();
    }, []); 
    return {specialties}
}