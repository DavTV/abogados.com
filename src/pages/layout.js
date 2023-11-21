import Footet from "./components/Footer";
import Header from "./components/Header";
import SessionAuthProvadier from "../context/SessionAuthProvaider";
const Layout = ({ children }) => {
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

            </SessionAuthProvadier>
        </>
    );
}
export default Layout;
