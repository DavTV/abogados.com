import Image from 'next/image'
import { Inter } from 'next/font/google'
import Filter from './components/Filter'
import SliderCard from './components/SliderCard'
import Link from 'next/link'
import SliderTestimone from './components/SliderTestimone'
import { useFilter } from '@/hook/useFilter'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const {citys, categorys} = useFilter();
  return (
    <>
    <div className=" h-4/6 overflow-hidden bg-[url('/portada.jpeg')] bg-cover"  >
      <div className='cortina w-full h-full flex flex-col justify-start items-center'>
        {/* <Image src="" width="500" height="500"   alt="portada"/> */}
        <div className='text-center text-white py-4 my-8'>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1 className="font-bold text-5xl md:text-8xl ">abogados.com</h1>
          <h2 className=" text-4xl md:text-5xl">Abogados y Notarios en El Salvador</h2>
          <br/>
          <br/>
        </div>
        {/* lugo jalar desde el mismo componente con el contexto */}
      {/* <Filter categorys={categorys} citys={citys} /> */}
      {/* <div className='bg-sky-700 w-full py-8 text-center my-8'>
            <Link href="/listLawyer/all" className='bg-yellow-300 text-blue-700 hover:bg-yellow-500 duration-200 hover:shadow-md hover:scale-90 hover:text-white rounded mx-1 font-bold p-3' >Ver Todos los profesionales</Link>
      </div> */}
      </div>
     
    </div>
      <div className=' border border-cyan-500 my-3 py-3 px-3 text-center'>
        <h2 className='font-bold text-3xl my-6 text-sky-700 '>Ver lista de Abogados registrados</h2>
        <SliderCard/>
      </div>
      <div className=' border border-cyan-500 my-5 py-3 px-3 text-center'>
        <h2 className='font-bold text-3xl my-6 text-sky-700 '>Ver lista de Abogados registrados</h2>
        {/* <SliderCard/> */}
        <div className="flex justify-evenly flex-wrap text-justify p-3">
          
          <ul className='mx-2'>
            {
              citys.map((city, index)=>{
                if(citys.length/2 > index)
                return <li className='my-2 tracking-wider  duration-200 hover:scale-90 hover:text-sky-700'><Link href= {`/listLawyer/${city}`}>   Abogado  Notario  en   {city} </Link></li>
              })
            }
          </ul>
          <ul className='mx-2'> 
            {
              citys.map((city, index)=>{
                if(citys.length/2 < index)
                return <li className='my-2 tracking-wider   duration-200 hover:scale-90 hover:text-sky-700  '><Link href= {`/listLawyer/${city}`}>   Abogado  Notario  en   {city} </Link></li>
              })
            }
          </ul>
            </div>
      </div>
            <div className='border border-cyan-500 my-5 py-3 px-6 text-center'>
              <h2 className='font-bold text-3xl text-sky-700  my-6'>Cómo funciona nuestro servicio</h2>
              <p className='my-5'> 502abogados.com es un sitio web que busca tener la más amplia lista de Abogados y Notarios colegiados activos que tengan oficinas o presten sus servicios en cualquiera de los 340 municipios de la republica de Guatemala. El objetivo es que todas las personas (individuales o juridicas) que se encuentren en territorio extranjero puedan contratar los servicios legales de los profesionales del Derecho registrados en nuestra amplia base de datos.</p>
              <p className='my-5'>Esto tiene como beneficio que todas las personas (sin importar donde se encuentren) puedan contar con un directorio legal, fácil de utilizar y con un sistema de calificación que lo ayude a elegir mejor a quien contratar.</p>
            </div>
            <div>
                <h2 className='text-3xl text-sky-700 text-center my-3 font-bold'>Abogados Notarios en el Salvador</h2>
                <Filter  categorys={categorys} citys={citys}  />
            </div>
            <div  className='border border-blue-500 my-5 py-3 px-6 text-center'>
              <h2 className='font-bold text-3xl my-6'>Testimonios</h2>
                <SliderTestimone/>

            </div>
    </>
  )
}
