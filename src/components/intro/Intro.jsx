import "./intro.css";
import React from "react";
import img from '../../assets/profile_photo.png'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Sri Sai Prajeeth" />
          </div>
        </div>
        <div className="about__content">

          <p>
          A aspiring developer with a passion for technology and a constant curiosity for learning.
           While I may not consider myself an expert just yet, I've acquired a solid foundation in Python,
            JavaScript, and HTML/CSS, and I'm eager to build upon that knowledge. I enjoy diving into projects
             and problem-solving challenges, using frameworks and libraries like Bootstrap for front-end 
             development, Django for web applications, and Node.js for server-side scripting. While I'm still 
             exploring tools like Docker for deployment and Jenkins for continuous integration, I'm excited about 
             the possibilities they offer. As for databases, I've been delving into Oracle, MySQL, and SQLite to 
             better understand data management. My goal is to contribute to exciting projects, learn from experienced 
             professionals, and grow both personally and professionally in the tech industry.


          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
