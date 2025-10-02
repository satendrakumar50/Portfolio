import React, { useState, useEffect } from "react";

const ProgressBar = ({ skill, level }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedProgress(level), 100);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="progress-item">
      {/* Top Row: Skill + Level */}
      <div className="skill-header">
        <span className="skill-name">{skill}</span>
        <span className="skill-level">{level}%</span>
      </div>

      {/* Progress Bar */}
      <div className="outer-progress-bar">
        <div
          className="inner-progress-bar"
          style={{ width: `${animatedProgress}%` }}
        />
      </div>
    </div>
  );
};

const ProfessionalSkills = () => {
  const bars = [
    { skill: "React", level: 85 },
    { skill: "TypeScript", level: 80 },
    { skill: "JavaScript", level: 90 },
    { skill: "HTML", level: 90 },
    { skill: "CSS", level: 85 },
    { skill: "Redux", level: 80 },
    { skill: "Routing", level: 95 },
    { skill: "Node.js", level: 80 },
    { skill: "Java", level: 80 },
    { skill: "Springboot", level: 80 },
    { skill: "MySQL", level: 75 },
    { skill: "Git", level: 80 },
    { skill: "Problem Solving", level: 90 },
  ];

  return (
    <div className="professional-skills-container">
      <h1 className="development-skillsh1">Development Skills</h1>
      {bars.map((bar, index) => (
        <ProgressBar skill={bar.skill} level={bar.level} key={index} />
      ))}
    </div>
  );
};

export default ProfessionalSkills;
