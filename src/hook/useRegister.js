import { useRouter } from "next/router";
import { useState } from "react";
import { API_URL } from "../../config";
export const  useRegister=()=>{
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email'),
            password = formData.get('password'),
            name = formData.get('name'),
            school_number = formData.get('school_number'),
            phone=formData.get('phone'),
            location = formData.get('location'),
            prime= false;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                data: {
                    name,
                    email,
                    password,
                    school_number,
                    phone,
                    location,
                    prime
                }
            }),
        }
        try {
            const response = await fetch(`${API_URL}/lawyers`, options)
            if(response.status==200){
                   alert("Felicidades, tu cuenta se creo satisfactoriamente.") 
                   router.push("/")
            }

        } catch (error) {
            console.log(error)
        }
    }
    return {onSubmit}
}
