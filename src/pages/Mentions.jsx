import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faLocationDot, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import "../styles/mentions.css";

const Mentions = () => {
  useEffect(() => {
    const metaTag = document.createElement("meta");
    metaTag.name = "robots";
    metaTag.content = "noindex, nofollow";
    document.head.appendChild(metaTag);

    return () => {
      document.head.removeChild(metaTag);
    };
  }, []);

  return (
    <div className="mentions-page">
      <h1 className="title text-center">MENTION LÉGALES</h1>
      <div className="blue-line"></div>


      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            <h3>John Doe</h3>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold<br /> 69009 Lyon, France<br />
              <FontAwesomeIcon icon={faMobileScreenButton} /> <a href="tel:0620304050">06 20 30 40 50</a><br />
              <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
          <h3>Always Data</h3>
            <p>
              91 rue du Faubourg Saint Honoré<br /> 75008 Paris<br />
              <FontAwesomeIcon icon={faGlobe} /> <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a>
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
          <h3>Crédits</h3>
            <p>
              Site développé par John Doe, étudiant du CEF.<br /><br />
              Les images libres de droit sont issues du site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Mentions;