import React from 'react';
import TechnologyTitle from "./TechnologyTitle";
import ProjectsContainer from "./ProjectsContainer";
import styles from "../../styles/css/projects/PetProjects.module.css"
import {ProjectInfo} from "../../utils/ProjectInfo";

const PetProjects = () => {
    return (
        <div className={styles.projectsWrapper}>
            {ProjectInfo.map((projects) =>
                <div className={styles.wrapper} key={projects.id+''}>
                    <TechnologyTitle title={projects.technology}/>
                    <ProjectsContainer projects={projects.projects}/>
                </div>
            )}

        </div>
    );
};

export default PetProjects;