import { useLogin } from "@/hook/useLogin";
import { useRouter } from "next/router";
const Login = () => {
    const {onSubmit,session} = useLogin();
    const router = useRouter();

        if(session){
            router.push("/dashboard");
        }
        return ( 
        //    corregir lals alturas
            <form className="container p-3" onSubmit={onSubmit} style={{"height":"60vh"}}>
            <h1>Login</h1>
                <div className="mb-3">
                    <label>Correo</label>
                    <input  type="email"  className="form-control" name="email" />
                </div>
              
                <div className="mb-3">
                    <label>Contraseña</label>
                <input type="password" className="form-control" name="password" />
                </div>

                <div className="mb-3">
                        <button className="btn btn-primary">Iniciar</button>
                </div>
            </form>
    );
}
 
export default Login;