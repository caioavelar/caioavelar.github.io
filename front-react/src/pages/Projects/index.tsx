import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import jobsmart from '../../assets/projects/jobsmart.png';
import minions from '../../assets/projects/minions.png';
import biggamesurvey from '../../assets/projects/biggamesurvey.png';
// import danielTurismo from '../../assets/projects/danielTurismo.jpg';
import './styles.css';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: theme.spacing(10),
        }
    })
);

const Projects = () => {
    const styles = useStyles();
    useEffect(() => {
        console.log('Fui renderizado')
    }, [])
    return (
        <>
            <Grid container direction="row" spacing={0} className={styles.root} alignContent="center" justify="center">
                <ProjectCard
                    projectName="JOBSMART"
                    innerText="Projeto desenvolvido para a UTRAMIG"
                    image={jobsmart} />
                <ProjectCard
                    projectName="24HoursOfHappy"
                    innerText="Réplica do site 24HoursOfHappy, que reproduzia um clipe da música Happy a cada momento do dia, 24 horas"
                    image={minions}
                    projectURL="http://24hoursofhappy.batcave.net/" />
                <ProjectCard
                    projectName="Big Game Survey"
                    innerText="Projeto desenvolvido durante o evento Semana Dev Superior. O projeto consiste numa pesquisa de opinião com relação à jogos. Os dados são obtidos através de um aplicativo, e exibidos em um painel de controle."
                    image={biggamesurvey}
                    projectURL="https://sds1-caioavelar.netlify.app/" />
                {/* Descontinuado
                <ProjectCard
                    projectName="Daniel Turismo"
                    innerText="Página estática para a divulgação de uma empresa de viagens e fretamentos de Belo Horizonte"
                    image={danielTurismo}
                    projectURL="http://danielturismo.com/" /> */}
            </Grid>
        </>
    );
}

export default Projects;