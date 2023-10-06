// utils/getDataFromDB.js
import { pool } from "../db";


async function getLawyersDepartamentSpecialty(req, res) {
    const departament = parseInt(req.body.apartamentSelect);
    const specialty = parseInt(req.body.specialtySelect);
    console.log(departament,specialty,"console")
    try {
        const [result] =  await pool.query(`SELECT school_number,lawyer.id_lawyer, lawyer.name_lawyer, municipalities.id_location,specialty.id_specialty, location.name_departament FROM lawyer JOIN lawyer_x_municipalitie ON lawyer_x_municipalitie.id_lawyer = lawyer.id_lawyer JOIN municipalities ON lawyer_x_municipalitie.id_municipalities = municipalities.id_municipalities JOIN location ON location.id_location= municipalities.id_location JOIN specialty_x_lawyer ON specialty_x_lawyer.id_lawyer = lawyer.id_lawyer JOIN specialty on specialty_x_lawyer.id_specialty = specialty.id_specialty WHERE location.id_location = ${departament} AND specialty.id_specialty = ${specialty}`)

        res.status(200).json(result)
    
    // return rows;
  } catch (err) {
    console.error('Error al realizar la consulta:', err);
    // return [];
  }
}

export default getLawyersDepartamentSpecialty;
