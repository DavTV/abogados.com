import {useContext,useState } from 'react'
import { useRouter } from "next/router";
import { MyContext } from '../../context/dataContext'
const Lawyer = () => {
    const data =  useContext(MyContext);
    // const citys = data.dataCitys;
    const router = useRouter();
    const [cityRouter, setCityRouter] = useState(router.query.id)


    return ( 
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>Este es el ID del usuario: {cityRouter}</p>
        </div>
     );
}
 
export default Lawyer;