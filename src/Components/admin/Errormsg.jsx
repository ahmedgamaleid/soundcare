import React from 'react';
import error from '../../img/404 error with person looking for-bro.png';

const Errormsg = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <img src={error} alt="Error" className='w-75 h-100 overflow-y-hidden'/>
    </div>
  );
};

export default Errormsg;
