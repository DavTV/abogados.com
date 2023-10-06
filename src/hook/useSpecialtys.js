// const {getDeparments} = useDeparments()
  
import { useState,useEffect } from "react";
export const useSpecialtys=()=>{
    
    const [specialtys, setSpecialtys] = useState([]);

    const getSpecialtys= async()=>{
      try {
        // Realiza la solicitud GET al endpoint utilizando fetch
        const response = await fetch('http://localhost:3000/api/specialty/getSpecialtys');
    
        // Verifica si la respuesta es exitosa (código 200)
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
  
        const data = await response.json();
        setSpecialtys(data)
        console.log(specialtys);
  
      } catch (error) {
        console.error('Error al realizar la consulta:', error.message);
      }
   
    }
    useEffect(() => {
        getSpecialtys();
    }, []); 
    return {specialtys}
}