// utils/getDataFromDB.js
import { pool } from "../db";


async function getExperiencie(req, res) {
  try { 
    const id_lawyer = parseInt(req.body.id_lawyer);
    console.log(req.body)
    const [result] =  await pool.query(`SELECT * FROM experience WHERE  id_lawyer = ${id_lawyer}`)
    console.log(result,"experiencia")
    res.status(200).json(result)
    
    // return rows;
  } catch (err) {
    console.error('Error al realizar la consulta:', err);
    // return [];
  }
}

export default getExperiencie;