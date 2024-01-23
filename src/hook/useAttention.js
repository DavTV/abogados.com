import { useState } from "react";
import { API_URL } from "../../config";
export const useAttention =(id_lawyer,getInfoLawyer)=>{
   

 

    const onUpdateAttention = async(e) => {
      // const {value} = event.target;
        // console.log(value,dia,tipo,"tpos")
        e.preventDefault();
        const formData = new FormData(e.target);
        const day = formData.get("day");
        const start = formData.get("start");
        const end = formData.get("end");
   try {
  
  const responseAttention = await fetch(`${API_URL}/attentions?filters[lawyer]=${id_lawyer}`);
  const dataAttention=  await responseAttention.json();
  const attention= dataAttention.data.find(attention=> attention.attributes.day == day)  

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
             day:day,
             hourStart:start,
             hourEnd:end
           }
         })
       })
      //  const data = await response.json();
      //  console.log(data, 'experiencias')  
      alert("Datos actualizados")
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
            day:day,
            hourStart:start,
            hourEnd:end
          }
        })
      })
      alert("Datos actualizados")

      // const data = await response.json();
      // console.log(data, 'experiencias')

  }  
  getInfoLawyer(id_lawyer)
//  }  
} catch (error) {
  console.log(error)
}
    }

  
    return {onUpdateAttention};
}