import React from "react";

export const Education = () => {
  return (
    <div className="education-container">
      <div className="top-row">
        <div className="box">
          <h3>
            Indian Institute of Information Technology Bhopal
            <span className="education-iiit-bhopal"> (IIIT Bhopal)</span>
          </h3>
          <p className="education-degree">
            B.Tech in Information Technology
            <span className="education-duration"> | June 2019 – June 2023</span>
          </p>
          <p className="education-cgpa">CGPA: 9.1</p>
          <ul className="education-details">
            <li>Relevant Coursework: Data Structures, Algorithms, DBMS</li>
            <li>Achievements: Secured 6 rank in may long coding challeng</li>
            <li>
              Projects: E-commerce clone (React, Javascript, Node.js, Java
              Springboot MySQL)
            </li>
            <li>Clubs: Member, Coding Club | Organized Hackathons</li>
          </ul>
        </div>
        <div className="box">
          <div className="top-row">
            <h3>
              Crescent Convent Public School
              <span className="education-iiit-bhopal">
                {" "}
                (CCS Dildarnagar, Uttar Pradesh)
              </span>
            </h3>
            <p className="education-degree">
              High School (10th Grade)
              <span className="education-duration">
                {" "}
                | July 2014 – July 2015
              </span>
            </p>
            <p className="education-cgpa">CGPA: 7.2</p>
            <ul className="education-details">
              <li>
                Relevant Coursework: Maths, Science, Moral Science, Hindi,
                English
              </li>
              <li>Achievements: Participate in Football Team (2014, 2015)</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom row: centered */}
      {/* <div className="bottom-row">
        <div className="box">
      <div className="top-row">
  <h3>Crescent Convent Public School
    <span className="education-iiit-bhopal"> (CCS Dildarnagar)</span>
  </h3>
  <p className="education-degree">
    High School (10th Grade)
    <span className="education-duration"> | July 2014 – July 2015</span>
  </p>
  <p className="education-cgpa">CGPA: 7.2</p>
  <ul className="education-details">
    <li>Relevant Coursework: Maths, Science, Moral Science</li>
    <li>Achievements: Participate in Football Team (2014, 2015)</li>
    {/* <li>Projects: E-commerce clone (React, Javascript, Node.js, Java Springboot MySQL)</li>
    <li>Clubs: Member, Coding Club | Organized Hackathons</li>
   */}
      {/* </ul> */}
      {/* </div> */}
      {/* </div> */}
      {/* // </div> */}
    </div>
  );
};
