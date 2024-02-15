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
    const getLawyersDepartaments= async()=>{
         try {
            const response = await fetch(`${API_URL}/lawyers?populate=*&filters[departaments][name][$eq]=${cityRouter}`);
            const data = await response.json();
            console.log(data,"la data")
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
return {getAllLawyers,getLawyersDepartaments,setData,setDataFilter,dataFilter,cityRouter,data}
}