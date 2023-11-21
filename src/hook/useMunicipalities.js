import { useState,useEffect } from "react";
import { API_URL } from "../../config";
export const useMunicipalities=()=>{
    
    const [municipalities, setMunicipalities] = useState([]);
    const getMunicipalities= async()=>{
      try {
        // Realiza la solicitud GET al endpoint utilizando fetch
        const response = await fetch(`${API_URL}/municipalities`);
    
        // Verifica si la respuesta es exitosa (código 200)
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
  
        const data = await response.json();
        setMunicipalities(data.data)
        console.log(municipalities);
  
      } catch (error) {
        console.error('Error al realizar la consulta:', error.message);
      }
   
    }
    useEffect(() => {
        getMunicipalities();
    }, []); 
    return {municipalities}
}