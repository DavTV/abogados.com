// utils/getDataFromDB.js
import { pool } from "../db";


async function getSpecialtys(req, res) {
  try {
    
    const [result] =  await pool.query(`SELECT * FROM specialty`)
    res.status(200).json(result)
    
    // return rows;
  } catch (err) {
    console.error('Error al realizar la consulta:', err);
    // return [];
  }
}

export default getSpecialtys;
