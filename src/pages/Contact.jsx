import React from "react";
import '../styles/contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-page">
       <div className="contact-section">
        <div className="text-center">
          <h1 className="title">ME CONTACTER</h1>
          <p className="subtitle">
            Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
          </p>
          <div className="blue-line"></div>
        </div>

        <div className="contact-form">
          <h2>Formulaire de contact</h2>
          <div className="blue-line"></div>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Votre nom" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Votre adresse email" required />
            </div>
            <div className="mb-3">
              <input type="tel" className="form-control" placeholder="Votre numéro de téléphone" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Sujet" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" placeholder="Votre message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Mes coordonnées</h2>
          <div className="blue-line"></div>
          <div className="contact-details">
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold, 69009 Lyon, France <br />
              <FontAwesomeIcon icon={faMobileScreenButton} /> 06 20 30 40 50
            </p>
            <div className="google-map">
              <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13269.612264339469!2d4.829101!3d45.760552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4e41d51a52b23%3A0x5bca2f937f7e8d72!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sfr!2sus!4v1630423308553!5m2!1sfr!2sus"
              width="100%"
              height="350"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;