import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
export const Home = () => {
  return (
    <section id="home" style={{marginTop:"30px"}} >
    <div className="home">
      {/* Intro Section */}
      <div className="container a">
        <div className="home-text">
          <p>Welcome to my world</p>
          <h1>
            Hi, I'm{" "}
            <span className="highlight">
              Satendra Kumar{" "}
            </span>{" "}
            <br /> <span className="highlight">a</span> Full Stack Developer.
          </h1>
          <p>
         I graduated with a B.Tech in Information Technology from IIIT Bhopal.
          I am passionate about exploring new technologies that challenge my technical and analytical skills
           while helping me expand my knowledge. My interests include coding, technology, and development, 
         and I am dedicated to continuous learning and improvement.
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="container b">
        <div className="profile-pic-body">
          <div className="profile-shadow">
            <img src="/satendraPortfolio.png" alt="Satendra" className="profile-image-body" />
          </div>
        </div>
      </div>

      {/* Skills + Social Section (merged together) */}
      <div className="container c">
        <div className="social-skills">
          <span className="Best-skills-on">Best Skills On</span>
          <div className="skills-list">
            
<FaReact className="my-skills"/>
<RiJavascriptFill className="my-skills" />
<BiLogoTypescript   className="my-skills" />
<BiLogoSpringBoot className="my-skills"/>
<FaNode className="my-skills"/>

          </div>
                  </div>

          {/* ✅ Find With Me inside same container */}
          <div className="find-with-me">
            <span className="Best-skills-on">Find With Me</span>
            <div className="">
              <a href="https://www.linkedin.com/in/satendra-kumar-b2a843190/" target="_blank" rel="noopener noreferrer">
                {/* <img src="/javaSpringboot.png" alt="LinkedIn" className="my-skills" /> */}
                <FaLinkedin  className="my-skills"/>
              </a>
              <a href="https://www.instagram.com/gautam100.01/" target="_blank" rel="noopener noreferrer">
                
                <FaInstagram className="my-skills" />
              </a>
            </div>
          </div>

      </div>
    </div>
    </section>
  );
};
