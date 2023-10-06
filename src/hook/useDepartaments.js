// const {getDeparments} = useDeparments()
  
import { useState,useEffect } from "react";
export const useDepartaments=()=>{
    
    const [departaments, setDepartaments] = useState([]);

    const getDeparments= async()=>{
      try {
        // Realiza la solicitud GET al endpoint utilizando fetch
        const response = await fetch('http://localhost:3000/api/locations/getDepartaments');
    
        // Verifica si la respuesta es exitosa (código 200)
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
  
        const data = await response.json();
        setDepartaments(data)
        console.log(departaments);
  
      } catch (error) {
        console.error('Error al realizar la consulta:', error.message);
      }
   
    }
    useEffect(() => {
        getDeparments();
    }, []); 
    return {departaments}
}