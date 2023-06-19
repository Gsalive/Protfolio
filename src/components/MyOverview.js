import Gaurav from "../images/Gaurav.jpeg";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/Resume.pdf";

const Overview = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });


  return (
    <div>
    
          <div className="contentContainer">
        
            <h5>
I am an enthusiastic and motivated Computer Science student with a strong passion for continuous learning and personal growth. I am actively pursuing an opportunity to contribute my skills and knowledge within a reputable organization that values professional development and fosters a culture of excellence.

My primary objective is to gain valuable work experience and enhance my expertise in the field of Computer Science. I am committed to honing my technical and logical skills, utilizing them effectively to make a meaningful impact on the organization's growth and success.</h5>

                </div>
                
            </div>
       
    
  );
};

export default Overview;
