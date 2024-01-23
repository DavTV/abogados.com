import { useAttention } from "@/hook/useAttention";

const FormAttention = ({id_lawyer,getInfoLawyer}) => {
    const {onUpdateAttention, capturarValor} = useAttention(id_lawyer,getInfoLawyer);
    return ( 
        <form className="p-4" onSubmit={onUpdateAttention}>

        <div className="row">
            <h2>Horario</h2>

        <div className="mb-3 col-12 col-md-3">
            <label>Día</label>
            <select className="form-select" name="day">
                <option>Lunes</option>
                <option>Martes</option>
                <option>Miercoles</option>
                <option>Jueves</option>
                <option>Viernes</option>
                <option>Sábado</option>
                <option>Domingo</option>
            </select>
          

        </div>
        <div className="mb-3 col-12 col-md-3">
        <label>Inicio</label>
            <select className="form-select" name="start">
                <option>1:00</option>
                <option>2:00</option>
                <option>3:00</option>
                <option>4:00</option>
                <option>5:00</option>
                <option>6:00</option>
                <option>7:00</option>
                <option>8:00</option>
                <option>9:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
                <option>13:00</option>
    <option>14:00</option>
    <option>15:00</option>
    <option>16:00</option>
    <option>17:00</option>
    <option>18:00</option>
    <option>19:00</option>
    <option>20:00</option>
    <option>21:00</option>
    <option>22:00</option>
    <option>23:00</option>
    <option>24:00</option>
            </select>

        </div>
        <div className="mb-3 col-12 col-md-3">
        <label>Fin</label>
         
         <select className="form-select" name="end">
         <option>1:00</option>
                <option>2:00</option>
                <option>3:00</option>
                <option>4:00</option>
                <option>5:00</option>
                <option>6:00</option>
                <option>7:00</option>
                <option>8:00</option>
                <option>9:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
                <option>13:00</option>
    <option>14:00</option>
    <option>15:00</option>
    <option>16:00</option>
    <option>17:00</option>
    <option>18:00</option>
    <option>19:00</option>
    <option>20:00</option>
    <option>21:00</option>
    <option>22:00</option>
    <option>23:00</option>
    <option>24:00</option>
         </select>

     </div>
     <div className="mb-3 col-12 col-md-3">
       <button className="btn btn-dark my-4" type="submit">Agregar</button>
     </div>

        {/* <div className="mb-3 col-12 col-md-6 ">
            <label>Lunes</label>
            <input type="time" className="form-control my-1"   onChange={(e) => capturarValor(e, 'Lunes', 'hourStart')} step="3600" />
            <input type="time" className="form-control my-1"   onChange={(e) => capturarValor(e, 'Lunes', 'hourEnd')} step="3600"  />
       
            
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
       */}
        </div> 
        </form>
        );
}
 
export default FormAttention;