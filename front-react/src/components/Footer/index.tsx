import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './styles.css';

const footer = () => (
    <footer className="main-footer">
        <div className="social-media-links">
            <a href="https://www.linkedin.com/in/caio-avelar-734898158/" 
            target = "_blank" 
            rel = "noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} color="#FFF" size="3x"/>
            </a>
        </div>
    </footer>
);

export default footer;
