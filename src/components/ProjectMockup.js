import React from 'react';
import styles from "../styles/css/ProjectMockup.module.css"

const ProjectMockup = (props) => {
    const {image} = props

    return (
        <img className={styles.mockupImage}
            src={image}
            alt='project mockup'
        />
    );
};

export default ProjectMockup;