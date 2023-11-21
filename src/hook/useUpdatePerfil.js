import { useState } from "react";
import { useEffect } from "react";
import { API_URL } from "../../config";
export const useUpdatePerfil = (id, getInfoLawyer, lawyer, handleModal) => {
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
      console.log(`${API_URL}/lawyers/${id}`)
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
  // const addNewData = async (e) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.currentTarget);
  //     const caso = formData.get('caso');
  //     let idsData = [];
  //     const idNewData = formData.get(caso) == NaN ? parseInt(formData.get(caso)) : formData.get(caso);
  //     const { municipalities, specialties, experiencies } = lawyer;

  //     if (idNewData) {
  //         switch (caso) {
  //             case "municipalitie":
  //                 idsData = municipalities ? municipalities.data.map((mun) => mun.id) : []
  //                 break;
  //                 case "specialtie":
  //                     idsData = specialties ? specialties.data.map((mun) => mun.id) : []
  //                     console.log(idsData,"mapeo specialties")

  //                 break;
  //             case "experiencie":
  //                 // idsData = experiencies ? experiencies.data.map((mun) => mun.id) : []
  //                 alert("Esta función aún está en desarrollo.");
  //                 return;
  //             default:
  //                 break;
  //         }
  //         idsData.push(idNewData);
  //         const options = {
  //             method: 'PUT',
  //             headers: {
  //                 'Content-Type': 'application/json',
  //             },

  //             body: JSON.stringify({
  //                 data: {
  //                     [caso+"s"]: idsData
  //                 }
  //             }),
  //         }
  //         try {
  //             console.log(`${API_URL}/lawyers/${id}?populate=${caso}s`)
  //             const response = await fetch(`${API_URL}/lawyers/${id}?populate=${caso}s`, options)
  //             if (response.status == 200) {
  //                 getInfoLawyer(id);
  //             }

  //         } catch (error) {
  //             console.log(error)
  //         }
  //     } else {
  //         alert("Seleccione " + caso)
  //     }


  // }
  const addNewData = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const caso = formData.get('caso');
    // si no encuentra id va a obtener el valor del textArea
    const idNewData = formData.get(caso) == NaN ? parseInt(formData.get(caso)) : formData.get(caso);
    const { municipalities, specialties, experiences } = lawyer;

    if (!idNewData) {
      alert("Seleccione " + caso);
      return;
    }

    let idsData = [];

    switch (caso) {
      case "municipalitie":
        idsData = municipalities ? municipalities.data.map((mun) => mun.id) : []
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
    console.log('idNewData :>> ', idNewData);

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
      const idDeleteData = id_data;
      const { municipalities, specialties, experiences } = lawyer;
      let idsData = [];
      if (idDeleteData) {
        switch (caso) {
          case "municipalitie":
            idsData = municipalities ? municipalities.data.filter((mun) => mun.id != idDeleteData) : []
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
        console.log(idsData)
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

    }
  }
  const addNewExpeince = async (newExperience) => {

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
    console.log(data, 'experiencias')
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
  return { handleBlur, handleChange, userUpdate, onUpdate, addNewData, deleteData }
}