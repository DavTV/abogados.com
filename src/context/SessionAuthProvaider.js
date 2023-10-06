import {SessionProvider} from "next-auth/react"
const SessionAuthProvadier=({children})=>{
    return (
        <SessionProvider>
            {children}
        </SessionProvider>   
    )
}
export default SessionAuthProvadier