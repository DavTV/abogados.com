import { useState,useEffect } from "react";
import { API_URL } from "../../config";
export const useDepartaments=()=>{
    
    const [departaments, setDepartaments] = useState([]);
    const getDespartaments= async()=>{
      try {
        // Realiza la solicitud GET al endpoint utilizando fetch
        const response = await fetch(`${API_URL}/departaments`);
    
        // Verifica si la respuesta es exitosa (código 200)
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
  
        const data = await response.json();
        setDepartaments(data.data)
        console.log(departaments);
  
      } catch (error) {
        console.error('Error al realizar la consulta:', error.message);
      }
   
    }
    useEffect(() => {
        getDespartaments();
    }, []); 
    return {departaments}
}