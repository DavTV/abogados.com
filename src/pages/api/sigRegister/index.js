import { pool } from "../../api/getData/db";
export default async function Register(req,res){
    // res.status(200).json({ message: 'login' })
    // const body = await req.json();
    console.log(req.body, "body")
    const {email,password, name, school_number} = req.body;
    if(!password || !email || !name || !school_number){
    res.status(200).json({email,password,name,school_number, massage:"Datos incompletos"})

    }
    const [result] =  await pool.query(`INSERT INTO lawyer(school_number, email, password, name_lawyer, prime) VALUES ('${school_number}','${email}','${password}','${name}',0)`)

    // console.log(`INSERT INTO `lawyer`(`id_lawyer`, `school_number`, `phone_number`, `email`, `password`, `name_lawyer`, `prime`, `avatar`, `office_location`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]','[value-8]','[value-9]')`)
    console.log(result)
    if(result.length<1){
        res.status(400).json({message:"Error"})
    }
    res.status(200).json({email,password,name,school_number, massage:"Usuario Registrado"})
}
