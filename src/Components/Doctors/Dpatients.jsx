import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { DoctorContext } from "../../App";

const Dpatients = () => {
  const [patientList, setPatientList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editedPatient, setEditedPatient] = useState(null);
  const { doctorId } = useContext(DoctorContext);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/patients/all/${doctorId}`
        );
        setPatientList(response.data.data.patients);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

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
         // Include password in the request
        };

        console.log("Request data being sent:", requestData);

        const response = await axios.post(
          `http://127.0.0.1:8000/api/patients/update?_method=PUT`,
          requestData
        );

        console.log("Update response:", response.data);
        setEditedPatient(null);
        setErrorMessages({}); // Clear previous error messages on successful update

        // Update the local state with the new patient data
        setPatientList((prevPatients) =>
          prevPatients.map((patient) =>
            patient.id === id ? { ...patientToUpdate } : patient
          )
        );
      } else {
        console.error("Patient not found for id:", id);
      }
    } catch (error) {
      if (error.response) {
        console.error("Validation errors:", error.response.data.errors);
        if (error.response.status === 422) {
          // Handle validation errors (422 Unprocessable Entity)
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

    // Update patientList state with new value
    setPatientList((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === id ? { ...patient, [name]: value } : patient
      )
    );

    // Clear error message for gender if valid
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      gender: undefined, // Clear error message if gender is valid
    }));

    // Set default value for gender if it's not already set
    if (name === "gender" && !value) {
      setPatientList((prevPatients) =>
        prevPatients.map((patient) =>
          patient.id === id ? { ...patient, gender: "male" } : patient
        )
      );
    }
  };

  return (
    <>
      {loading ? (
        <div className="listdocload text-center fs-1 d-flex justify-content-center align-content-center">
          Loading patients ...
        </div>
      ) : (
        <div className="container">
          <h1
            className="p-2 mb-5 w-25"
            style={{ borderBottom: "1px solid #20B6A3" }}
          >
            List of Patients
          </h1>

          <div className="row g-4 d-flex justify-content-center">
            {patientList.map((patient) => (
              <div
                className="custom-patient-item col-lg-2 m-3 p-3 border rounded-3 position-relative"
                key={patient.id}
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
                          {errorMessages.address[0]}
                        </p>
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
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Dpatients;




























