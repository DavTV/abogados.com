import { signIn, useSession } from "next-auth/react";
export const useLogin=()=>{
    const {data: session} = useSession();
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
                alert("Credenciales incorrectas")
            }
            
        }
        return {onSubmit,session}

}