import { useState } from 'react'
import { API_URL } from "../../config";

// import Map from '../components/map/Map';
export const useLawyer=()=>{
    // const [id_lawyer, setId_lawyer] = useState(router.query.id)

    const [municipalities, setMunicipalities] = useState([]);
    const [departaments, setDepartaments] = useState([]);
    const [specialties, setSpecialties] = useState([]);
    const [lawyer, setLawyer] = useState({});
    const [experiences, setExperiences] = useState([]);
    // const google= "AIzaSyBn6M-RfKSn_eyAml9FdSfnEIZlPuOemtY"}
    const [googleLoaded, setGoogleLoaded] = useState(false);
    const [attention, setAttention] = useState([]);
    const [office_location, setOffice_location] = useState([]);
   const [id, setId] = useState("");
    const getInfoLawyer = async (id_lawyer) => {
        try {

            const response = await fetch(`${API_URL}/lawyers?filters[id]=${id_lawyer}&populate=*`)
            const data = await response.json();
            const { municipalities, specialties,experiences,attentions, departaments } = data.data[0].attributes;

            setLawyer(data.data[0].attributes)
            setMunicipalities(municipalities.data);
            setDepartaments(departaments.data)
            setSpecialties(specialties.data);
            setExperiences(experiences.data);
            setId(data.data[0].id)
            console.log(attentions,"nueva data atencion")
            // const id_attention = data.data[0].attributes.attentions.data[0].id
            // console.log(id_attention,"id-attemtion")
           
            setAttention(attentions.data)
        } catch (error) {
            console.error('Error al realizar la consulta:', error.message);
        }
    };
  
    return {getInfoLawyer,lawyer,departaments,specialties,experiences,id,setLawyer,attention}
}