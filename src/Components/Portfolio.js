import React from "react";

const portfolioItems = [

  {
    id: 2,
    category: "WEB DEVELOPMENT",
    title: "Built responsive and scalable web applications with modern frameworks, focusing on seamless user experience and maintainability.",
    image: "/portfolio-02.jpg",
    likes: 750,
  },
  {
    id: 3,
    category: "COMPETITIVE PROGRAMMING",
    title: "Solved complex problems using data structures and algorithms, enhancing logical thinking, coding efficiency, and performance optimization.",
     image: "/portfolio-03.jpg",
    likes: 630,
  },
   {
    id: 4,
    category: "DATA STRUCTURE AND ALGORITHM",
    title: "Developed a strong foundation in core CS concepts, implementing efficient solutions to real-world challenges with optimized code.",
     image: "/portfolio-04.jpg",
    likes: 630,
  },
   {
    id: 5,
    category: "WEB DESIGN",
    title: "Designed clean, modern, and user-friendly interfaces with attention to detail, usability, and visual appeal.",
     image: "/portfolio-05.jpg",
    likes: 630,
  },
   
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section" >
      {/* Sub Heading */}
      {/* <p className="portfolio-subheading">
        Visit my portfolio and keep your feedback
      </p> */}

      {/* Main Heading */}
      <h2 className="portfolio-heading">My Portfolio</h2>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-card">
            {/* Image */}
            <div className="portfolio-image">
              <img src={item.image} alt={item.title} />
            </div>

            {/* Content */}
            <div className="portfolio-content">
              <p className="portfolio-category">{item.category}</p>
              <h3 className="portfolio-title">{item.title}</h3>
            </div>

            {/* Likes */}
            <div className="portfolio-likes">
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
