import React from 'react';
import TechnologyTitle from "./TechnologyTitle";
import ProjectsGrid from "./ProjectsGrid";
import styles from "../styles/css/TechnologyBlockTemplate.module.css"

const TechnologyBlockTemplate = (props) => {
    const {technologyName, projects} = props;

    return (
        <div className={styles.wrapper}>
            <TechnologyTitle title={technologyName}/>
            <ProjectsGrid projects={projects}/>
        </div>
    );
};

export default TechnologyBlockTemplate;