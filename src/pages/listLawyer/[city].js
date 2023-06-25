import { usePagination } from "@/hook/usePagination";
import { MyContext } from "@/context/dataContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import Paginator from 'react-hooks-paginator';

import {useEffect,useState} from "react";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Link from "next/link";
const ListLawyer = () => {
    const  dataContext = useContext(MyContext);
    const router = useRouter();
    const [cityRouter, setCityRouter] = useState(router.query.city)
    const [dataFilter, setDataFilter] = useState([]);
    // const { list,lawyers,pageShow,Pagination,cityRouter,setCityRouter,setPageShow} = usePagination();
    const pageLimit = 12;
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
   
    console.log(data)
     useEffect(() => {
         setData(dataContext.lawyers.filter((lawyer)=>lawyer.city == cityRouter))
     }, []);
      useEffect(() => {
        setCurrentData(data.slice(offset, offset + pageLimit));
      }, [offset, data]);
    useEffect(() => {
        setCurrentData(dataFilter)
            console.log(dataFilter  ,"datfilter")
    }, [dataFilter]);
    return ( 
        <div className="mt-8">
            <br/>
            <br/>
            <br/>
            <div className="flex justify-end flex-wrap">
                <p className="text-blue-700 font-bold text-3xl">abogados.com</p>
                <div>
                {/* <span className="mx-1">Desplegar</span> */}
                {/* <select className="p-3" onChange={(e)=>{setPageShow(parseInt(e.target.value))}} >
                    {
                      list.map((item,index)=>{
                          return <option key={index} value={item}>{item}</option>
                      })
                    }
                </select>     */}
                <button className="mx-1 my-4"onClick={()=>{setData(dataContext.lawyers)}} >Ver todos los abogados</button>
                </div>
            </div>
            <h2 className="text-sky-700 font-bold text-5xl text-center my-8">Busca tu abogado por departamento</h2>
            <Filter setDataFilter={setDataFilter} setCityRouter={setCityRouter}/>
            <div>
                <p className="text-sky-700  text-5xl text-center my-8" >Abogados y Notarios en el Salvador, <span>{cityRouter}</span></p>
                    {
                        // console.log(lawyers,"city")
                        currentData.length < 1 && <div className="text-center  text-2xl my-4 w-full"> <p>Aùn no hay usuarios registrados</p></div> 
                    }
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {
                        // console.log(lawyers,"city")

                        currentData.map((lawyer)=>{
                            
                                return <Card name={lawyer.name} category={lawyer.category} description={lawyer.description} key={lawyer.id} id={lawyer.id} city={lawyer.city} />
                            
                        })
                    }
                </div>
                <div className="flex justify-end">

                <Paginator
          totalRecords={data.length}
          pageLimit={pageLimit}
          pageNeighbours={4}
          setOffset={setOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
                </div>
      
            </div>
        </div>
     );
}
 
export default ListLawyer;