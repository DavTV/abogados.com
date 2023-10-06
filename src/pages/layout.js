import Footet from "./components/Footer";
import Header from "./components/Header";
import { useState } from 'react';
import SessionAuthProvadier from "../context/SessionAuthProvaider";
// import "../styles/globals.css"
// import { SessionProvider } from "next-auth/react"
// import { useSession, signIn, signOut } from "next-auth/react"
const Layout = ({ children }) => {
    // const { data: session } = useSession()

    return (
        <>

            <SessionAuthProvadier>
                <div className="position-sticky top-0 z-1">
                    <Header />

                </div>

                <main className="container-lg p-0" >
                    {children}
                </main>
                <Footet />
                {/* </SessionProvider> */}

            </SessionAuthProvadier>
        </>
    );
}
export default Layout;
