import { useLawyers } from "@/hook/useLawyers";
import { useRouter } from "next/router";
import { useState } from "react";
import { API_URL } from "../../config";
export const useListLawyer=()=>{
    const router = useRouter();
    const [cityRouter, setCityRouter] = useState(router.query.city)
    const [dataFilter, setDataFilter] = useState([]);
    const [data, setData] = useState([]);
    const {getLawyers} = useLawyers();
    const getLawyersMunicipalities= async()=>{
         try {
            const response = await fetch(`${API_URL}/api/lawyers?filters[municipalities][name][$eq]=${cityRouter}`);
            const data = await response.json();
            setData(data.data)
            setDataOriginal(data.data)
          } catch (error) {
            console.error('Error al realizar la consulta:', error.message);
          }
       
        }

const getAllLawyers= async ()=>{
  const getAllLawyers = await getLawyers();
  setData(getAllLawyers)
}
return {getAllLawyers,getLawyersMunicipalities,setData,setDataFilter,dataFilter,cityRouter,data}
}