// utils/getDataFromDB.js
import { pool } from "../db";


async function getLawyers(req, res) {

   
  try {
    const [result] =  await pool.query(`SELECT * FROM lawyer`)

    res.status(200).json(result)
    
    // return rows;
  } catch (err) {
    console.error('Error al realizar la consulta:', err);
    // return [];
  }
}

export default getLawyers;
