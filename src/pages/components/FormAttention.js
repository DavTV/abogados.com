import { useAttention } from "@/hook/useAttention";

const FormAttention = ({id_lawyer,getInfoLawyer}) => {
    const {onUpdateAttention, capturarValor} = useAttention(id_lawyer,getInfoLawyer);
    return ( 
        <form className="p-4" onSubmit={onUpdateAttention}>

        <div className="row">
            <h2>Horario</h2>

        <div className="mb-3 col-12 col-md-6 ">
            <label>Lunes</label>
            <input type="time" className="form-control my-1"   onChange={(e) => capturarValor(e, 'Lunes', 'hourStart')} />
            <input type="time" className="form-control my-1"   onChange={(e) => capturarValor(e, 'Lunes', 'hourEnd')}  />
       
            
        </div>
        <div className="mb-3 col-12 col-md-6">
            <label>Martes</label>
            <input type="time" className="form-control my-1"  onChange={(e) => capturarValor(e, 'Martes', 'hourStart')} />
            <input type="time" className="form-control my-1"  onChange={(e) => capturarValor(e, 'Martes', 'hourEnd')}/>

            
        </div>
        <div className="mb-3 col-12 col-md-6">
            <label>Miercoles</label>
            <input type="time" className="form-control my-1"  onChange={(e) => capturarValor(e, 'Miércoles', 'hourStart')} />
            <input type="time" className="form-control my-1"  onChange={(e) => capturarValor(e, 'Miércoles', 'hourEnd')}/>
            
        </div>
        <div className="mb-3 col-12 col-md-6">
            <label>Jueves</label>
            <input type="time" className="form-control my-1"  onChange={(e) => capturarValor(e, 'Jueves', 'hourStart')} />
            <input type="time" className="form-control my-1" onChange={(e) => capturarValor(e, 'Jueves', 'hourEnd')} />
            
        </div>
        <div className="mb-3 col-12 col-md-6">
            <label>Viernes</label>
            <input type="time" className="form-control my-2" onChange={(e) => capturarValor(e, 'Viernes', 'hourStart')}  />
            <input type="time" className="form-control my-2" onChange={(e) => capturarValor(e, 'Viernes', 'hourEnd')}  />
            
        </div>
        <div className="mb-3 col-12 col-md-6">
            <label>Sábado</label>
            <input type="time" className="form-control my-2" onChange={(e) => capturarValor(e, 'Sábado', 'hourStart')}  />
            <input type="time" className="form-control my-2" onChange={(e) => capturarValor(e, 'Sábado', 'hourEnd')}  />
            
        </div>
        <div className="mb-3 col-12 col-md-6">
            <label>Domingo</label>
            <input type="time" className=" my-1 form-control" onChange={(e) => capturarValor(e, 'Domingo', 'hourStart')}  />
            <input type="time" className=" my-1 form-control" onChange={(e) => capturarValor(e, 'Domingo', 'hourEnd')} />
            
        </div>              
       
        </div>
        </form>
        );
}
 
export default FormAttention;