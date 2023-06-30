import Footet from "./components/Footer";
import Header from "./components/Header";
import { useState} from 'react';
import { MyContext } from "../context/dataContext";
// import "../styles/globals.css"
const Layout = ({children}) => {
    const [data, setdata] = useState({
        dataCategorys: [
            "Abogados",
            "Notarios",
            "Abogados y Notarios"
        ], dataCitys: [
            "San Salvador",
            "Ahuachapan",
            "Santa Ana",
            "Sonsonate",
            "La Libertad",
            "Chalatenango",
            "Cuscatlan",
            "La Paz",
            "Cabañas",
            "San Vicente",
            "Usulutan",
            "San Miguel",
            "Morazan",
            "La Unión"
        ],
            lawyers: [
              {
                "id": 1,
                "name": "María López",
                "description": "Especialista en casos de divorcio y patria potestad",
                "prime": true,
                "category": "Abogados",
                "city": "San Salvador"
              },
              {
                "id": 2,
                "name": "Pedro Ramírez",
                "description": "Experto en asesoría legal para compra y venta de propiedades",
                "prime": false,
                "category": "Notarios",
                "city": "Sonsonate"
              },
              {
                "id": 3,
                "name": "Ana Torres",
                "description": "Abogada con amplia experiencia en casos de derecho de familia",
                "prime": true,
                "category": "Abogados y Notarios",
                "city": "San Miguel"
              },
              {
                "id": 4,
                "name": "Carlos Herrera",
                "description": "Especialista en divorcios y resolución de conflictos familiares",
                "prime": true,
                "category": "Abogados",
                "city": "Ahuachapan"
              },
              {
                "id": 5,
                "name": "Laura González",
                "description": "Abogada experta en asuntos relacionados con la patria potestad",
                "prime": false,
                "category": "Notarios",
                "city": "La Unión"
              },
              {
                "id": 6,
                "name": "Andrés Martínez",
                "description": "Amplia experiencia en casos de compra y venta de bienes raíces",
                "prime": true,
                "category": "Abogados y Notarios",
                "city": "La Libertad"
              },
              {
                "id": 7,
                "name": "Sofía Castro",
                "description": "Asesoramiento legal en divorcios y distribución de bienes",
                "prime": false,
                "category": "Abogados",
                "city": "Chalatenango"
              },
              {
                "id": 8,
                "name": "Juan Morales",
                "description": "Abogado especializado en casos de custodia y visitas familiares",
                "prime": true,
                "category": "Notarios",
                "city": "Cabañas"
              },
              {
                "id": 9,
                "name": "Carolina Sánchez",
                "description": "Experiencia en derecho inmobiliario y contratos de compra-venta",
                "prime": false,
                "category": "Abogados",
                "city": "La Paz"
              },
              {
                "id": 10,
                "name": "Luisa Vargas",
                "description": "Experta en divorcios y acuerdos de manutención",
                "prime": true,
                "category": "Abogados y Notarios",
                "city": "San Salvador"
              },
              {
                "id": 11,
                "name": "Javier Mendoza",
                "description": "Abogado especializado en casos de adopción y tutela",
                "prime": true,
                "category": "Notarios",
                "city": "San Vicente"
              },
              {
                "id": 12,
                "name": "Mariana Cruz",
                "description": "Asesoramiento legal en transacciones inmobiliarias",
                "prime": false,
                "category": "Abogados",
                "city": "Morazan"
              },
              {
                "id": 13,
                "name": "Gabriel Paredes",
                "description": "Especialista en divorcios de mutuo acuerdo",
                "prime": true,
                "category": "Notarios",
                "city": "Usulutan"
              },
              {
                "id": 14,
                "name": "Alejandra Gómez",
                "description": "Amplia experiencia en casos de patria potestad compartida",
                "prime": true,
                "category": "Abogados y Notarios",
                "city": "Santa Ana"
              },
              {
                "id": 15,
                "name": "Ricardo Núñez",
                "description": "Abogado especializado en casos de compraventa internacional",
                "prime": false,
                "category": "Abogados",
                "city": "San Miguel"
              },
              {
                "id": 16,
                "name": "Valentina Torres",
                "description": "Asesoramiento legal en divorcios y separaciones de hecho",
                "prime": true,
                "category": "Notarios",
                "city": "San Salvador"
              },
              {
                "id": 17,
                "name": "Diego Medina",
                "description": "Experto en casos de disputas de bienes en divorcios",
                "prime": false,
                "category": "Abogados",
                "city": "La Libertad"
              },
              {
                "id": 18,
                "name": "Fernanda Sosa",
                "description": "Especialista en derecho laboral y contratos de trabajo",
                "prime": true,
                "category": "Abogados y Notarios",
                "city": "Chalatenango"
              },
              {
                "id": 19,
                "name": "Rafael Montes",
                "description": "Experiencia en casos de adopción y filiación",
                "prime": true,
                "category": "Notarios",
                "city": "La Paz"
              },
              {
                "id": 20,
                "name": "Carmen Jiménez",
                "description": "Abogada especializada en casos de violencia doméstica",
                "prime": false,
                "category": "Abogados",
                "city": "Sonsonate"
              },
              {
                "id": 21,
                "name": "Carmen Jiménez",
                "description": "Abogada especializada en casos de violencia doméstica",
                "prime": false,
                "category":"Abogados",
                "city": "Sonsonate"

              },
              {
                "id": 22,
                "name": "Roberto Gómez",
                "description": "Experto en casos de propiedad intelectual",
                "prime": false,
                "category": "Abogados",
                "city": "San Salvador"
              },
              {
                "id": 23,
                "name": "Isabella Herrera",
                "description": "Especialista en casos de derechos humanos",
                "prime": true,
                "category": "Abogados",
                "city": "San Miguel"
              },
              {
                "id": 24,
                "name": "Carlos Ramírez",
                "description": "Abogado con amplia experiencia en casos de accidentes de tráfico",
                "prime": false,
                "category": "Abogados",
                "city": "La Libertad"
              },
              {
                "id": 25,
                "name": "María Torres",
                "description": "Asesoramiento legal en casos de seguros y reclamaciones",
                "prime": true,
                "category": "Abogados",
                "city": "San Salvador"
              },
              {
                "id": 26,
                "name": "Jorge Méndez",
                "description": "Especialista en casos de derecho laboral",
                "prime": false,
                "category": "Abogados",
                "city": "San Vicente"
              },
              {
                "id": 27,
                "name": "Laura Martínez",
                "description": "Abogada experta en casos de violencia de género",
                "prime": true,
                "category": "Abogados",
                "city": "Santa Ana"
              },
              {
                "id": 28,
                "name": "Juan González",
                "description": "Experto en casos de quiebras y reestructuración financiera",
                "prime": false,
                "category": "Abogados",
                "city": "Sonsonate"
              },
              {
                "id": 29,
                "name": "Carolina Ramírez",
                "description": "Especialista en casos de propiedad intelectual y patentes",
                "prime": true,
                "category": "Abogados",
                "city": "La Unión"
              },
              {
                "id": 30,
                "name": "Pedro Morales",
                "description": "Abogado con experiencia en casos de derechos de autor",
                "prime": false,
                "category": "Abogados",
                "city": "Ahuachapan"
              },
              {
                "id": 31,
                "name": "Isabel Gómez",
                "description": "Amplia experiencia en casos de contratos comerciales",
                "prime": true,
                "category": "Abogados",
                "city": "San Miguel"
              }
            ]
          
          
    }); 

    return ( 
        <>
        <div className="position-sticky top-0 z-1">
            <Header />

        </div>
            <MyContext.Provider value={data}>

                <main className="container-lg p-0" >
                    {children}
                </main>
            </MyContext.Provider>
            <Footet />
        </>
     );
}
export default Layout;
