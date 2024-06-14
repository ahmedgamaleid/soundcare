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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quia, minus provident ex aperiam officiis minima temporibus,
                  ea obcaecati voluptatum, dolorem ab porro rem ducimus id
                  doloremque perspiciatis voluptates! Obcaecati, facilis.
                </p>
                <button className="btn btnn main-color fontb rounded-5 py-2">
                  Discover more
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
   {/* about more */}

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
            <h3 className="about-h">Personalized Health Consultations</h3>
            <p className="about-p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              reiciendis error dolorem. Laudantium consectetur omnis, fugit
              incidunt cupiditate facilis id.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="col-md-4 second-color brdr ms-5 about"
          variants={customHomeContentVariants}
        >
          <div className="py-3 ps-5">
            <i className="fa-solid fa-heart-pulse icon"></i>
            <h3 className="about-h">Personalized Health Consultations</h3>
            <p className="about-p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              reiciendis error dolorem. Laudantium consectetur omnis, fugit
              incidunt cupiditate facilis id.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="col-md-4 second-color brdr ms-5 about about-th"
          variants={customHomeContentVariants}
        >
          <div className="py-3 ps-5">
            <i className="fa-solid fa-heart-pulse icon"></i>
            <h3 className="about-h">Personalized Health Consultations</h3>
            <p className="about-p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              reiciendis error dolorem. Laudantium consectetur omnis, fugit
              incidunt cupiditate facilis id.
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

