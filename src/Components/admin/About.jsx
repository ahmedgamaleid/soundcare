import React from 'react'
import PropTypes from 'prop-types'
import dr from '../../img/dr.jpg'
function About(props) {
  return (
    <>
  
          <div className='container my-5 d-flex justify-content-between g-4 '>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
  </style>
  <div className='row d-flex justify-content-between g-4'>
    <div className='col-lg-6'>
      <div className="row">
        <div className='col-lg-12 drimg'>
          <img src={dr} className='w-100 h-100 rounded-4' />
          <div className='childdr text-center  rounded-cycle '> 
            <h1>25+</h1>
            <spam className='spamst'>YEARS OF EXPERIENCE</spam>
          </div>
        </div>
      </div>
    </div>
    <div className='col-lg-6'>
      <div className="row">
        <div className='col-lg-12 rightabout mx-5'>
          <header className='headerco my-4'>ABOUT US</header>
          <h1 className='my-3'>We Are Professional <br></br> Diagnosis & Medical <br></br>Service</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minus provident ex aperiam officiis minima temporibus, ea obcaecati voluptatum, dolorem ab porro rem ducimus id doloremque perspiciatis voluptates! Obcaecati, facilis.</p>
          <button className='btn btnn main-color fontb rounded-5  py-2 '>Discover more </button>
        </div>
      </div>
    </div>
  </div>
</div>
   {/* about more */}

   <div className='container fontstyle my-3 d-flex justify-content-center text-center my-5'>
  <div className="col-md-4 second-color brdr about">
    <div className='py-3 ps-5'>
      <i className="fa-solid fa-user-doctor icon"></i>
      <h3 className='about-h'>Personalized Health Consultations</h3>
      <p className='about-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit reiciendis error dolorem. Laudantium consectetur omnis, fugit incidunt cupiditate facilis id.</p>
    </div>
  </div>
  <div className="col-md-4 second-color brdr ms-5 about">
    <div className='py-3 ps-5'>
      <i className="fa-solid fa-heart-pulse icon"></i>
      <h3 className='about-h'>Personalized Health Consultations</h3>
      <p className='about-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit reiciendis error dolorem. Laudantium consectetur omnis, fugit incidunt cupiditate facilis id.</p>
    </div>
  </div>
  <div className="col-md-4 second-color brdr ms-5 about about-th">
    <div className='py-3 ps-5'>
      <i className="fa-solid fa-heart-pulse icon"></i>
      <h3 className='about-h'>Personalized Health Consultations</h3>
      <p className='about-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit reiciendis error dolorem. Laudantium consectetur omnis, fugit incidunt cupiditate facilis id.</p>
    </div>
  </div>
</div>
    </>
  )
}

About.propTypes = {

}

export default About

