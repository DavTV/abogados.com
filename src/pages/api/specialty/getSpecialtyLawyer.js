// utils/getDataFromDB.js
import { pool } from "../db";


async function getSpecialtys(req, res) {
  try { 
    const id_lawyer = req.body.id_lawyer;
    const [result] =  await pool.query(`SELECT 
    specialty_x_lawyer.id_specialty, specialty.description_specialty
  FROM lawyer
  JOIN specialty_x_lawyer ON lawyer.id_lawyer = specialty_x_lawyer.id_lawyer
  JOIN specialty ON specialty.id_specialty = specialty_x_lawyer.id_specialty
  WHERE lawyer.id_lawyer  = ${id_lawyer}`)
    res.status(200).json(result)
    
    // return rows;
  } catch (err) {
    console.error('Error al realizar la consulta:', err);
    // return [];
  }
}

export default getSpecialtys;
