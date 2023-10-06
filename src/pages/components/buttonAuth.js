// import { signIn,signOut, useSession } from "next-auth/react";
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";

const ButtonAuth = () => {
    const { data: session, status} = useSession();
    console.log({session, status})


    if(session){
        return (
            <>
               
                <button
                    onClick={()=> signOut()}
                    className="btn btn-danger"
                >
                    Salir
                </button>
                <Link href="/dashboard" className="btn " >Mi área</Link>
            </>
        )
    }
    return(
        <>
           
            {/* <button onClick={() => signIn()}
                className="btn btn-secondary">
                Login
            </button> */}
            <Link href="/register" className="btn btn-primary mx-1 d-none d-md-inline " >Unete</Link >
            <Link href="/login" className="btn btn-secondary mx-1 d-none d-md-inline " >Login</Link >

        </>
    )
}
 
export default ButtonAuth;