// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { DoctorContext } from "../../App";
// import { motion } from "framer-motion";

// const Dpatients = () => {
//   const [patientList, setPatientList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editedPatient, setEditedPatient] = useState(null);
//   const { doctorId } = useContext(DoctorContext);
//   const [errorMessages, setErrorMessages] = useState({});
//   const [searchQuery, setSearchQuery] = useState("");
//   const { name } = useContext(DoctorContext);

//   const customHomeContainerVariants = {
//     animate: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const customHomeContentVariants = {
//     initial: { opacity: 0, x: -20 },
//     animate: { opacity: 1, x: 0 },
//   };

//   useEffect(() => {
//     const fetchPatients = async () => {
//       try {
//         const response = await axios.get(
//           `http://127.0.0.1:8000/api/patients/all/${doctorId}`
//         );
//         setPatientList(response.data.data.patients);
//         localStorage.setItem(
//           `patients_${doctorId}`,
//           JSON.stringify(response.data.data.patients)
//         );
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching patients:", error);
//         setLoading(false);
//       }
//     };

//     const cachedPatients = localStorage.getItem(`patients_${doctorId}`);
//     if (cachedPatients) {
//       setPatientList(JSON.parse(cachedPatients));
//       setLoading(false);
//     } else {
//       fetchPatients();
//     }
//   }, [doctorId]);

//   const handleUpdate = async (id) => {
//     try {
//       const patientToUpdate = patientList.find((patient) => patient.id === id);

//       if (patientToUpdate) {
//         const requestData = {
//           fullName: patientToUpdate.fullName,
//           phone: patientToUpdate.phone,
//           address: patientToUpdate.address,
//           age: patientToUpdate.age,
//           gender: patientToUpdate.gender,
//           email: patientToUpdate.email,
//           password: patientToUpdate.password,
//           id: id,
//         };

//         const response = await axios.post(
//           `http://127.0.0.1:8000/api/patients/update?_method=PUT`,
//           requestData
//         );

//         setEditedPatient(null);
//         setErrorMessages({});

//         const updatedPatientList = patientList.map((patient) =>
//           patient.id === id ? { ...patientToUpdate } : patient
//         );
//         setPatientList(updatedPatientList);
//         localStorage.setItem(
//           `patients_${doctorId}`,
//           JSON.stringify(updatedPatientList)
//         );
//       }
//     } catch (error) {
//       if (error.response) {
//         if (error.response.status === 422) {
//           setErrorMessages(error.response.data.errors);
//         } else {
//           console.error("Server error:", error.response.data.message);
//         }
//       } else if (error.request) {
//         console.error("Request made but no response received:", error.request);
//       } else {
//         console.error("Error setting up request:", error.message);
//       }
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/patients/destroy/${id}`);
//       const updatedPatientList = patientList.filter(
//         (patient) => patient.id !== id
//       );
//       setPatientList(updatedPatientList);
//       localStorage.setItem(
//         `patients_${doctorId}`,
//         JSON.stringify(updatedPatientList)
//       );
//     } catch (error) {
//       console.error("Error deleting patient:", error);
//     }
//   };

//   const handleEditPatient = (id) => {
//     setEditedPatient(id);
//   };

//   const handleChange = (e, id) => {
//     const { name, value } = e.target;

//     setPatientList((prevPatients) =>
//       prevPatients.map((patient) =>
//         patient.id === id ? { ...patient, [name]: value } : patient
//       )
//     );

//     setErrorMessages((prevErrors) => ({
//       ...prevErrors,
//       gender: undefined,
//     }));

//     if (name === "gender" && !value) {
//       setPatientList((prevPatients) =>
//         prevPatients.map((patient) =>
//           patient.id === id ? { ...patient, gender: "male" } : patient
//         )
//       );
//     }
//   };

//   return (
//     <>
//       {loading ? (
//         <div className="listdocload text-center fs-1 d-flex justify-content-center align-content-center">
//           Loading patients ...
//         </div>
//       ) : (
//         <motion.div
//           className="container  patientma"
//           variants={customHomeContainerVariants}
//           initial="initial"
//           animate="animate"
//         >
//           <h1
//             className="p-2 mb-5 w-25"
//             style={{ borderBottom: "1px solid #20B6A3" }}
//           >
//             List of Patients
//           </h1>

//           <div className="mb-3">
//             <p>
//               Use the search bar below to quickly find a patient by their name.
//             </p>
//             <input
//               type="text"
//               className="form-control w-50 mb-5"
//               placeholder="Search by patient name"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>

//           <motion.div className="row g-4 d-flex justify-content-start">
//             {patientList
//               .filter((patient) =>
//                 patient.fullName
//                   .toLowerCase()
//                   .includes(searchQuery.toLowerCase())
//               )
//               .map((patient) => (
//                 <motion.div
//                   className="custom-patient-item col-lg-2 m-3 p-3 border rounded-3 position-relative"
//                   key={patient.id}
//                   variants={customHomeContentVariants}
//                 >
//                   <div>
//                     {editedPatient === patient.id ? (
//                       <>
//                         <input
//                           type="text"
//                           name="fullName"
//                           value={patient.fullName}
//                           onChange={(e) => handleChange(e, patient.id)}
//                         />
//                         <input
//                           type="text"
//                           name="phone"
//                           value={patient.phone}
//                           onChange={(e) => handleChange(e, patient.id)}
//                         />
//                         <input
//                           type="text"
//                           name="address"
//                           value={patient.address}
//                           onChange={(e) => handleChange(e, patient.id)}
//                         />
//                         <input
//                           type="text"
//                           name="email"
//                           value={patient.email}
//                           onChange={(e) => handleChange(e, patient.id)}
//                         />
//                         <input
//                           type="number"
//                           name="age"
//                           value={patient.age}
//                           onChange={(e) => handleChange(e, patient.id)}
//                         />
//                         <select
//                           name="gender"
//                           value={patient.gender}
//                           onChange={(e) => handleChange(e, patient.id)}
//                         >
//                           <option value="male">male</option>
//                           <option value="female">female</option>
//                         </select>
//                         <input
//                           type="password"
//                           name="password"
//                           value={patient.password}
//                           onChange={(e) => handleChange(e, patient.id)}
//                         />
//                         {errorMessages.gender && (
//                           <p className="text-danger">{errorMessages.gender[0]}</p>
//                         )}
//                         {errorMessages.password && (
//                           <p className="text-danger">
//                             {errorMessages.password[0]}
//                           </p>
//                         )}
//                         {errorMessages.fullName && (
//                           <p className="text-danger">
//                             {errorMessages.fullName[0]}
//                           </p>
//                         )}
//                         {errorMessages.phone && (
//                           <p className="text-danger">{errorMessages.phone[0]}</p>
//                         )}
//                         {errorMessages.address && (
//                           <p className="text-danger">
//                             {errorMessages.address[0]}
//                           </p>
//                         )}
//                         {errorMessages.email && (
//                           <p className="text-danger">{errorMessages.email[0]}</p>
//                         )}
//                         {errorMessages.age && (
//                           <p className="text-danger">{errorMessages.age[0]}</p>
//                         )}
//                       </>
//                     ) : (
//                       <>
//                         <h3 className="patient-name">{patient.fullName}</h3>
//                         <p>Phone: {patient.phone}</p>
//                         <p>Address: {patient.address}</p>
//                         <p>Age: {patient.age}</p>
//                         <p>Gender: {patient.gender}</p>
//                       </>
//                     )}
//                   </div>
//                   <div className="custom-button-container position-absolute start-0 end-0 bottom-0 m-3">
//                     {editedPatient === patient.id ? (
//                       <button
//                         className="btn fontb rounded-5 mx-1 py-2"
//                         onClick={() => handleUpdate(patient.id)}
//                       >
//                         Update
//                       </button>
//                     ) : (
//                       <>
//                         <button
//                           className="btn fontb rounded-5 mx-1 py-2"
//                           onClick={() => handleEditPatient(patient.id)}
//                         >
//                           Edit
//                         </button>
//                         <button
//                           className="btn fontb rounded-5 mx-1 py-2"
//                           onClick={() => handleDelete(patient.id)}
//                         >
//                           Delete
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//           </motion.div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default Dpatients;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { DoctorContext } from "../../App";
import { motion } from "framer-motion";

const Dpatients = () => {
  const customDoctorContainerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2, // stagger the animation of children
      },
    },
  };
  
  const customDoctorContentVariants = {
    initial: { opacity: 0, x: -20 }, // Slide in from the left
    animate: { opacity: 1, x: 0 }, // Fade in and slide to the original position
  };
  const [patientList, setPatientList] = useState([]);
  const [editedPatient, setEditedPatient] = useState(null);
  const { doctorId } = useContext(DoctorContext);
  const [errorMessages, setErrorMessages] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const customHomeContainerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const customHomeContentVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/patients/all/${doctorId}`
        );
        const patients = response.data.data.patients;
        setPatientList(patients);
        localStorage.setItem("patientList", JSON.stringify(patients));
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    const localData = localStorage.getItem("patientList");
    if (localData) {
      setPatientList(JSON.parse(localData));
    }

    fetchPatients();
  }, [doctorId]);

  const handleUpdate = async (id) => {
    try {
      const patientToUpdate = patientList.find((patient) => patient.id === id);

      if (patientToUpdate) {
        const requestData = {
          fullName: patientToUpdate.fullName,
          phone: patientToUpdate.phone,
          address: patientToUpdate.address,
          age: patientToUpdate.age,
          gender: patientToUpdate.gender,
          email: patientToUpdate.email,
          password: patientToUpdate.password,
          id: id,
        };

        console.log("Request data being sent:", requestData);

        const response = await axios.post(
          `http://127.0.0.1:8000/api/patients/update?_method=PUT`,
          requestData
        );

        console.log("Update response:", response.data);
        setEditedPatient(null);
        setErrorMessages({});

        // Update the local state with the new patient data
        setPatientList((prevPatients) =>
          prevPatients.map((patient) =>
            patient.id === id ? { ...patientToUpdate } : patient
          )
        );
        localStorage.setItem("patientList", JSON.stringify(patientList));
      } else {
        console.error("Patient not found for id:", id);
      }
    } catch (error) {
      if (error.response) {
        console.error("Validation errors:", error.response.data.errors);
        if (error.response.status === 422) {
          setErrorMessages(error.response.data.errors);
        } else {
          console.error("Server error:", error.response.data.message);
        }
      } else if (error.request) {
        console.error("Request made but no response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/patients/destroy/${id}`
      );
      console.log(response.data);
      setPatientList((prevPatients) =>
        prevPatients.filter((patient) => patient.id !== id)
      );
      localStorage.setItem("patientList", JSON.stringify(patientList));
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  const handleEditPatient = (id) => {
    setEditedPatient(id);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    console.log("Name:", name, "Value:", value);

    setPatientList((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === id ? { ...patient, [name]: value } : patient
      )
    );

    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      gender: undefined,
    }));

    if (name === "gender" && !value) {
      setPatientList((prevPatients) =>
        prevPatients.map((patient) =>
          patient.id === id ? { ...patient, gender: "male" } : patient
        )
      );
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPatients = patientList.filter(patient =>
    patient.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mb-5 patientma">
      <h1 className="p-2 mb-5 w-25 patientma" style={{ borderBottom: "1px solid #20B6A3" }}>
        List of Patients
      </h1>

      <div className="mb-3 mb-5 patientma">
        <p>Use the search bar below to quickly find a patient by their name.</p>
        <input
          type="text"
          className="form-control w-50 mb-5"
          placeholder="Search by patient name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <motion.div className="mergefot  row g-4  d-flex justify-content-start patientma"
      variants={customDoctorContainerVariants}
      initial='initial'
      animate='animate'>
        {filteredPatients.map((patient) => (
          <motion.div
            className="  custom-patient-item col-lg-2 m-3 p-3 mb-5 border rounded-3 position-relative patientma "
            key={patient.id}
            variants={customDoctorContentVariants}
          >
            <div>
              {editedPatient === patient.id ? (
                <>
                  <input
                    type="text"
                    name="fullName"
                    value={patient.fullName}
                    onChange={(e) => handleChange(e, patient.id)}
                  />
                  <input
                    type="text"
                    name="phone"
                    value={patient.phone}
                    onChange={(e) => handleChange(e, patient.id)}
                  />
                  <input
                    type="text"
                    name="address"
                    value={patient.address}
                    onChange={(e) => handleChange(e, patient.id)}
                  />
                  <input
                    type="text"
                    name="email"
                    value={patient.email}
                    onChange={(e) => handleChange(e, patient.id)}
                  />
                  <input
                    type="number"
                    name="age"
                    value={patient.age}
                    onChange={(e) => handleChange(e, patient.id)}
                  />
                  <select
                    name="gender"
                    value={patient.gender}
                    onChange={(e) => handleChange(e, patient.id)}
                  >
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </select>

                  <input
                    type="password"
                    name="password"
                    value={patient.password}
                    onChange={(e) => handleChange(e, patient.id)}
                  />
                  {errorMessages.gender && (
                    <p className="text-danger">{errorMessages.gender[0]}</p>
                  )}
                  {errorMessages.password && (
                    <p className="text-danger">
                      {errorMessages.password[0]}
                    </p>
                  )}
                  {errorMessages.fullName && (
                    <p className="text-danger">
                      {errorMessages.fullName[0]}
                    </p>
                  )}
                  {errorMessages.phone && (
                    <p className="text-danger">{errorMessages.phone[0]}</p>
                  )}
                  {errorMessages.address && (
                    <p className="text-danger">
                      {errorMessages.address[0]}</p>
                  )}
                  {errorMessages.email && (
                    <p className="text-danger">{errorMessages.email[0]}</p>
                  )}
                  {errorMessages.age && (
                    <p className="text-danger">{errorMessages.age[0]}</p>
                  )}
                </>
              ) : (
                <>
                  <h3 className="patient-name">{patient.fullName}</h3>
                  <p>Phone: {patient.phone}</p>
                  <p>Address: {patient.address}</p>
                  <p>Age: {patient.age}</p>
                  <p>Gender: {patient.gender}</p>
                </>
              )}
            </div>
            <div className="custom-button-container position-absolute start-0 end-0 bottom-0 m-3">
              {editedPatient === patient.id ? (
                <button
                  className="btn fontb rounded-5 mx-1 py-2"
                  onClick={() => handleUpdate(patient.id)}
                >
                  Update
                </button>
              ) : (
                <>
                  <button
                    className="btn fontb rounded-5 mx-1 py-2"
                    onClick={() => handleEditPatient(patient.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn fontb rounded-5 mx-1 py-2"
                    onClick={() => handleDelete(patient.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Dpatients;
