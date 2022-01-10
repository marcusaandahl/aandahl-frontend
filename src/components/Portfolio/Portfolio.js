import React, { useEffect, useState } from 'react';
import { getProjects } from '../../firebase.js';

import './Portfolio.scss';
import Navbar from './Navbar.js';

import {ReactComponent as GithubSVG} from './assets/githubSVGicon.svg';
import {ReactComponent as MailSVG} from './assets/mailSVGicon.svg';
import {ReactComponent as LinkedinSVG} from './assets/linkedinSVGicon.svg';

import ProjectCard from './ProjectCard.js';
import Tech from './Tech.js';
import Lang from './Lang.js';
import ContactForm from './ContactForm.js';

import './logos.scss';

import expScrollSpy from './scrollSpy.js';
import expLogoHover from './logohover.js';
import expPortfolioAnim from './portfolioAnimations.js';

function Portfolio() {
    const [projectComponents, setProjectComponents] = useState([]);
    
    function clickLink(src, e){
        switch(src) {
            case 'linkedIn':
                window.open("https://www.linkedin.com/in/marcus-andreas-aandahl/", "_blank");
                e.preventDefault();
                break;
            case 'mail':
                window.open("mailto:marcus.aandahl@gmail.com", "_blank");
                e.preventDefault();
                break;
            case 'github':
                window.open("https://github.com/marcusaandahl/", "_blank");
                e.preventDefault();
                break;
            default:
        }
    }

    useEffect(() => {
        getProjects().then((projects) => {
            if (projects) {
                const projElems = projects.map((project, index) => {
                    return <ProjectCard key={`card${index}`} day={project.date} month={project.month} year={project.year} title={project.title} subtitle={project.subtitle} description={project.description} github={project.github} link={project.link} pictureName={project.pictureName}/>
                })
                setProjectComponents(projElems)
                expScrollSpy();
                expLogoHover();
                expPortfolioAnim();
            }
        })
    }, [])

    return (
        <div className="portfolio"> 
            <Navbar />
            <div className="landing scrollspyPort" id="landing">
                <div className="buffer" />
                <div className="bigTitle">
                    <h1 className="title">Welcome!</h1>
                    <h4 className="subtitle">My name is Marcus Andreas Aandahl, and I am a full-stack dev based in Copenhagen, spending most of his time building cool projects.</h4>
                </div>
                <div className="icons">
                    <LinkedinSVG className="linkedInIcon" onClick={(e) => clickLink('linkedIn', e)} alt="LinkedIn"/>
                    <MailSVG className="mailIcon" onClick={(e) => clickLink('mail', e)} alt="Mail"/>
                    <GithubSVG className="githubIcon" onClick={(e) => clickLink('github', e)} alt="Github"/>
                </div>
                <div className="CTA">
                    <h2 className="CTATitle">Feel free to take a look at my work</h2>
                    <div className="CTAButtons">
                        <a href='#projects' className="workBtn btn btn-primary" role="button">See my Work</a>
                        <a href='#contact' className="contactBtn btn btn-dark" role="button">Contact Me</a>
                    </div>
                </div>
            </div>
            <div className="projects scrollspyPort" id="projects">
                <h1 className="title">PROJECTS</h1>
                <div className="projectCards">
                    {projectComponents.length > 0 ? projectComponents : <p>Loading Projects...</p>}
                </div>
            </div>
            <div className="skills scrollspyPort" id="skills">
                <h1 className="title">SKILLS</h1>
                <div className="wrap">
                    <Tech />
                    <Lang />
                </div>
            </div>
            <div className="contact scrollspyPort" id="contact">
                <h1 className="title">CONTACT</h1>
                <ContactForm />
            </div>
        </div>
    );

}

export default Portfolio;