import React from 'react'
import landing from "../../img/landing2.jpg"
import doctor from '../..//img/doctor.jpg'
import Layout from './Layout'

const Home = () => {
  
  return (
    // ============================================================ start home ================================================================
    <>
  <div className="row mb-5 ">
  <div className="col-lg-6 contacth">
    <div className='container'>
        <div className='row landingwri mx-5 mt-5'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
            </style>
            <p className='fonthp'>WELCOME TO SOUNDCARE</p>
            <h1 className='fonth'>A better way for Diagnosis</h1>
            <p className='fontp2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo fuga reiciendis. Amet, fugiat veniam facere itaque, quod neque inventore veritatis nam sequi, delectus ab voluptas ad blanditiis. Voluptate, nisi!</p>
        </div>
        
        <div className='row font2 my-5 d-flex justify-content-center align-content-center'>
            <div className='col-6 text-end'>
                {/* Button trigger modal */}
                <button type="button" className="btn rounded-5 fontb px-4" data-bs-toggle="modal" data-bs-target="#feedbackModal">Feedback</button>
            </div>
            <div className='col-6 text-start'>
                <button type="button" className="btn rounded-5 fontb px-4">DISCOVER MORE <i className="fa-solid fa-arrow-right mx-2"></i></button>
            </div>
        </div>
    </div>
</div>

{/* Feedback Modal */}
<div className="modal fade" id="feedbackModal" tabIndex="-1" aria-labelledby="feedbackModalLabel" aria-hidden="true">
    <div className="modal-dialog" style={{ fontFamily: '"Comfortaa", sans-serif' }}>
        <div className="modal-content">
        <div className="modal-header" style={{ backgroundColor: '#81b3b0', color: 'white' }}>
    <h5 className="modal-title" id="feedbackModalLabel">Feedback</h5>
    <button type="button" className="btn-close closeic"  data-bs-dismiss="modal" aria-label="Close"></button>
</div>


            <div className="modal-body">
                {/* Feedback Form */}
                <form>
                    <div className="mb-3">
                        <label htmlFor="feedbackInput" className="form-label">Your Feedback</label>
                        <textarea className="form-control" id="feedbackInput" rows="4" required></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">Your Email</label>
                        <input type="email" className="form-control" id="emailInput" required />
                    </div>
                </form>
            </div>
            {/* Old Style Bottom */}
            <div className="modal-footer">
                <button type="button" className="btn rounded-5 fontb px-4" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn rounded-5 fontb px-4">Submit Feedback</button>
            </div>
        </div>
    </div>
</div>



      <div className="righthome col-lg-6">
          <img className='landing' src={landing} alt="Landing" /> {/* Image on the right */}
          <div className='layerd  rounded-5' >
            {/* Additional content within the "righthome" column */}
            <a href="https://drive.google.com/file/d/1HNihPrawVpfzqVw86XJS8xh4rxKJ6X7X/view" target="_blank" rel="noopener noreferrer" className='linkhome'>
           
            <i className="fa-solid fa-play fs-1 ico"></i>
        </a>
           
          </div>
        </div>
    </div>

  
{/*-========================================================================================================================= */}
<div className='countainer  fontstyle my-5 '>
  <div className='nameofdiv'> <p className='fonthp'>WHAT WE OFFER</p> <h1>Best services available for the<br></br> best customers</h1><p>Don't settle for ordinary. Elevate your well-being with the extraordinary benefits of <br></br>the soundcare project</p> </div>
<div className=' row servic mt-5 g-4'>



    
<div className="col-lg-4  servdiv">
  
  <div className='lefticone fs-2 '><i class="fa-solid fa-truck-medical"></i></div>

  <div className='rightservice d-flex flex-column '><h5 className='p-2'>disease knowledge</h5>
<p className='p-2'>Tempus lorem dis interdum sociosqu<br></br> tincidunt quisque faucibus a lacinia</p>
</div>

   </div>

   <div className="col-lg-4  servdiv">
  
   <div className='lefticone fs-2 '><i class="fa-solid fa-user-doctor"></i></div>

   <div className='rightservice d-flex flex-column '><h5 className='p-2'>Disease detection</h5>
<p className='p-2'>Tempus lorem dis interdum sociosqu<br></br> tincidunt quisque faucibus a lacinia</p>
</div>

    </div>

    <div className="col-lg-4  servdiv">
  
  <div className='lefticone fs-2 '><i class="fa-solid fa-stethoscope"></i></div>

  <div className='rightservice d-flex flex-column '><h5 className='p-2'>Outdoor Checkup</h5>
<p className='p-2'>Tempus lorem dis interdum sociosqu<br></br> tincidunt quisque faucibus a lacinia</p>
</div>

   </div>

   <div className="col-lg-4  servdiv">
  
   <div className='lefticone fs-2 '><i class="fa-solid fa-microphone"></i></div>

   <div className='rightservice d-flex flex-column '><h5 className='p-2'>uploud record</h5>
<p className='p-2'>Tempus lorem dis interdum sociosqu<br></br> tincidunt quisque faucibus a lacinia</p>
</div>

    </div>

    <div className="col-lg-4  servdiv">
  
  <div className='lefticone fs-2 '><i class="fa-solid fa-file-waveform"></i></div>

  <div className='rightservice d-flex flex-column '><h5 className='p-2'>Re-follow up
</h5>
<p className='p-2'>Tempus lorem dis interdum sociosqu<br></br> tincidunt quisque faucibus a lacinia</p>
</div>

   </div>

   <div class="col-lg-4  servdiv">
  
  <div className='lefticone fs-2 '><i class="fa-solid fa-book-medical"></i></div>

  <div className='rightservice d-flex flex-column '><h5 className='p-2'>Medical Report
</h5>
<p className='p-2'>Tempus lorem dis interdum sociosqu<br></br> tincidunt quisque faucibus a lacinia</p>
</div>

   </div>


</div>
</div>



{/* ========================================================================================================================= */}

<div className="home fontstyle container d-flex justify-content-between my-5 bg-white h-100  " >
        <div className='col-md-4 my-5 first'>
          <header>OUR SERVICES</header>
          <h3>sound care  site</h3>
          <p>Enhance your quality of life with sound care Project! Don't miss the chance
            to have access to innovative healthcare services that will help you achieve better well-doing <br />
            <br /> 
            <button className='btn btnn  fontb rounded-5  py-2 '>Discover more </button>
            </p>
        </div>
        <div className='col-md-4 me-1'>
          <img src={doctor} className='w-100 ' alt="" />
        </div>
        <div className='col-md-4 h-100 my-5 pro shadow-lg p-3 mb-5 bg-body-tertiary rounded my-5 pt-5 pb-5'>
          <h3>Your Health,Your choice</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, quis?</p>
      <div className='w-100 h-100'>
        <label>Monthly active users</label>
  <div className="progress mt-2" role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
    <div className="progress-bar prog" style={{width: '75%'}} />75%
  </div>
  <label className='mt-2'>user ratings and reviews</label>

  <div className="progress mt-2" role="progressbar" aria-label="Basic example" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}>
    <div className="progress-bar prog" style={{width: '68%'}} />68%
  </div>
  <label className='mt-2'>most used services</label>

  <div className="progress mt-2 " role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
    <div className="progress-bar prog " style={{width: '85%'}} />85%
  </div>


  <label className='mt-2'>user statification rate</label>
  <div className="progress mt-2" role="progressbar" aria-label="Basic example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
    <div className="progress-bar prog" style={{width: '100%'}} />
  </div>
</div>

        </div>
      </div>
{/* ========================================================================================================================== */}
   

   
   
   
   
   
   
   
   
   
    </>
  )
}

export default Home;
