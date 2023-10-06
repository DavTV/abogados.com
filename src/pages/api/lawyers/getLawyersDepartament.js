// utils/getDataFromDB.js
import { pool } from "../db";


async function getLawyersDepartament(req, res) {
    // const departament = req.apartamentSelect;
    // const specialty = req.specialtySelect;
    console.log(req.body)
    const departament = req.body.cityRouter;
  try {
        const [result] =  await pool.query(`SELECT lawyer.id_lawyer, lawyer.name_lawyer, municipalities.id_location, location.name_departament, lawyer.school_number FROM lawyer JOIN lawyer_x_municipalitie ON lawyer_x_municipalitie.id_lawyer = lawyer.id_lawyer JOIN municipalities ON lawyer_x_municipalitie.id_municipalities = municipalities.id_municipalities JOIN location ON location.id_location= municipalities.id_location WHERE location.name_departament = '${departament}'`)

    res.status(200).json(result)
    
    // return rows;
  } catch (err) {
    console.error('Error al realizar la consulta:', err);
    // return [];
  }
}

export default getLawyersDepartament;
