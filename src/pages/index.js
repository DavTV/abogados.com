import SliderCard from './components/SliderCard'
import Link from 'next/link'
// import SliderTestimony from './components/SliderTestimony'
import { useDepartaments } from '@/hook/useDepartaments'
export default function Home() {
  const {departaments} = useDepartaments()
  console.log(departaments,"dpartaemnt")
  return (
    <>
    <div className="bg-foto"  >
      <div className='cortina h-100 d-flex align-items-center '>
        {/* <Image src="" width="500" height="500"   alt="portada"/> */}
        <div className='text-center w-100 px-3  '>
        
          <h1 className="h1 text-white title">503abogados.com</h1>
          <h2 className="h2 text-white sub-tilte">Abogados y Notarios en El Salvador</h2>
 
        </div>
      
      </div>
     
    </div>
      <div className=' my-3 py-3 px-3 text-center'>
        <h2 className='font-bold  my-5 text-info '>Ver lista de Abogados registrados</h2>
        <hr/> 
        <SliderCard />
      </div>
      <div className=' border border-info my-5 py-3 px-3 text-center bg-info text-white'>
        <h2 className='font-bold my-4 text-white'>Ver lista de Abogados registrados por departamento</h2>
        <hr/> 
        
        
        <div className="row ">
          
         <ul className='col-12 col-md-6 list-group list-none'>
            {
              departaments.map((departament, index)=>{
                if(index < Math.ceil(departaments.length / 2)){
                return <li className=' my-2 ' key={departament.id} ><Link  className='text-white' href= {`/listLawyer/${departament.attributes.name}`}>   Abogado y Notario  en   {departament.attributes.name} </Link></li>
                }
                return null;
              })
            }
          </ul>
            
          <ul className='col-12 col-md-6 list-group list-none'> 
            {
              departaments.map((departament, index)=>{
                if(index < Math.ceil(departaments.length / 2)){
                return <li className=' my-2 ' key={departament.id} ><Link  className='text-white' href= {`/listLawyer/${departament.attributes.name}`}>   Abogado y Notario  en   {departament.attributes.name} </Link></li>
                }
                return null;
              })
            }
          </ul>
            </div>
      </div>
              
            <div className='border border-2  border-info  my-5 p-3 mx-3 text-center'>
              <h2 className='text-info  my-5'>Cómo funciona nuestro servicio</h2>

              <p className='my-5'> 502abogados.com es un sitio web que busca tener la más amplia lista de Abogados y Notarios colegiados activos que tengan oficinas o presten sus servicios en cualquiera de los 340 municipios de la republica de Guatemala. El objetivo es que todas las personas (individuales o juridicas) que se encuentren en territorio extranjero puedan contratar los servicios legales de los profesionales del Derecho registrados en nuestra amplia base de datos.</p>
              <p className='my-5'>Esto tiene como beneficio que todas las personas (sin importar donde se encuentren) puedan contar con un directorio legal, fácil de utilizar y con un sistema de calificación que lo ayude a elegir mejor a quien contratar.</p>
            </div>
        
            {/* <div  className='my-5 py-3 p-3 text-center'>
              <h2 className='text-info my-5'>Testimonios</h2>
                <SliderTestimony/>
                comentario apra actualizar las variables de entorno en vercel
                
            </div> */}
    </>
  )
}
