import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Header/> 
        <Switch>
            <Route path="/aboutMe" exact>
                <AboutMe />
            </Route>
            <Route path="/projects" exact>
                <Projects />
            </Route>
            <Redirect exact from="/" to="aboutMe" />
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default Routes;
