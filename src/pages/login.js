import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
const Login = () => {
    const router = useRouter();
    const {data: session,status} = useSession();
        const onSubmit= async(e)=>{
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const email = formData.get('email'),
            password= formData.get('password');
            // const data =  JSON.stringify ({password,email});
            const res = await signIn("credentials",{
                email,
                password,
                redirect:false
            })
            if(res.error){
                console.log(res.error)
            }
            // console.log(res,"res")
            // fetch('/api/auth/sigLogin',{
            //     method: "POST",
            //     headers: {
            //         'Content-Type': 'application/json'
            //         // 'Content-Type': 'application/x-www-form-urlencoded',
            //       },
            //     body: data
            // })
            //     .then(response => response.json())
            //     .then(data => console.log(data));
        }
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