import React from "react";

export const Experience = () => {
  return (
    <div className="education-container">
      <div className="top-row">
        <div className="box">
          <h3>
           Beyond Innovation 
            <span className="education-iiit-bhopal"> (E-Commerce-Startup)</span>
            
          </h3>
          
            <span className="education-duration"> From January 2023 To August 2023</span>
         
          <ul className="education-details">
            <li>Developed the Payment Services for the mobile app using Nodejs & Expressjs framework along with NOSQL as a database
assuming 100% success in the payment module.</li>
            <li>Identified and resolve critical bugs during the User Acceptance Testing (UAT) phase, ensuring seamless functionality.</li>
           
            <li>Collaborated with design teams to deliver web pages using Figma, Ionic-Angular and implemented responsive
Design. And integrated frontend to Backend.</li>
          </ul>
        </div>
          <div className="box">
          <h3>
           Sarvm.Ai 
            <span className="education-iiit-bhopal"> (E-Commerce-Startup)</span>
            
          </h3>
          
            <span className="education-duration"> From November 2024 To July 2025</span>
         
          <ul className="education-details">
            <li>Built a feature where user can upload QR Image .The system read the Data from the QR Image. create a high
resoulation QR Image add the Sarvm.AI logo and save it on server for future payement.</li>
            <li>Built a Catlog Management system with three segments: Pending, Unpublished, and Published. Seller can manage
and sell their based on the product status.</li>
           
            <li>Collaborated with design teams to deliver web pages using Figma,and implemented responsive
Design. And integrated frontend to Backend.</li>
          </ul>
        </div>
       
      </div>
    </div>
  );
};


export default Experience;