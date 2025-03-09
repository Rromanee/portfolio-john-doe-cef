import React from "react";
import "../styles/services.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faMagnifyingGlassDollar, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section className="services">
      <div className="banner"></div>

      <div className="text-center mt-5">
        <h1 className="title">MON OFFRE DE SERVICES</h1>
        <p className="subtitle">Voici les prestations sur lesquelles je peux intervenir.</p>
        <div className="blue-line"></div>
      </div>

      <div className="container-fluid px-3 px-md-5">
        <div className="row row-cols-1 row-cols-md-3 g-md-4 g-3">
          <div className="col d-flex">
            <div className="service-card flex-grow-1">
              <FontAwesomeIcon icon={faDisplay} className="service-icon"/>
              <h4>UX DESIGN</h4>
              <p>L'<strong className="strong">UX Design</strong> est une méthode de conception centrée sur l'utilisateur. 
              Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
            </div>
          </div>

          <div className="col d-flex">
            <div className="service-card flex-grow-1">
              <FontAwesomeIcon icon={faFileCode} className="service-icon"/>
              <h4>DÉVELOPPEMENT WEB</h4>
              <p>Le <strong className="strong">développement de sites web</strong> repose sur l'utilisation des langages <span className="dotted-underline">HTML</span>, <span className="dotted-underline">CSS</span>, 
              JavaScript et <span className="dotted-underline">PHP</span>.</p>
            </div>
          </div>

          <div className="col d-flex">
            <div className="service-card flex-grow-1">
              <FontAwesomeIcon icon={faMagnifyingGlassDollar} className="service-icon"/>
              <h4>RÉFÉRENCEMENT</h4>
              <p>Le <strong className="strong">référencement naturel d'un site,</strong> aussi appelé <span className="dotted-underline">SEO</span>, consiste à mettre des techniques 
              en oeuvre pour <em>améliorer</em> sa position dans les résultats des moteurs de recherche.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Services;