
import { useEffect } from "react";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { useListLawyer } from "@/hook/useListLawyer";
import Perfil from '../../../public/perfil.png'

const ListLawyer = () => {
  const { getAllLawyers, getLawyersDepartaments, setData, setDataFilter, dataFilter, cityRouter, data } = useListLawyer();
  useEffect(() => {
    getLawyersDepartaments();
  }, [])
  useEffect(() => {
    setData(dataFilter)
  }, [dataFilter]);
  return (
    <div className="mt-5 p-3">

      <div className="d-flex justify-content-between flex-wrap">
        {console.log(dataFilter,"data filter")}
        <p>Abogados y Notarios en el Salvador, <span> {dataFilter.departamentSelect|| cityRouter}</span></p>
        <div>

          <button className="btn btn-primary" onClick={() => { getAllLawyers() }} >Ver todos los abogados</button>
        </div>
      </div>
      <h2 className="text-info my-5 text-center ">Busca tu abogado por departamento</h2>
      <Filter setDataFilter={setDataFilter} />
      <div>
        {
          data.length < 1 && <div className="text-center  w-100 "> <p>Aùn no hay usuarios registrados</p></div>
        }
        <div className="row">
          {

            data.map((lawyer) => {

              return <div className="col-12 col-lg-3 col-md-4"> <Card name={lawyer.attributes.name} school_number={lawyer.attributes.school_number} key={lawyer.attributes.id} id={lawyer.id} image={Perfil} /></div>

            })
          }
        </div>
        <div className="d-flex justify-content-end">

        </div>

      </div>
    </div>
  );
}

export default ListLawyer;