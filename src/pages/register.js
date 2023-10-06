const Register = () => {
    const onSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email'),
        password= formData.get('password'),
        name = formData.get('name'),
        school_number = formData.get('school_number');
        const data =  JSON.stringify ({name,password,email,school_number});
        fetch('/api/auth/sigRegister',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: data
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }
    return ( 
        <form className="container p-3" onSubmit={onSubmit}>
        <h1>Registro</h1>
            <div className="mb-3">
                <label>Correo</label>
                <input  type="email"  className="form-control" name="email" />
            </div>
          
            <div className="mb-3">
                <label>Contraseña</label>
            <input type="password" className="form-control" name="password" />
            </div>
            <div className="mb-3">
            <label>Nombre completo</label>

            <input type="text"   className="form-control" name="name" />
            </div>
            <div className="mb-3">
            <label>Numero de  escuela</label>

            <input type="text"   className="form-control" name="school_number" />
            </div>
            <div className="mb-3">
                    <button className="btn btn-primary">Registrarse</button>
            </div>
        </form>
     );
}
 
export default Register;