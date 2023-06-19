import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";

import Header from "./Header";
import PageHeader from "./PageHeader";
import Draw from "./Draw";



const ScorllNav = ({ personalDetails }) => {
  const [activeSection, setActiveSection] = useState("landing");
  const sectionRefs = {
    landing: useRef(null),
    about: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };
  const location = useLocation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    for (const section in sectionRefs) {
      const sectionRef = sectionRefs[section].current;
      if (
        sectionRef.offsetTop <= scrollPosition &&
        sectionRef.offsetTop + sectionRef.offsetHeight > scrollPosition
      ) {
        setActiveSection(section);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    
  };

  return (
    <div>
      <Draw/>
      <Header />
      <div ref={sectionRefs.landing} style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Landing name={personalDetails.name} />
      </div>
      <div ref={sectionRefs.about}>
        <About />
      </div>
      <div ref={sectionRefs.portfolio}>
        <Portfolio />
      </div>
      <div ref={sectionRefs.contact}>
      
        <Contact />
      </div>
      <br /><br />
      <PageHeader handleSectionChange={handleSectionChange} activeSection={activeSection} />

     
    </div>
  );
};

export default ScorllNav;
