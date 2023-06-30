// import { usePagination } from "@/hook/usePagination";
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
        <div className="mt-5 p-3">
     
            <div className="d-flex justify-content-between flex-wrap">
                {/* <p className="">abogados.com</p> */}
                <p>Abogados y Notarios en el Salvador, <span>{cityRouter}</span></p>       
                <div>
            
                <button className="btn btn-primary"onClick={()=>{setData(dataContext.lawyers)}} >Ver todos los abogados</button>
                </div>
            </div>
            <h2 className="text-info my-5 text-center ">Busca tu abogado por departamento</h2>
            <Filter setDataFilter={setDataFilter} setCityRouter={setCityRouter}/>
            <div>
                    {
                        // console.log(lawyers,"city")
                        currentData.length < 1 && <div className="text-center  w-100 "> <p>Aùn no hay usuarios registrados</p></div> 
                    }
                <div className="row">
                    {
                        // console.log(lawyers,"city")

                        currentData.map((lawyer)=>{
                            
                                return <div className="col-12 col-md-3"> <Card name={lawyer.name} category={lawyer.category} description={lawyer.description} key={lawyer.id} id={lawyer.id} city={lawyer.city} /></div>
                            
                        })
                    }
                </div>
                <div className="d-flex justify-content-end">

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