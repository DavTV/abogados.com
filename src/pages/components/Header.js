import Image from "next/image";
import Link from "next/link";
import ButtonAuth from "./buttonAuth";

const Header = () => {
    return ( 
        <nav className="bg-info container-lg">
         <div className="d-flex  justify-content-between align-items-center p-2 ">
            <div>
            <p className="text-white font-bold text-3xl"><Link href="/"><Image src="/logo.png" width="150" height="70" /></Link></p>
                {/* <Link href="#">Logo</Link> */}
            </div>
            <div className="text-center font-bold">
                <p className="d-none text-white d-md-block" >ÁREA PARA PROFESIONALES</p>
                <div className="my-1">
                <ButtonAuth />
                    
                        {/* <Link href="/Login" className="btn btn-primary mx-1 d-md-none"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg></Link>
                        <Link href="/Register" className="btn btn-secondary mx-1 d-md-none"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                            <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                        </svg></Link>
                    // <Link  href="/Login" className="btn btn-secondary mx-1 d-none d-md-inline ">Iniciar</Link > */}
                </div>
            </div>
            </div>   
        </nav>
     );
}
 
export default Header;