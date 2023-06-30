import { useFilter } from "@/hook/useFilter";

const Filter = ({setDataFilter,setCityRouter}) => {
    const {citys, categorys,handleSubmit,setCategorySelect,setCitySelect} = useFilter(setDataFilter,setCityRouter);

    return ( 
        <div className=" p-3 my-8 container bg-info my-5">
            <form className="text-center" onSubmit={handleSubmit}>
                <div className="row justify-content-center ">
                <div className="my-2 col-12 col-md-5 ">

                    <select className="form-select" onChange={(e) => { setCategorySelect(e.target.value) }}>
                        <option value="">Seleciona que buscas</option>
                        {
                            categorys.map((category, index) => {

                                return <option value={category} key={index} >{category}</option>
                            })
                        }

                    </select>
                </div>
                <div className="my-2 col-12 col-md-5">
                    <select className=" form-select" onChange={(e) => { setCitySelect(e.target.value) }} >
                        <option value="">Seleciona Lugar</option>
                        {
                            citys.map((city) => {

                                return <option value={city}>{city}</option>
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