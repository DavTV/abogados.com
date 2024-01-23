import { useState } from "react";
import { useEffect } from "react";
import { API_URL } from "../../config";
export const useUpdatePerfil = (id, getInfoLawyer, lawyer, handleModal) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState();
  const [userUpdate, setUserUpdate] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    school_number: "",
    location: ""
  });
  const onUpdate = async (e) => {
    e.preventDefault();
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        data: userUpdate
      }),
    }
    try {
      // console.log(`${API_URL}/lawyers/${id}`)
      const response = await fetch(`${API_URL}/lawyers/${id}`, options)
      if (response.status == 200) {
        getInfoLawyer(id);
        handleModal();
      }

    } catch (error) {
      console.log(error)
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserUpdate({ ...userUpdate, [name]: value })
  }
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setUserUpdate({ ...userUpdate, [name]: value })
  }

  const addNewData = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setForm(e)
    const caso = formData.get('caso');
    // si no encuentra id va a obtener el valor del textArea
    const idNewData = formData.get(caso) == NaN ? parseInt(formData.get(caso)) : formData.get(caso);
    const { departaments, specialties, experiences } = lawyer;

    if (!idNewData) {
      alert("Seleccione " + caso);
      return;
    }

    let idsData = [];

    switch (caso) {
      case "departament":
        idsData = departaments ? departaments.data.map((mun) => mun.id) : []
        break;
      case "specialtie":
        idsData = specialties ? specialties.data.map((mun) => mun.id) : []

        break;
      case "experience":
        // idsData = experiences ? experiences.data.map((mun) => mun.id) : []
        addNewExpeince(idNewData);
        getInfoLawyer(id);
        return;
      default:
        break;
    }

    idsData.push(idNewData);
    // console.log('idNewData :>> ', idNewData);

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          [caso + "s"]: idsData,
        },
      }),
    };


    try {
      const response = await fetch(`${API_URL}/lawyers/${id}?populate=${caso}s`, options);
      if (response.status === 200) {
        getInfoLawyer(id);
      }
    } catch (error) {
      console.error(error);
    }

  };

  const deleteData = async (id_data, caso) => {
    if (id_data) {
      setLoading(true);

      const idDeleteData = id_data;
      const { departaments, specialties, experiences } = lawyer;
      let idsData = [];
      if (idDeleteData) {
        switch (caso) {
          case "departament":
            idsData =departaments ?departaments.data.filter((mun) => mun.id != idDeleteData) : []
            break;
          case "specialtie":
            idsData = specialties ? specialties.data.filter((mun) => mun.id != idDeleteData) : []

            break;
          case "experience":
            idsData = experiences ? experiences.data.filter((mun) => mun.id != idDeleteData) : []
            break;
          default:
            break;
        }
        // console.log(idsData)
        const options = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            data: {
              [caso + "s"]: idsData
            }
          }),
        }
        try {
          const response = await fetch(`${API_URL}/lawyers/${id}?populate=${caso}s`, options)
          if (response.status == 200) {
            getInfoLawyer(id);
          }

        } catch (error) {
          console.log(error)
        }
      }
      setLoading(false);

    }
  }
  const addNewExpeince = async (newExperience) => {
    if(form) form.target.reset();
    setLoading(true);
    const response = await fetch(`${API_URL}/experiences`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          lawyer: [id],
          description: newExperience
        }
      })
    })
    const data = await response.json();
    // console.log(data, 'experiencias')
    setLoading(false);
    getInfoLawyer(id)
  }

  useEffect(() => {
    setUserUpdate({
      name: lawyer.name,
      email: lawyer.email,
      password: lawyer.password,
      phone: lawyer.phone,
      school_number: lawyer.school_number,
      location: lawyer.location
    })
  }, [lawyer])
  return { handleBlur, handleChange, userUpdate, onUpdate, addNewData, deleteData, loading }
}