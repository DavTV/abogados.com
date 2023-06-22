import { useState } from "react";

export const useStatesPagination=()=>{
    // useState
    const [cityRouter, setCityRouter] = useState("")
    const [lawyers, setLawyers] = useState([]);
    const [countPage, setCountPage] = useState(0);
    const [list, setList] = useState([10]);
    const [pageShow, setPageShow] = useState(0);

    return {cityRouter,setCityRouter,lawyers,setLawyers,countPage,setCountPage,list,setList,pageShow,setPageShow}
    return
}