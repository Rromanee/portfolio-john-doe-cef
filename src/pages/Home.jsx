import React from 'react';
import '../styles/home.css';
import johnDoeImage from "../assets/images/john-doe-about.jpg"; 

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay">
            <div className="container text-center">
              <h1>Bonjour, je suis John Doe</h1>
              <h2>Développeur web full stack</h2>
              <a href="#about" className="btn btn-primary">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section container mt-5">
        <div className="row shadow-lg p-4 bg-white rounded">
          <div className="col-md-6">
            <h2 className="title">À propos</h2>
            <div className="underline"></div>
            <p>
            Passionné par l'informatique et les nouvelles 
            technologies, j'ai suivi une formation d'<strong className="strong">intégrateur-développeur 
            web</strong> au CEF. Au cours de cette formation,
            j'ai pu acquérir des bases solides pour travailler dans le
            domaine du <strong className="strong">développement web</strong>.
            </p>
            <p>
            Basé à Lyon, je suis en recherche d'une alternance au
            sein d'une agence digitale pour consolider ma formation
            de <strong className="strong">développeur web full stack</strong>.
            </p>
            <p>
            J'accorde une attention particulière à la qualité du code
            que j'écris et je respecte les bonnes pratiques du web.
            </p>
          </div>

          <div className="col-md-6">
            <img src={johnDoeImage} alt="John Doe" className="about-img mb-4" />
            <h3 className="title">Mes compétences</h3>

            <div className="skills-title">
              <span>HTML5 90%</span>
              <div className="progress">
                <div className="progress-bar bg-danger" style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className="skills-title">
              <span>CSS3 80%</span>
              <div className="progress">
                <div className="progress-bar bg-info" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className="skills-title">
              <span>JavaScript 70%</span>
              <div className="progress">
                <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
              </div>
            </div>

            <div className="skills-title">
              <span>PHP 60%</span>
              <div className="progress">
                <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
              </div>
            </div>

            <div className="skills-title">
              <span>React 50%</span>
              <div className="progress">
                <div className="progress-bar bg-primary" style={{ width: "50%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;