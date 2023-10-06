// import { useState,useEffect } from "react";
export const useLawyers=()=>{
    
    // const [lawyers, setLawyers] = useState([]);

    const getLawyers= async()=>{
      try {
        // Realiza la solicitud GET al endpoint utilizando fetch
        const response = await fetch('http://localhost:3000/api/lawyers/getLawyers');
    
        // Verifica si la respuesta es exitosa (código 200)
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
  
        const data = await response.json();
        // setLawyers(data)
        // console.log(departaments);
        return data;
  
      } catch (error) {
        console.error('Error al realizar la consulta:', error.message);
      }
   
    }
    // useEffect(() => {
    //     getLawyers();
    // }, []); 
    return {getLawyers}
}