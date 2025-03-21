import React from 'react';
import { projectsData } from '../../assets/projectsData';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Projects.'
                details="Here are a few cool things I've worked on!"
            />

            <div className='project-cards-container'>
                {projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                    }) => {
                        return (
                            <ProjectCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                            />
                        );
                    }
                )}
            </div>

            <FooterLink
                phrase='Check out '
                link='my skills!'
                toAddress='/skills'
            />
        </div>
    );
};

export default Projects;
