import { pool }from '../db'
export default async function POST(req,res){
    // res.status(200).json({ message: 'login' })
    // const body = await req.json();
    console.log(req.body)
    const {email,password} = req.body;
    if(!password || !email){
        res.status(400).json({message:"Ingrese los datos completos"})
    }
    const [result] =  await pool.query(`SELECT * FROM lawyer where email = '${email}' and password='${password}'`)
    // console.log(`SELECT * FROM lawyer WHERE user = '${user}' AND password = '${password}'`)
    console.log(result)
    if(result.length<1){
        res.status(400).json({message:"Usuario o password incorrectos"})
    }
    res.status(200).json({email,password,data:result[0], massage:"Usuario Logeado"})
}
