import { useState } from "react";
import { API_URL } from "../../config";
export const useAttention =(id_lawyer,getInfoLawyer)=>{
   

 

    const capturarValor = async(event, dia, tipo) => {
      const {value } = event.target;
        console.log(value,dia,tipo,"tpos")
try {
  
  const responseAttention = await fetch(`${API_URL}/attentions?filters[lawyer]=${id_lawyer}`);
  const dataAttention=  await responseAttention.json();
  const attention= dataAttention.data.find(attention=> attention.attributes.day == dia)  

  console.log(attention)
  if(attention){
    console.log("put")
     const response = await fetch(`${API_URL}/attentions/${attention.id}`, {
         method: "PUT",
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           data: {
             [tipo]: value+":00"
           }
         })
       })
       const data = await response.json();
       console.log(data, 'experiencias')  
  }
  else{
    console.log("post")

      const response = await fetch(`${API_URL}/attentions`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            lawyer: [id_lawyer],
            day:dia,
            [tipo]:value+":00"
          }
        })
      })
      const data = await response.json();
      console.log(data, 'experiencias')
  }  
  getInfoLawyer(id_lawyer)
//  }  
} catch (error) {
  console.log(error)
}
    }

  
    return {capturarValor};
}