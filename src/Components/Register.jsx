import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Register = () => {
  // Define user state and setUser function using useState hook
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    password: ''
  });

  // Make a copy of the user state
  let myUser = { ...user };

  useEffect(() => {
    if (
      user.first_name !== '' ||
      user.last_name !== '' ||
      user.age !== '' ||
      user.email !== '' ||
      user.password !== ''
    ) {
      console.log('User data has been updated:', user);
      // Perform your action here
    }
  }, [user]);

  const [apimsg, setMsg] = useState(''); // Corrected typo here

  async function register() {
   
      let { data } = await axios.post('https://movies-api.routemisr.com/signup', user);
      if (data.errors !== undefined) {
        setMsg(data.errors.email.message);
      } else {
        setMsg(data.message);
      }
   
  }

  return (
    <div className='container'>
      <h1>Registration Form</h1>
      <form onSubmit={(e) => { e.preventDefault(); register(); }}>
        <label>First Name:</label>
        <input type='text'
          onChange={(e) => {
            myUser.first_name = e.target.value;
            setUser(myUser);
            console.log(user);
          }}
          className='form-control'
        />
        <label>Last Name:</label>
        <input type='text'
          onChange={(e) => {
            myUser.last_name = e.target.value;
            setUser(myUser);
            console.log(user);
          }}
          className='form-control'
        />
        <label>Age:</label>
        <input type='text'
          onChange={(e) => {
            myUser.age = e.target.value;
            setUser(myUser);
            console.log(user);
          }}
          className='form-control'
        />
        <label>Email:</label>
        <input type='text'
          onChange={(e) => {
            myUser.email = e.target.value;
            setUser(myUser);
            console.log(user);
          }}
          className='form-control'
        />
        <label>Password:</label>
        <input type='text'
          onChange={(e) => {
            myUser.password = e.target.value;
            setUser(myUser);
            console.log(user);
          }}
          className='form-control'
        />
        <button type='submit' className='btn btn-info mt-2'>Register</button> {/* Added type="submit" */}
        <h1 className='bg-danger'>{apimsg}</h1>
      </form>
    </div>
  );
};

export default Register;
