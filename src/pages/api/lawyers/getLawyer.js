// utils/getDataFromDB.js
import { pool } from "../db";


async function getLawyer(req, res) {
  try { 
    const id_lawyer = parseInt(req.body.id_lawyer);
    console.log(req.body)
    const [result] =  await pool.query(`SELECT * FROM lawyer WHERE  id_lawyer = ${id_lawyer}`)
    // console.log(result[0])
    res.status(200).json(result[0])
    
    // return rows;
  } catch (err) {
    console.error('Error al realizar la consulta:', err);
    // return [];
  }
}

export default getLawyer;