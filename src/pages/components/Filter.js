import { useFilter } from "@/hook/useFilter";

const Filter = ({setDataFilter,setCityRouter}) => {
    const {citys, categorys,handleSubmit,setCategorySelect,setCitySelect} = useFilter(setDataFilter,setCityRouter);

    return ( 
        <div className="w-full bg-sky-700 p-3 my-8 ">
            <form className="text-center" onSubmit={handleSubmit}>
                <select className="py-2 px-3 mx-1 my-4 w-80 cursor-pointer" onChange={(e)=>{setCategorySelect(e.target.value)}}>
                    <option value="">Seleciona que buscas</option>
                    {
                        categorys.map((category,index)=>{

                            return <option value={category} key={index} >{category}</option>
                        })
                    }
                    
                </select>
                <select className="py-2 px-3 mx-1 my-4 w-80 cursor-pointer" onChange={(e)=>{setCitySelect(e.target.value)}} >
                    <option value="">Seleciona Lugar</option>
                    {
                        citys.map((city)=>{

                            return <option value={city}>{city}</option>
                        })
                    }
                </select>

                <button className="p-2 bg-stone-400  hover:bg-stone-500 duration-200 hover:shadow-md hover:scale-90 text-white rounded mx-1 font-bold">Buscar</button>
            </form>
        </div>
     );
}
 
export default Filter;