

const FormPerfil = ({onSubmit,lawyer,handleBlur,handleChange,userUpdate,onUpdate}) => {
 
 
    if(lawyer){
    
        return ( 
            <form className="container p-3" onSubmit={onUpdate} >
                <h2 className="h1 text-center py-3">Actualizar Perfil</h2>
            
            <div className="mb-3">
                <label>Correo</label>
                <input type="email" className="form-control" name="email" onChange={handleChange} onBlur={handleBlur} value={ userUpdate.email} />
            </div>
    
            <div className="mb-3">
                <label>Contraseña</label>
                <input type="password" className="form-control" name="password" onChange={handleChange} onBlur={handleBlur} value={userUpdate.password} />
            </div>
            <div className="mb-3">
                <label>Nombre completo</label>
    
                <input type="text" className="form-control" name="name" onChange={handleChange} onBlur={handleBlur} value={userUpdate.name}/>
            </div>
            <div className="mb-3">
                <label>Numero de  escuela</label>
    
                <input type="text" className="form-control" name="school_number"onChange={handleChange} onBlur={handleBlur}  value={ userUpdate.school_number} />
            </div>
            <div className="mb-3">
                <label>Celular</label>
    
                <input type="number" className="form-control" name="phone" onChange={handleChange} onBlur={handleBlur} value={userUpdate.phone} />
            </div>
            <div className="mb-3">
                <label>Domicilio</label>
                <input type="text" className="form-control" name="location" onChange={handleChange} onBlur={handleBlur} value={ userUpdate.location} />
            </div>
        
            <div className="mb-3">
                <button className="btn btn-primary">Actualizar</button>
            </div>
        </form>
         );

    }else{
        return ( 
            <form className="container p-3" onSubmit={onSubmit} >
                <h2 className="h1 text-center py-3">Registrate</h2>
            
            <div className="mb-3">
                <label>Correo</label>
                <input type="email" className="form-control" name="email"  />
            </div>
    
            <div className="mb-3">
                <label>Contraseña</label>
                <input type="password" className="form-control" name="password"  />
            </div>
            <div className="mb-3">
                <label>Nombre completo</label>
    
                <input type="text" className="form-control" name="name" />
            </div>
            <div className="mb-3">
                <label>Numero de  escuela</label>
    
                <input type="text" className="form-control" name="school_number" />
            </div>
            <div className="mb-3">
                <label>Celular</label>
    
                <input type="number" className="form-control" name="phone"  />
            </div>
            <div className="mb-3">
                <label>Domicilio</label>
                <input type="text" className="form-control" name="location" />
            </div>
        
            <div className="mb-3">
                <button className="btn btn-primary">Registrar</button>
            </div>
        </form>
         );
    }
    
}
 
export default FormPerfil;