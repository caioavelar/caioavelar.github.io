import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import jobsmart from '../../assets/projects/jobsmart.png';
import minions from '../../assets/projects/minions.png';
import danielTurismo from '../../assets/projects/danielTurismo.jpg';
import './styles.css';
import { Grid } from '@material-ui/core';

const Projects = () => {
    useEffect(() => {
        console.log('Fui renderizado')
    }, [])
    return (
        <>
            <Grid container direction="row" alignContent="center" justify="center">
                    <ProjectCard 
                        projectName="JOBSMART"
                        innerText="Projeto desenvolvido para a UTRAMIG"
                        image={jobsmart}/>
                    <ProjectCard 
                        projectName="24HoursOfHappy"
                        innerText="Réplica do site 24HoursOfHappy, que reproduzia um clipe da música Happy a cada momento do dia, 24 horas"
                        image={minions}
                        projectURL="http://24hoursofhappy.batcave.net/"/>
                    <ProjectCard 
                        projectName="Daniel Turismo"
                        innerText="Página estática para a divulgação de uma empresa de viagens e fretamentos de Belo Horizonte"
                        image={danielTurismo}
                        projectURL="http://danielturismo.com/"/>
            </Grid>
        </>
    );
}

export default Projects;