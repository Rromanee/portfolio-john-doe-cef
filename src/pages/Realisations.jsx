import React from "react";
import "../styles/realisations.css";

const Realisations = () => {
  const realisations = [
    {
      title: "Fresh Food",
      text: "Réalisation d'un site avec commande en ligne.",
      img: require("../assets/images/portfolio/fresh-food.jpg"),
      tech: "Site réalisé avec PHP et MySQL",
    },
    {
      title: "Restaurant Akira",
      text: "Réalisation d'un site vitrine.",
      img: require("../assets/images/portfolio/restaurant-japonais.jpg"),
      tech: "Site réalisé avec WordPress",
    },
    {
      title: "Espace Bien-être",
      text: "Réalisation d'un site pour un praticien de bien-être.",
      img: require("../assets/images/portfolio/espace-bien-etre.jpg"),
      tech: "Site réalisé en HTML/CSS",
    },
  ];

  return (
    <section className="realisations">
      <div className="banner"></div>

      <div className="text-center mt-5">
        <h1 className="title">PORTFOLIO</h1>
        <p className="subtitle">Voici quelques-unes de mes réalisations.</p>
        <div className="blue-line"></div>
      </div>

      <div className="portfolio-section">
        <div className="row">
          {realisations.map((realisation, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img
                  src={realisation.img}
                  className="card-img-top"
                  alt={realisation.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{realisation.title}</h5>
                  <p className="card-text">{realisation.text}</p>
                  <a className="btn btn-outline-primary">Voir</a>
                  <div className="tech-box">{realisation.tech}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realisations;