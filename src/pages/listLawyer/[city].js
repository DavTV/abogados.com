// import { usePagination } from "@/hook/usePagination";
// import { MyContext } from "@/context/myContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import Paginator from 'react-hooks-paginator';

import {useEffect,useState} from "react";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Link from "next/link";
import { useLawyers } from "@/hook/useLawyers";

const ListLawyer = () => {
  // const {lawyers} = useLawyers();
    // const  dataContext = useContext(MyContext);
    const router = useRouter();
    const [cityRouter, setCityRouter] = useState(router.query.city)
    const [dataFilter, setDataFilter] = useState([]);

    // const { list,lawyers,pageShow,Pagination,cityRouter,setCityRouter,setPageShow} = usePagination();
    const pageLimit = 12;
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
  //  const {lawyers} = useLawyers()
  
    const {getLawyers} = useLawyers();
    // const [lawyers, setLawyers] = useState([]);
   
    const getLawyersDepartament= async()=>{
        // e.preventDefault();
         try {
             const options={
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json', // Especificamos que estamos enviando JSON
                },
                body: JSON.stringify({cityRouter})
             }
            // Realiza la solicitud GET al endpoint utilizando fetch
            const response = await fetch('http://localhost:3000/api/lawyers/getLawyersDepartament',options);
        
            // Verifica si la respuesta es exitosa (código 200)
            if (!response.ok) {
              throw new Error('Error al obtener los datos');
            }
      
            const data = await response.json();
            // setDepartaments(data)
            // console.log(departaments);
            setData(data)
      
          } catch (error) {
            console.error('Error al realizar la consulta:', error.message);
          }
       
        }

   const getAllLawyers=()=>{
    getLawyers().then((result)=>{ 
     setCurrentData(result)
    })
  
   }

     useEffect(() => {
         getLawyersDepartament()
     }, []);

      useEffect(() => {
    // console.log(data.data)

        setCurrentData(data.slice(offset, offset + pageLimit));
      }, [offset, data]);
    useEffect(() => {
        setCurrentData(dataFilter)
            // console.log(currentData  ,"currentData")
    }, [dataFilter]);


    return ( 
        <div className="mt-5 p-3">
     
            <div className="d-flex justify-content-between flex-wrap">
                {/* <p className="">abogados.com</p> */}
                <p>Abogados y Notarios en el Salvador, <span>{dataFilter.name_departament   || cityRouter}</span></p>       
                <div>
            
                <button className="btn btn-primary"onClick={()=>{getAllLawyers()}} >Ver todos los abogados</button>
                </div>
            </div>
            <h2 className="text-info my-5 text-center ">Busca tu abogado por departamento</h2>
            <Filter  setDataFilter={setDataFilter} />
            <div>
                    {
                        // console.log(lawyers,"city")
                        currentData.length < 1 && <div className="text-center  w-100 "> <p>Aùn no hay usuarios registrados</p></div> 
                    }
                <div className="row">
                    {
                        // console.log(lawyers,"city")

                        currentData.map((lawyer)=>{
                            
                                return <div className="col-12 col-lg-3 col-md-4"> <Card name={lawyer.name_lawyer}  school_number={lawyer.school_number} key={lawyer.id_lawyer} id={lawyer.id_lawyer}  /></div>
                            
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