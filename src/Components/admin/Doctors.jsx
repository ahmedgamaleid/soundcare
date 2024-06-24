// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion"; // Import Framer Motion

// const Doctors = () => {
//   const [doctorContainer, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredDoctors, setFilteredDoctors] = useState([]);
//   const customHomeContainerVariants = {
//     animate: {
//       transition: {
//         staggerChildren: 0.2, // stagger the animation of children
//       },
//     },
//   };

//   const customHomeContentVariants = {
//     initial: { opacity: 0, x: -20 }, // Slide in from the left
//     animate: { opacity: 1, x: 0 }, // Fade in and slide to the original position
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false); // Set loading to false after 2 seconds
//     }, 2000);

//     return () => clearTimeout(timer); // Cleanup timer on component unmount
//   }, []);

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         // Check if data is in localStorage
//         const storedDoctors = localStorage.getItem('doctors');

//         if (storedDoctors) {
//           // Use data from localStorage
//           setDoctors(JSON.parse(storedDoctors));
//         } else {
//           // Fetch data from API
//           const { data } = await axios.get(
//             "http://127.0.0.1:8000/api/doctors/all"
//           );
//           setDoctors(data.data.doctors);

//           // Save data to localStorage
//           localStorage.setItem('doctors', JSON.stringify(data.data.doctors));
//         }
//       } catch (error) {
//         console.error("Error fetching doctors:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDoctors();
//   }, []);

//   useEffect(() => {
//     setFilteredDoctors(
//       doctorContainer.filter((doctor) =>
//         doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//   }, [searchQuery, doctorContainer]);

//   const handleUpdate = async (id) => {
//     try {
//       const doctorToUpdate = doctorContainer.find((doctor) => doctor.id === id);
//       const response = await axios.put(
//         `http://127.0.0.1:8000/api/doctors/update?_method=PUT`,
//         doctorToUpdate
//       );
//       console.log(response.data); // Handle the response accordingly

//       // Update the doctor list and set editing to false for the updated doctor
//       const updatedDoctors = doctorContainer.map((doctor) =>
//         doctor.id === id ? { ...doctor, editing: false } : doctor
//       );
//       setDoctors(updatedDoctors);

//       // Update localStorage
//       localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
//     } catch (error) {
//       console.error("Error updating doctor:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.delete(
//         `http://127.0.0.1:8000/api/doctors/destroy/${id}?_method=DELETE`
//       );
//       console.log(response.data); // Handle the response accordingly

//       // Remove the deleted doctor from the list
//       const updatedDoctors = doctorContainer.filter((doctor) => doctor.id !== id);
//       setDoctors(updatedDoctors);

//       // Update localStorage
//       localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
//     } catch (error) {
//       console.error("Error deleting doctor:", error);
//     }
//   };

//   const handleEdit = (id) => {
//     // Set a flag in the doctor object to enable editing
//     setDoctors((prevDoctors) =>
//       prevDoctors.map((doctor) =>
//         doctor.id === id ? { ...doctor, editing: true } : doctor
//       )
//     );
//   };

//   const handleChange = (e, id) => {
//     const { name, value } = e.target;
//     setDoctors((prevDoctors) =>
//       prevDoctors.map((doctor) =>
//         doctor.id === id ? { ...doctor, [name]: value } : doctor
//       )
//     );
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <>
//       {loading ? (
//         <div className="listdocload text-center fs-1 d-flex justify-content-start align-content-start">
//           Current doctors ...
//         </div>
//       ) : (
//         <div className="container">
//           <h1
//             className="p-2 mb-5 w-25"
//             style={{ borderBottom: "1px solid #20B6A3" }}
//           >
//             List of Doctors
//           </h1>
//           <div className="mb-3">
//             <p>
//               Use the search bar below to quickly find a doctor by their name.
//             </p>
//             <input
//               type="text"
//               className="form-control  w-50  mb-5"
//               placeholder="Search by doctor name..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//           </div>

//           <motion.div
//             className="row g-4 d-flex justify-content-start"
//             variants={customHomeContainerVariants}
//             initial="initial"
//             animate="animate"
//           >
//             {filteredDoctors.map((doctor) => (
//               <motion.div
//                 className="doctorli col-lg-2 m-3 p-3 border rounded-3 position-relative"
//                 key={doctor.id}
//                 variants={customHomeContentVariants}
//               >
//                 <div>
//                   {doctor.editing ? (
//                     <>
//                       <input
//                         type="text"
//                         name="name"
//                         value={doctor.name}
//                         onChange={(e) => handleChange(e, doctor.id)}
//                       />
//                       <input
//                         type="text"
//                         name="phone"
//                         value={doctor.phone}
//                         onChange={(e) => handleChange(e, doctor.id)}
//                       />
//                       <input
//                         type="text"
//                         name="address"
//                         value={doctor.address}
//                         onChange={(e) => handleChange(e, doctor.id)}
//                       />
//                       <input
//                         type="number"
//                         name="years_of_experience"
//                         value={doctor.years_of_experience}
//                         onChange={(e) => handleChange(e, doctor.id)}
//                       />
//                     </>
//                   ) : (
//                     <>
//                       <h3 className="named">{doctor.name}</h3>
//                       <p>Phone: {doctor.phone}</p>
//                       <p>Address: {doctor.address}</p>
//                       <p>Years of Experience: {doctor.years_of_experience}</p>
//                     </>
//                   )}
//                 </div>
//                 <div className="bbtcon-custom position-absolute start-0 end-0 bottom-0 m-3">
//                   {doctor.editing ? (
//                     <button
//                       className="btn fontb rounded-5 mx-1 py-2"
//                       onClick={() => handleUpdate(doctor.id)}
//                     >
//                       Update
//                     </button>
//                   ) : (
//                     <>
//                       <button
//                         className="btn fontb rounded-5 mx-1 py-2"
//                         onClick={() => handleEdit(doctor.id)}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         className="btn fontb rounded-5 mx-1 py-2"
//                         onClick={() => handleDelete(doctor.id)}
//                       >
//                         Delete
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Doctors;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

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

const Doctors = () => {
  const [doctorContainer, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get('http://127.0.0.1:8000/api/doctors/all');
        setDoctors(data.data.doctors); // Update state with doctors array from response
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleUpdate = async (id) => {
    try {
      const doctorToUpdate = doctorContainer.find(doctor => doctor.id === id);
      const response = await axios.put(`http://127.0.0.1:8000/api/doctors/update?_method=PUT`, doctorToUpdate);
      console.log(response.data); // Handle the response accordingly

      // Update the doctor list and set editing to false for the updated doctor
      setDoctors(prevDoctors => 
        prevDoctors.map(doctor =>
          doctor.id === id ? { ...doctor, editing: false } : doctor
        )
      );
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/doctors/destroy/${id}?_method=DELETE`);
      console.log(response.data); // Handle the response accordingly
      // Remove the deleted doctor from the list
      setDoctors(prevDoctors => prevDoctors.filter(doctor => doctor.id !== id));
    } catch (error) {
      console.error('Error deleting doctor:', error);
    }
  };

  const handleEdit = (id) => {
    // Set a flag in the doctor object to enable editing
    setDoctors(prevDoctors => 
      prevDoctors.map(doctor =>
        doctor.id === id ? { ...doctor, editing: true } : doctor
      )
    );
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setDoctors(prevDoctors => 
      prevDoctors.map(doctor =>
        doctor.id === id ? { ...doctor, [name]: value } : doctor
      )
    );
  };

  const filteredDoctors = doctorContainer.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='container vh-100'>
      <h1 className='p-2 mb-5 w-25' style={{ borderBottom: '1px solid #20B6A3' }}>List of Doctors</h1>

      <div className='mb-3'>
        <p>Use the search bar below to quickly find a doctor by their name.</p>
        <input
          type='text'
          className='form-control w-50 mb-5'
          placeholder='Search by doctor name...'
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <motion.div
        className='row g-4 d-flex justify-content-start mb-5'
        variants={customDoctorContainerVariants}
        initial='initial'
        animate='animate'
      >
        {filteredDoctors.map(doctor => (
          <motion.div
          
            key={doctor.id}
            className='doctorli col-lg-2 m-3 p-3 border rounded-3 position-relative'
            variants={customDoctorContentVariants}
          >
            <div>
              {doctor.editing ? (
                <>
                  <input type='text' name='name' value={doctor.name} onChange={(e) => handleChange(e, doctor.id)} />
                  <input type='text' name='phone' value={doctor.phone} onChange={(e) => handleChange(e, doctor.id)} />
                  <input type='text' name='id' value={doctor.id} onChange={(e) => handleChange(e, doctor.id)} />
                  <input type='email' name='email' value={doctor.email} onChange={(e) => handleChange(e, doctor.id)} />
                  <input type='text' name='address' value={doctor.address} onChange={(e) => handleChange(e, doctor.id)} />
                  <input type='password' name='address' value={doctor.password} onChange={(e) => handleChange(e, doctor.id)} />
                  <input type='number' name='years_of_experience' value={doctor.years_of_experience} onChange={(e) => handleChange(e, doctor.id)} />
                </>
              ) : (
                <>
              <div className='  '>

              <h3 className='named '>{doctor.name}</h3>
                  {/* <p>email:<br></br> {doctor.email}    </p> */}
                
                  <p>Phone: {doctor.phone}</p>
                  <p>Address: {doctor.address}</p>
                  <p>id: {doctor.id}</p>
                  <p>Years of Experience: {doctor.years_of_experience}</p>
              </div>
                
                </>
              )}
            </div>
            <div className='bbtcon-custom position-absolute start-0 end-0 bottom-0 m-3'>
              {doctor.editing ? (
                <button className='btn fontb rounded-5 mx-1 py-2' onClick={() => handleUpdate(doctor.id)}>Update</button>
              ) : (
                <>
                  <button className='btn fontb rounded-5 mx-1 py-2' onClick={() => handleEdit(doctor.id)}>Edit</button>
                  <button className='btn fontb rounded-5 mx-1 py-2' onClick={() => handleDelete(doctor.id)}>Delete</button>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Doctors;
