import { API_URL } from "../../config";

export const useLawyers=()=>{
    
    const getLawyers= async()=>{
      try {
        // Realiza la solicitud GET al endpoint utilizando fetch
        const response = await fetch(`${API_URL}/lawyers?populate[photo][fields][0]=url`);
    
        // Verifica si la respuesta es exitosa (código 200)
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
  
        const data = await response.json();
        // setLawyers(data)
        // console.log(departaments);
        return data.data;
  
      } catch (error) {
        console.error('Error al realizar la consulta:', error.message);
      }
   
    }
    // useEffect(() => {
    //     getLawyers();
    // }, []); 
    return {getLawyers}
}