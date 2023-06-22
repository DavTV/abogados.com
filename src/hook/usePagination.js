import { MyContext } from "@/context/dataContext";
import { useRouter } from "next/router";
import { useContext , useState} from "react";
import { useEffect } from "react";
    export const usePagination=()=>{
    const  data = useContext(MyContext);
    const router = useRouter();
    // console.log(dataFilter, "desde usPagination")
    const [cityRouter, setCityRouter] = useState(router.query.city)
    const [lawyers, setLawyers] = useState(data.lawyers.filter((lawyer)=>lawyer.city == cityRouter));
    const [countPage, setCountPage] = useState(0);
    const [list, setList] = useState([10]);
    const [pageShow, setPageShow] = useState(lawyers.length);
    const Pagination=(dataFilter)=>{
        setLawyers(data.lawyers.filter((lawyer)=>lawyer.city == cityRouter))
        console.log(dataFilter,cityRouter)
        if(dataFilter.length>0){
            setLawyers(dataFilter);
        }
        
        if(lawyers.length>10){
            let auxArray=[], aux=10;
            setCountPage(Math.ceil(lawyers.length/10));
            console.log(countPage);
          for (let i = 1; i <= countPage; i++) {
              auxArray.push(aux*i)
          }
          setList(auxArray);
      }
    
  
    }

    // useEffect(() => {
    //     Pagination();
        
    // }, []);
    return{
        list,lawyers,pageShow,Pagination,setCountPage,cityRouter,setCityRouter,setPageShow
    }
}