import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import jobsmart from '../../assets/projects/jobsmart.png';
import minions from '../../assets/projects/minions.png';
import './styles.css';

const Projects = () => {
    useEffect(() => {
        console.log('Fui renderizado')
    }, [])
    return (
        <div className="main-projects">
            <ProjectCard 
                projectName="JOBSMART"
                innerText="Projeto desenvolvido para a UTRAMIG"
                image={jobsmart}/>
            <ProjectCard 
                projectName="24HoursOfHappy"
                innerText="Réplica do 24HoursOfHappy"
                image={minions}
                projectURL="http://24hoursofhappy.batcave.net/"/>
        </div>
    );
}

export default Projects;