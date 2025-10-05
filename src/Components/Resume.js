import React, { useState } from 'react'
import { Education } from './Education'
import ProfessionalSkills from './ProfessionalSkills'
import Experience from './Experience'


const Resume = () => {
  const [active, setActive] = useState(0);

  const btn = [
    
    { name: "Professional Skills", id: 1, component: ProfessionalSkills },
    { name: "Education", id: 0, component: Education },
    { name: "Experience", id: 2, component: Experience },
    
  ];


  const handleOnclick = (index) => {
    setActive(index); 
    console.log("Selected index:", index);
  };

  const SelectedComponent = btn[active].component; // ✅ capitalized variable

  return (
    <section id="resume">
    <div className="resume-container">
      <div className="resume-contain top">
        <h4>1+ YEAR OF EXPERIENCE</h4>
        <h1>My Resume</h1>
      </div>

      <div className="resume-contain">
        {btn.map((btnItem, index) => (
          <button
            key={btnItem.id}
            onClick={() => handleOnclick(index)}
            className={active === index ? "active" : "btn"} // ✅ compare index
          >
            {btnItem.name}
          </button>
        ))}
     {/* <button className="btn"> */}
  <a  className="view-resume" href="https://drive.google.com/file/d/1ZX2Sa32NjObn_44hetXBnYSjg7uL7Wr3/view?usp=drive_link"
   target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", fontWeight: "450" }}>
    View Resume
  </a>

  {/* <a className='btn' href="/resume.pdf" download="Satendra_Resume.pdf" style={{ textDecoration: "none"}}>
  Download CV
  </a> */}
{/* </button> */}


      </div>

      <div className="resume-contain-content">
        <SelectedComponent />
      </div>
    </div>
    </section>
  );
};

export default Resume;
