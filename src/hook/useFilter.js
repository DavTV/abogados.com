import {useContext,useState } from 'react'
import { MyContext } from '../context/dataContext'

export const useFilter=(setDataFilter,setCityRouter)=>{
    const data =  useContext(MyContext);
    const citys = data.dataCitys;
    const categorys = data.dataCategorys;
    const lawyer = data.lawyers;
    const [categorySelect, setCategorySelect] = useState("");
    const [citySelect, setCitySelect] = useState("");
    // const [dataFilterAux, setDataFilterAux] = useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(categorySelect == "" || citySelect == ""){
            alert("Llene todos los datos primero.")
        }else{

            setCityRouter(citySelect)
            setDataFilter(lawyer.filter((item)=>{
                if(item.city == citySelect && item.category == categorySelect) {
                    return item;
                }
            })
            )
        }
        }
    return {citys, categorys, handleSubmit, setCategorySelect,setCitySelect}



}