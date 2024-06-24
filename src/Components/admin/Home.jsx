import React from 'react';
import landing from "../../img/landing2.jpg";
import doctor from '../../img/doctor.jpg';
import { motion } from "framer-motion";
import Layout from './Layout';
const animationcontent = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1 }
};
const animationcontent2 = {
  initial: { opacity: 1, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1 }
};
const containerVariants = {
  initial: { opacity: 1, x: -20 },
  animate: {
    opacity: 1, 
    x: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};
const serviceItemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};
const customHomeContainerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2, // stagger the animation of children
    },
  },
};

const customHomeContentVariants = {
  initial: { opacity: 0, x: -20 }, // Slide in from the left
  animate: { opacity: 1, x: 0 }, // Fade in and slide to the original position
};
const rightColumnVariants = {
  initial: { opacity: 0, x: -30 }, // Adjusted x value
  animate: { opacity: 1, x: 0,
     transition: { duration: 2 } },
};
const leftColumnVariants = {
  initial: { opacity: 0, x: 30 }, // Adjusted x value
  animate: { opacity: 1, x: 0,
     transition: { duration: 2 } },
};

const Home = () => {
  return (
    // ============================================================ start home ================================================================
    <>
     <div className="row mb-5">
        <div className="col-lg-6 contacth">
          <div className='container'>
            <motion.div
              className='row landingwri mx-5 mt-5'
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
              </style>
              <motion.p className='fonthp' variants={animationcontent}>
                WELCOME TO SOUNDCARE
              </motion.p>
              <motion.h1 className='fonth' variants={animationcontent}>
                A better way for Diagnosis
              </motion.h1>
              <motion.p className='fontp2 mt-3 fs-6' variants={animationcontent}>
              Welcome to Soundcare AI, where cutting-edge technology meets compassionate healthcare. Our platform revolutionizes medical diagnostics by harnessing artificial intelligence and advanced voice analysis.
              </motion.p>

              <div className='row font2 my-5 d-flex justify-content-start align-content-start'>
                <div className='col-6 text-start'>
                  {/* Button trigger modal */}
                  <motion.button type="button" className="btn rounded-5 fontb px-4" data-bs-toggle="modal" data-bs-target="#feedbackModal" variants={animationcontent}>DISCOVER MORE <motion.i className="fa-solid fa-arrow-right mx-2" variants={animationcontent}></motion.i></motion.button>
                </div>
                
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feedback Modal */}
        <div className="modal fade" id="feedbackModal" tabIndex="-1" aria-labelledby="feedbackModalLabel" aria-hidden="true">
          <div className="modal-dialog" style={{ fontFamily: '"Comfortaa", sans-serif' }}>
            <div className="modal-content">
              <div className="modal-header" style={{ backgroundColor: '#81b3b0', color: 'white' }}>
                <h5 className="modal-title" id="feedbackModalLabel">more information</h5>
                <button type="button" className="btn-close closeic" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                {/* Feedback Form */}
             <p>Our project addresses these issues using artificial intelligence and voice analysis through a website or mobile application. The doctor uploads the audio recording to the platform, and the website analyzes the voice and provides a diagnosis (heart rate, respiration count, and a precise disease diagnosis).
Additionally, the patient will have a personal medical record, which can be taken to any other doctor to assist them in understanding the disease and knowing the medications that were previously prescribed.
In a world where remote healthcare is becoming increasingly essential, DPD AI's innovative approach ensures that patients receive accurate and timely medical guidance. By harnessing the power of AI and voice analysis, doctors can now rely on a sophisticated system to aid in their diagnostic process, resulting in more precise and effective treatment recommendations.</p>
              </div>
              {/* Old Style Bottom */}
              <div className="modal-footer">
                <button type="button" className="btn rounded-5 fontb px-4" data-bs-dismiss="modal">Close</button>
                
              </div>
            </div>
          </div>
        </div>

        <div className="righthome col-lg-6">
          <img className='landing' src={landing} alt="Landing" /> {/* Image on the right */}
          <div className='layerd rounded-5'>
            {/* Additional content within the "righthome" column */}
            <a href="https://drive.google.com/file/d/1HNihPrawVpfzqVw86XJS8xh4rxKJ6X7X/view" target="_blank" rel="noopener noreferrer" className='linkhome'>
              <i className="fa-solid fa-play fs-1 ico"></i>
            </a>
          </div>
        </div>
      </div>
<div className='h-25'></div>
      {/*-========================================================================================================================= */}
      <div className='container fontstyle my-5'>
      <div className='nameofdiv'>
        <p className='fonthp'>WHAT WE OFFER</p>
        <h1>Best services available for the<br></br> best customers</h1>
        <p>Don't settle for ordinary. Elevate your well-being with the extraordinary benefits of <br></br>the soundcare project</p>
      </div>
      <motion.div className='row servic mt-5 g-4' variants={containerVariants} initial="initial" whileInView="animate" viewport={{
        once: true,
      }}>
        <motion.div className="col-lg-4 servdiv" variants={serviceItemVariants}>
          <div className='lefticone fs-2'><i className="fa-solid fa-truck-medical"></i></div>
          <div className='rightservice d-flex flex-column'>
            <h5 className='p-2'>disease knowledge</h5>
            <p className='p-2'>"Knowledge of diseases improves<br></br> health outcomes and quality of life." </p>
          </div>
        </motion.div>
        <motion.div className="col-lg-4 servdiv" variants={serviceItemVariants}>
          <div className='lefticone fs-2'><i className="fa-solid fa-user-doctor"></i></div>
          <div className='rightservice d-flex flex-column'>
            <h5 className='p-2'>Disease detection</h5>
            <p className='p-2'>"Artificial intelligence excels in rapid<br></br> and accurate disease detection."</p>
          </div>
        </motion.div>
        <motion.div className="col-lg-4 servdiv" variants={serviceItemVariants}>
          <div className='lefticone fs-2'><i className="fa-solid fa-stethoscope"></i></div>
          <div className='rightservice d-flex flex-column'>
            <h5 className='p-2'>Outdoor Checkup</h5>
            <p className='p-2'>"Outdoor checkups blend health<br></br> with nature's serenity."</p>
          </div>
        </motion.div>
        <motion.div className="col-lg-4 servdiv" variants={serviceItemVariants}>
          <div className='lefticone fs-2'><i className="fa-solid fa-microphone"></i></div>
          <div className='rightservice d-flex flex-column'>
            <h5 className='p-2'>uploud record</h5>
            <p className='p-2'>"Upload records to detect diseases."</p>
          </div>
        </motion.div>
        <motion.div className="col-lg-4 servdiv" variants={serviceItemVariants}>
          <div className='lefticone fs-2'><i className="fa-solid fa-file-waveform"></i></div>
          <div className='rightservice d-flex flex-column'>
            <h5 className='p-2'>Re-follow up</h5>
            <p className='p-2'>"Track and................... manage patient <br></br>recovery and health progress."</p>
          </div>
        </motion.div>
        <motion.div className="col-lg-4 servdiv" variants={serviceItemVariants}>
          <div className='lefticone fs-2'><i className="fa-solid fa-book-medical"></i></div>
          <div className='rightservice d-flex flex-column'>
            <h5 className='p-2'>Medical Report</h5>
            <p className='p-2'>"Key health data for....................... <br></br>medical assessment and care."</p>
          </div>
        </motion.div>
      </motion.div>
    </div>

      {/* ========================================================================================================================= */}

      <div className="home fontstyle container d-flex justify-content-between my-5 bg-white h-100vh">
        <motion.div className='col-md-4 my-5 first' variants={leftColumnVariants} initial="initial" whileInView="animate" viewport={{once:true,}}>
          <header>OUR SERVICES</header>
          <h3>sound care site</h3>
          <p>Enhance your quality of life with sound care Project! Don't miss the chance
            to have access to innovative healthcare services that will help you achieve better well-doing <br />
            <br />
            <button type="button" className="btn rounded-5 fontb px-4" data-bs-toggle="modal" data-bs-target="#feedbackModal" variants={animationcontent}>DISCOVER MORE <i className="fa-solid fa-arrow-right mx-2" variants={animationcontent}></i></button>
            </p>
        </motion.div>
        <motion.div className='col-md-4 me-1' >
          <img src={doctor} className='w-100' alt="Doctor" />
        </motion.div>
        <div className='col-md-4 h-100 my-5 pro shadow-lg p-3 mb-5 bg-body-tertiary rounded my-5 pt-5 pb-5'>
          <h3>Your Health, Your choice</h3>
          <p>"Empowerment in healthcare decisions for personal well-being."</p>
          <motion.div className='w-100 h-100' variants={rightColumnVariants} initial="initial" whileInView="animate" viewport={{once:true,}}>
            <label>Monthly active users</label>
            <div className="progress mt-2" role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar prog" style={{ width: '75%' }}>75%</div>
            </div>
            <label className='mt-2'>user ratings and reviews</label>
            <div className="progress mt-2" role="progressbar" aria-label="Basic example" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar prog" style={{ width: '68%' }}>68%</div>
            </div>
            <label className='mt-2'>most used services</label>
            <div className="progress mt-2" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar prog " style={{ width: '85%' }}>85%</div>
            </div>
            <label className='mt-2'>user satisfaction rate</label>
            <div className="progress mt-2 " role="progressbar" aria-label="Basic example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar prog" style={{ width: '100%' }}>100%</div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
