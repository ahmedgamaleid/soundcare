import React, { useEffect, useState ,useContext} from 'react';
import { ResponsiveContainer, BarChart, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts';
import axios from 'axios';
import Joi from 'joi';
import { DoctorContext } from '../../App';
const Ddashboard = () => {
    const [userPatient, setUserPatient] = useState({
        fullName: '',
        phone: '',
        address: '',
        age: '',
        gender: '', // Initialize to empty string
        email: '',
        password: '',
        doc_id: ''
    });
    const [addmsg, setaddmsg] = useState('');
    const [patientContainer, setPatientContainer] = useState([]);
    

    useEffect(() => {
        if (
            userPatient.fullName !== '' ||
            userPatient.phone !== '' ||
            userPatient.address !== '' ||
            userPatient.age !== '' ||
            userPatient.age !== '' ||
            userPatient.email !== '' ||
            userPatient.password !== '' ||
            userPatient.doc_id !== '' // Include doc_id here
        ) {
            console.log(userPatient);
        }
    }, [userPatient]);
////////////////////////////////////////////////////////////////// view num of patient in div ///////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        const getPatients = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/patients/all');
                console.log(response.data.data);
                setPatientContainer(response.data.data.patients);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        getPatients();
    }, []);
////////////////////////////////////////////////////////////////////// add patient ////////////////////////////////////////////////////////////////////////
const checkDoctorExists = async (docId) => {
    try {
        // Parse docId to ensure it's a number
        const parsedDocId = parseInt(docId);

        const response = await axios.get(`http://127.0.0.1:8000/api/doctors/all?id=${parsedDocId}`);
        const doctors = response.data.data.doctors;
        
        // Check if any doctor with the matching id exists
        return doctors.some(doctor => doctor.id === parsedDocId);
    } catch (error) {
        console.error('Error checking doctor existence:', error);
        return false;
    }
};


const addPatient = async () => {
    try {
        // Validate patient data
        const { error } = patientSchema.validate(userPatient, { abortEarly: false });
        if (error) {
            setaddmsg(error.details.map(detail => detail.message).join(', '));
            return;
        }

        // Add the patient
        const response = await axios.post('http://127.0.0.1:8000/api/patients/store', userPatient);
        if (response.data.message === 'Patient Successfully Created') {
            // Patient added successfully
            setaddmsg('Patient added successfully!');
            // Reset form fields
            setUserPatient({
                fullName: '',
                phone: '',
                address: '',
                age: '',
                gender: '',
                email: '',
                password: '',
                doc_id: ''
            });
        } else {
            // Failed to add patient
            setaddmsg('Failed to add patient. Please try again.');
        }
    } catch (error) {
        // Handle network errors or other exceptions
        console.error('Error adding patient:', error);
        setaddmsg('An error occurred while adding the patient. Please try again later.');
    }
};

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserPatient(prevState => ({
        ...prevState,
        [name]: value
    }));
};

const patientSchema = Joi.object({
    fullName: Joi.string().min(2).required(),
    phone: Joi.string().min(10).max(15).required(),
    address: Joi.string().required(),
    age: Joi.number().integer().min(0).required(),
    gender: Joi.string().valid('male', 'female', 'Other').required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().min(6).required(),
    doc_id: Joi.string().required()
});

    const [selectedButton, setSelectedButton] = useState('button1');

    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    const data = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    ];
    // ///////////////////////////////////////////////////////////////////// part 3 ///////////////////////////////////////////////////////////////////////////
    const [patients, setPatients] = useState([]);
    const [selectedPatientId, setSelectedPatientId] = useState(null);
    const [audioFile, setAudioFile] = useState(null);
    const [result, setResult] = useState(null);
    const {doctorId} = useContext(DoctorContext)
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/patients/all/${doctorId}`)
            .then(response => response.json())
            .then(data => setPatients(data.data.patients))
            .catch(error => console.error('Error fetching patients:', error));
    }, []);

    const handlePatientSelect = (patientId) => {
        setSelectedPatientId(patientId);
    };

    const handleAudioUpload = (event) => {
        setAudioFile(event.target.files[0]);
    };

   const handleButtonnClick = async () => {
    try {
        if (!audioFile || !selectedPatientId) {
            throw new Error('Audio file or patient not selected.');
        }

        const formData = new FormData();
        formData.append('patient_id', selectedPatientId);
        formData.append('audio_path', audioFile);

        const response = await fetch('http://127.0.0.1:8000/api/report/store_result', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const result = await response.json(); // Assuming the server returns text response

        setResult(result);
    } catch (error) {
        console.error('Error storing result:', error);
    }
};

    
    
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>
            <div className='row' style={{ height: '100vh' }}>
                <div className='col-lg-1 sidebars d-flex flex-column justify-content-around '>
                    <button onClick={() => handleButtonClick('button1')} className={`buttons ${selectedButton === 'button1' ? 'selected' : ''}`}>
                        <i className="fa-solid fa-house fs-2"></i>
                    </button>
                    <button onClick={() => handleButtonClick('button2')} className={`buttons ${selectedButton === 'button2' ? 'selected' : ''}`}>
                        <i className="fa-solid fa-user-plus fs-2"></i>
                    </button>
                    <button onClick={() => handleButtonClick('button3')} className={`buttons ${selectedButton === 'button3' ? 'selected' : ''}`}>
                        <i className="fa-solid fa-bell  fs-2"></i>
                    </button>
                    <button onClick={() => handleButtonClick('button4')} className={`buttons ${selectedButton === 'button4' ? 'selected' : ''}`}>
                        <i className="fa-solid fa-bell  fs-2"></i>
                    </button>
                </div>
                <div className='col-lg-11 col-md-10 Contentside container' style={{ height: '100%' }}>
                    {selectedButton === 'button1' && (
                        <div className='container'>
                            <main className='main-container'>
                                <div className='main-title'>
                                    <h1 className='p-3'>information</h1>
                                    <hr className='hrline' />
                                </div>
                                <div className='main-cards d-flex justify-content-around'>
                                    <div className='card p-5'>
                                        <div className='card-inner'>
                                            <h3>Reports</h3>
                                            <i className="fa-solid fa-book icon"></i>
                                        </div>
                                        <h1>300</h1>
                                    </div>
                                    <div className='card p-5'>
                                        <div className='card-inner'>
                                            <h3>Records</h3>
                                            <i className="fa-regular fa-file-audio"></i>
                                        </div>
                                        <h1>12</h1>
                                    </div>
                                    <div className='card p-5'>
                                        <div className='card-inner'>
                                            <h3>Patients</h3>
                                            <i className="fa-solid fa-user-group icon "></i>
                                        </div>
                                        <h1>{patientContainer.length}</h1>
                                    </div>
                                    <div className='card p-5'>
                                        <div className='card-inner'>
                                            <h3>ALERTS</h3>
                                            <i className="fa-solid fa-bell"></i>
                                        </div>
                                        <h1>42</h1>
                                    </div>
                                </div>

                                <div className='charts d-flex mt-5'>
                                    <div style={{ width: '50%', height: '300px' }}>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart
                                                data={data}
                                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Bar dataKey="pv" fill="#8884d8" />
                                                <Bar dataKey="uv" fill="#82ca9d" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div style={{ width: '50%', height: '300px' }}>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart
                                                data={data}
                                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </main>
                        </div>
                    )}
                    {selectedButton === 'button2' && (
                        <div className='container'>
                            <h1 className='p-2 mb-5 w-25' style={{ borderBottom: '1px solid #20B6A3' }}>Add Patient</h1>
                            <div className='d-flex justify-content-center'>
                                <div className='divformdoc'>
                                    <div className='overlayformdoc'></div>
                                    <div className='contactformdoc'>
                                        <h1 className='text-white p-5 formdoc'>Please fill out all entries in this form to add a new patient.</h1>
                                    </div>
                                </div>
                                <form className='row g-4 d-flex justify-content-center' onSubmit={(e) => { e.preventDefault(); addPatient(); }}>
    <div className="col-5">
        <label htmlFor="patientName" className="form-label">Patient's Name</label>
        <input onChange={handleInputChange} type="text" className="form-control" name="fullName" placeholder="Enter patient's name" value={userPatient.fullName} />
    </div>
    <div className="col-5">
        <label htmlFor="patientPhone" className="form-label">Patient's Phone</label>
        <input onChange={handleInputChange} type="text" className="form-control" name="phone" placeholder="Enter patient's phone" value={userPatient.phone} />
    </div>
    <div className="col-5">
        <label htmlFor="patientAddress" className="form-label">Patient's Address</label>
        <input onChange={handleInputChange} type="text" className="form-control" name="address" placeholder="Enter patient's address" value={userPatient.address} />
    </div>
    <div className="col-5">
        <label htmlFor="patientAge" className="form-label">Patient's Age</label>
        <input onChange={handleInputChange} type="number" className="form-control" name="age" placeholder="Enter patient's age" value={userPatient.age} />
    </div>
    <div className="col-5">
                        <label htmlFor="patientGender" className="form-label">Patient's Gender</label>
                        <select onChange={handleInputChange} className="form-select" name="gender" value={userPatient.gender}>
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
    <div className="col-5">
        <label htmlFor="patientEmail" className="form-label">Patient's Email</label>
        <input onChange={handleInputChange} type="email" className="form-control" name="email" placeholder="Enter patient's email" value={userPatient.email} />
    </div>
    <div className="col-5">
        <label htmlFor="patientPassword" className="form-label">Patient's Password</label>
        <input onChange={handleInputChange} type="password" className="form-control" name="password" placeholder="Enter patient's password" value={userPatient.password} />
    </div>
    <div className="col-5">
        <label htmlFor="doctorID" className="form-label">Doctor's ID</label>
        <input onChange={handleInputChange} type="text" className="form-control" name="doc_id" placeholder="Enter doctor's ID" value={userPatient.doc_id} />
    </div>
    <div className='container mx-5'>
        <button type="submit" className="btn fontb rounded-5 my-3 mx-5">Add Patient</button>
    </div>
</form>


                                {addmsg && (
    <div className="container mx-5">
        <div className={`alert ${addmsg.includes('error') ? 'alert-danger' : 'alert-success'}`}>{addmsg}</div>
    </div>
)}

                            </div>
                        </div>
                    )}
{selectedButton === 'button3' && (
                <div className='container'>
                    <div className='main-title'>
                        <h1 className='p-3'>Upload Audio</h1>
                        <hr className='hrline' />
                    </div>
                    <div className="row pt-4">
                        <div className="col-lg-6">
                            <div>
                                <h3>Using Audio to Detect Diseases</h3>
                                <p>
                                    Audio analysis has become a valuable tool in healthcare for detecting various diseases.
                                    For example, certain respiratory conditions, such as asthma and chronic obstructive pulmonary disease (COPD),
                                    can be diagnosed or monitored by analyzing the sound of a patient's breathing.
                                    Similarly, abnormalities in heart sounds, known as heart murmurs, can indicate cardiovascular issues.
                                    Machine learning algorithms are often employed to analyze audio data and identify patterns associated with specific diseases,
                                    providing healthcare professionals with valuable insights for diagnosis and treatment.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <div className="patient-selection w-75">
                                <h2>Select Patient</h2>
                                <select className="form-select" onChange={(e) => handlePatientSelect(parseInt(e.target.value))}>
                                    <option value="">Select Patient</option>
                                    {patients.map(patient => (
                                        <option className='p-3' key={patient.id} value={patient.id}>
                                            {patient.fullName} - {patient.email}
                                        </option>
                                    ))}
                                </select>
                                <div className="selected-patient">
                                    <h5 className='my-2'>Selected Patient</h5>
                                    {selectedPatientId ? (
                                        <div>
                                            <p>ID: {selectedPatientId}</p>
                                            <div className="upload-audio">
                                                <h5>Upload Audio</h5>
                                                <input type="file" className="form-control" accept="audio/*" onChange={handleAudioUpload} />
                                                <button className="btn btn-primary mt-3" onClick={handleButtonnClick}>Next</button>
                                            </div> 
                                        </div>
                                    ) : (
                                        <p className='m-2'>Please select a patient.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
           {result && (
                <div className="container mt-4">
                    <h2>Result</h2>
                    <p>{result.data.result}</p>
                </div>
            )}
            








                    {selectedButton === 'button4' && (
                        // Code for button 4 content
                        <div>
                            <h1>Button 4 Content</h1>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Ddashboard;
