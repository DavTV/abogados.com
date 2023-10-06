// utils/getDataFromDB.js
import { pool } from "../db";


async function getDeparments(req, res) {
  try {
    
    const [result] =  await pool.query(`SELECT * FROM location`)
    res.status(200).json(result)
    
    // return rows;
  } catch (err) {
    console.error('Error al realizar la consulta:', err);
    // return [];
  }
}

export default getDeparments;
