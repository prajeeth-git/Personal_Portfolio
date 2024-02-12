import "./portfolio.css";

import IMG1 from "../../assets/AWS-project.png";
import IMG2 from "../../assets/shortly-project.png";
import IMG3 from "../../assets/portfolio_project.png";
import IMG4 from "../../assets/facial_project.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Simplifying Dockerization and AWS Deployment",
      img: IMG1,
      description:
        "Implemented Docker containerization for website, ensuring consistency and reproducibility, and automated deployments with Jenkins for workflow efficiency. Enhanced security with AWS hosting on S3.",
      technologies: "AWS | Docker | Jenkins",
      github: "https://github.com/prajeeth-git/Simplifying-Dockerization-and-AWS-Deployment.git",
    },
    {
      id: 2,
      title: "Facial Expression Recognition Scoring System for Restaurants",
      img: IMG4,
      description:
        "Developed facial expression recognition scoring system with CNN, TensorFlow, and OpenCV, ensuring accuracy. Managed data efficiently with MySQL for storage and retrieval, showcasing database proficiency.",
      technologies: "TensorFlow | OpenCV | MySQL  ",
      github: "https://github.com/prajeeth-git/A-Deep-Learning-Facial-Expression-Recognition-Based-Scoring-System-for-Restaurants.git",
    },
    {
      id: 3,
      title: "Shortly - URL Shortener",
      img: IMG2,
      description: "Created a user-friendly URL shortener website with Django, HTML, CSS, and Bootstrap, featuring automatic link copying for enhanced user experience. Demonstrated frontend proficiency with HTML, CSS, and Bootstrap for an aesthetically pleasing interface.",
      technologies: "Django | Html | CSS | Bootstrap | SQLite",
      github: "https://github.com/prajeeth-git/URL-Shortener-service.git",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      img: IMG3,
      description:
        "Crafted a sleek portfolio website using React.js, showcasing projects and skills in an intuitive user interface. Leveraged React's component-based architecture for seamless navigation and dynamic content presentation.",
      technologies: "Html | CSS | JavaScript | React Js",
      github: "https://github.com/Rasif-Taghizada/Alpha-Agency-Project",
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Project's</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
