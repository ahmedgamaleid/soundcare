import React from 'react'
import landing from "../img/landing2.jpg"
 
const Home = () => {
  return (
    // ============================================================ start home ================================================================
    <>
  <div className="row">
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
<div className='countainer fontstyle my-5 '>
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



    </>
  )
}

export default Home;
