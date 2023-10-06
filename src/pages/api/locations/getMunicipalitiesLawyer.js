// utils/getDataFromDB.js
import { pool } from "../db";


async function getLawyersDepartaments(req, res) {
    const id_lawyer = req.body.id_lawyer;
    // const specialty = req.specialtySelect;
    console.log(req.body,"municipalidades")
  try {
    const [result] =  await pool.query(`SELECT municipalities.name_municipalities, municipalities.coordinates_municipalities FROM lawyer JOIN lawyer_x_municipalitie ON lawyer.id_lawyer = lawyer_x_municipalitie.id_lawyer JOIN municipalities ON lawyer_x_municipalitie.id_municipalities = municipalities.id_municipalities WHERE lawyer.id_lawyer = ${id_lawyer};
     `)
    console.log(result)
    res.status(200).json({result})
    
    // return rows;
  } catch (err) {
    console.error('Error al realizar la consulta:', err);
    // return [];
  }
}

export default getLawyersDepartaments;
