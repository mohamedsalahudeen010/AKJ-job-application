import React, { useContext } from 'react'

import Carousel from 'react-bootstrap/Carousel';
import "./LandingPage.css"
import { AKJContext } from '../../Context';
import NavBar from '../../components/NavBar/NavBar';
import {motion} from "framer-motion"
import FloatingButton from '../../components/floatingButton/FloatingButton';


function LandingPage() {
  const transition={duration:4,type:"spring"}
  return (
    <div className='landingPage'>
      <div className='welcome-board'>
        Welcome to AKJ Jobs
      </div>
     <NavBar/>
        <div className='carousel-land'>
        <motion.div className='skills-float1'
          initial={{top:"30%"}}
          whileInView={{top:"50%"}}
          transition={transition}>
          <FloatingButton
            navi="/loginStudent"
            name="Log In As Student">
            </FloatingButton>
          </motion.div>
          <motion.div className='skills-float2'
          initial={{top:"70%"}}
          whileInView={{top:"50%"}}
          transition={transition}>
          <FloatingButton
            navi="/loginCompany"
            name="Log In As Company">
            </FloatingButton>
          </motion.div>
    </div>
   </div>

        
  )
}

export default LandingPage