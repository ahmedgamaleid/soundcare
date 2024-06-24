import React from 'react'
import PropTypes from 'prop-types'
import dr from '../../img/dr.jpg'
import { motion } from "framer-motion";
function About(props) {
  const rightColumnVariants = {
    initial: { opacity: 0, x: -20 }, // Adjusted x value
    animate: { opacity: 1, x: 0,
       transition: { duration: 2 } },
  };
  const leftColumnVariants = {
    initial: { opacity: 0, x: 20 }, // Adjusted x value
    animate: { opacity: 1, x: 0,
       transition: { duration: 2 } },
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
    animate: { opacity: 1, x: 0, }, // Fade in and slide to the original position
  };
  return (
    <>
  
  <div className="container my-5 d-flex justify-content-between g-4">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
        </style>
        <motion.div
          className="row d-flex justify-content-between g-4"
          initial="initial"
          animate="animate"
        >
          <motion.div className="col-lg-6" variants={leftColumnVariants}>
            <div className="row">
              <div className="col-lg-12 drimg">
                <img src={dr} className="w-100 h-100 rounded-4" />
                <div className="childdr text-center rounded-cycle">
                  <h1>25+</h1>
                  <spam className="spamst">YEARS OF EXPERIENCE</spam>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="col-lg-6" variants={rightColumnVariants}>
            <div className="row">
              <div className="col-lg-12 rightabout mx-5">
                <header className="headerco my-4">ABOUT US</header>
                <h1 className="my-3">
                  We Are Professional <br />
                  Diagnosis & Medical <br />
                  Service
                </h1>
                <p>
                "We are professionals dedicated to diagnosis and medical services. Through teamwork, we strive to find the best solutions for our patients."

This version maintains clarity and emphasizes both professionalism and collaboration in your approach to healthcare.
                </p>
                <button type="button" className="btn rounded-5 fontb px-4" data-bs-toggle="modal" data-bs-target="#feedbackModal" >DISCOVER MORE <i className="fa-solid fa-arrow-right mx-2" ></i></button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
   {/* about more */}
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

   <motion.div
        className="container fontstyle my-3 d-flex justify-content-center text-center my-5"
        variants={customHomeContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="col-md-4 second-color brdr about"
          variants={customHomeContentVariants}
        >
          <div className="py-3 ps-5">
            <i className="fa-solid fa-user-doctor icon"></i>
            <h3 className="about-h">Understanding Your Unique Needs
            </h3>
            <p className="about-p">
            At our clinic, we recognize that each patient's journey with pulmonary diseases is unique. We offer personalized health consultations to tailor treatment plans specifically to your medical history, lifestyle, and health goals. Whether you are managing chronic obstructive pulmonary disease (COPD), asthma, or interstitial lung disease, our expert team is dedicated to providing care that addresses your individual needs.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="col-md-4 second-color brdr ms-5 about"
          variants={customHomeContentVariants}
        >
          <div className="py-3 ps-5">
            <i className="fa-solid fa-heart-pulse icon"></i>
            <h3 className="about-h">Comprehensive Diagnostic Approach
            </h3>
            <p className="about-p">
            Our personalized consultation begins with a comprehensive diagnostic evaluation. Utilizing advanced imaging techniques, pulmonary function tests, and a thorough review of your medical history, we pinpoint the exact nature and severity of your condition. This precise diagnosis allows us to create a targeted treatment plan that optimizes your health outcomes.

            </p>
          </div>
        </motion.div>
        <motion.div
          className="col-md-4 second-color brdr ms-5 about about-th"
          variants={customHomeContentVariants}
        >
          <div className="py-3 ps-5">
            <i className="fa-solid fa-heart-pulse icon"></i>
            <h3 className="about-h">
Tailored Treatment Plans
</h3>
            <p className="about-p">
            Based on your unique diagnostic profile, we develop a customized treatment plan designed to improve your lung function, reduce symptoms, and enhance your quality of life. Our treatments may include medication management, respiratory therapy, lifestyle modifications, and, if necessary, advanced interventions such as minimally invasive surgery or pulmonary rehabilitation programs.

            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

About.propTypes = {

}

export default About

