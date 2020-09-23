import React from 'react';
import './styles.css'

const AboutMe = () => {
    return (
        <div className="main-about-me">
            <div className="introduction">
                <p>
                    Meu nome é Caio Avelar Barbosa de Oliveira. Atualmente possuo 20 anos.
                </p>
            </div>
            <div className="academic-info">
                <div className="graduation">
                    Sou Técnico em Informática pela UTRAMIG
                </div>
                <div className="graduation">
                    Estou graduando como tecnólogo em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Newton Paiva.
                </div>
                <div className="graduation">
                    Realizei vários cursos, de várias tecnologias, ao longo da minha carreira.
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
