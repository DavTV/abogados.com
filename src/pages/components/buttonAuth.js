import { useSession, signOut } from "next-auth/react"
import Link from "next/link";

const ButtonAuth = () => {
    const { data: session, status} = useSession();

    if(session){
        return (
            <>
               
                <button
                    onClick={()=> signOut()}
                    className="btn btn-danger"
                >
                    Salir
                </button>
                <Link href="/dashboard" className="btn" >Mi área</Link>
            </>
        )
    }
    return(
        <>
            <Link href="/register" className="btn btn-primary mx-1  " >Unete</Link >
            <Link href="/login" className="btn btn-secondary mx-1  " >Login</Link >

        </>
    )
}
 
export default ButtonAuth;