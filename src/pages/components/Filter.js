import { useFilter } from "@/hook/useFilter";
const Filter = ({setDataFilter}) => {
    const {handleSubmit,setMunicipalitiesSelect,setSpecialtieSelect,municipalities,specialties}= useFilter(setDataFilter)    

    return ( 
        <div className=" p-3 my-8 container bg-info my-5">
            <form className="text-center" onSubmit={handleSubmit}>
                <div className="row justify-content-center ">
                <div className="my-2 col-12 col-md-5 ">

                    <select className="form-select" onChange={(e) => { 
                    setMunicipalitiesSelect(e.target.value) }    
                
                }>
                        <option value="">Seleciona Municipalidad</option>
                        {
                            municipalities.map((municipalitie) => {

                                return <option value={municipalitie.attributes.name} key={municipalitie.attributes.name} >{municipalitie.attributes.name}</option>
                            })
                        }

                    </select>
                </div>
                <div className="my-2 col-12 col-md-5">
                    <select className=" form-select" onChange={(e) => {setSpecialtieSelect(e.target.value)} } >
                        <option value="">Seleciona Especialidad</option>
                        {
                            specialties.map((specialtie) => {

                                return <option key={specialtie.attributes.id} value={specialtie.attributes.name}>{specialtie.attributes.name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="my-2 col-12 col-md-2">
                    <button className=" btn btn-primary ">Buscar</button>

                </div>
                </div>
            </form>
        </div>
     );
}
 
export default Filter;