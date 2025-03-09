import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { HashLink as HashNavLink } from "react-router-hash-link";
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSquareTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>John Doe</h5>
            <p>40 Rue Laure Diebold<br></br>
            69009 Lyon, France<br></br>
            Téléphone : 06 20 30 40 50</p>
            <div className="socials">
              <a href="https://github.com/github-john-doe" target="_blank" 
              rel="noopener noreferrer nofollow" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
              </a>
              <a href="https://twitter.com/twitter-john-doe" target="_blank" 
              rel="noopener noreferrer nofollow" aria-label="Twitter">
                <FontAwesomeIcon icon={faSquareTwitter} className="social-icon" />
              </a>
              <a href="https://linkedin.com/in/linkedin-john-doe" target="_blank" 
              rel="noopener noreferrer nofollow" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
            </div>
          </div>
          
          <div className="col-md-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><FontAwesomeIcon icon={faChevronRight} className="chevron-icon"/><Link to="/accueil"> Accueil</Link></li>
              <li><FontAwesomeIcon icon={faChevronRight} className="chevron-icon"/><HashNavLink smooth to="/#about"> À propos</HashNavLink></li>
              <li><FontAwesomeIcon icon={faChevronRight} className="chevron-icon"/><Link to="/services"> Services</Link></li>
              <li><FontAwesomeIcon icon={faChevronRight} className="chevron-icon"/><Link to="/contact"> Me contacter</Link></li>
              <li><FontAwesomeIcon icon={faChevronRight} className="chevron-icon"/><Link to="/mentions"> Mentions légales</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><FontAwesomeIcon icon={faChevronRight} className="chevron-icon"/><Link to="/realisations"> Fresh food</Link></li>
              <li><FontAwesomeIcon icon={faChevronRight} className="chevron-icon"/><Link to="/realisations"> Restaurant Akira</Link></li>
              <li><FontAwesomeIcon icon={faChevronRight} className="chevron-icon"/><Link to="/realisations"> Espace bien-être</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Mes derniers articles</h5>
            <ul className="list-unstyled">
              <li><FontAwesomeIcon icon={faChevronRight} className="chevron-icon"/><Link to="/blog"> Coder son site en HTML/CSS</Link></li>
              <li><FontAwesomeIcon icon={faChevronRight} className="chevron-icon"/><Link to="/blog"> Vendre ses produits sur le web</Link></li>
              <li><FontAwesomeIcon icon={faChevronRight} className="chevron-icon"/><Link to="/blog"> Se positionner sur Google</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-dark text-white text-center py-3">
        <p className="mb-0">© Designed by John Doe</p>
      </div>

      {showScroll && (
        <button className="scroll-top" 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Retour en haut de la page">
          ↑
        </button>
      )}
      
    </footer>
  );
}

export default Footer;