import Link from "next/link";

const Header = () => {
    return ( 
        <nav className="fixed inset-x-0 top-0 left-0  z-10 text-white">
         <div className="container mx-auto  flex  justify-between items-center flex-wrap p-2 bg-sky-700 ">
            <div>
            <p className="text-white font-bold text-3xl"><Link href="/">abogados.com</Link></p>
                {/* <Link href="#">Logo</Link> */}
            </div>
            <div className="text-center font-bold">
                <p>ÁREA PARA PROFESIONALES</p>
                <div className="my-2">
                    <button className="p-2 bg-cyan-500  hover:bg-cyan-600 duration-200 hover:shadow-md hover:scale-90 rounded mx-1">Unirse</button>
                    <button className="p-2 bg-stone-400 hover:bg-stone-500 duration-200 hover:shadow-md hover:scale-90 hover:text-white rounded mx-1">Mi cuenta</button>
                </div>
            </div>
            </div>   
        </nav>
     );
}
 
export default Header;