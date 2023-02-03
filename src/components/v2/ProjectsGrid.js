import React from 'react';
import {Typography} from "@mui/material";
import styles from "../../styles/css/v2/ProjectsGrid.module.css"
import TagTemplate from "./TagTemplate";
import linkIcon from "../../images/icons/linkIcon.png";
import githubIcon from "../../images/icons/githubIcon.png";
import LinkIcon from "./LinkIcon";

const ProjectsGrid = (props) => {
    const {projects} = props;
    return (
        <div className={styles.wrapper}>
            {projects.map((project)=>
                <div id="projectCard" className={`${styles.itemWrapper} ${styles.greenBorderContainer}`}>
                    <div className={styles.innerWrapper}>
                        <Typography fontWeight={"bold"}>{project.name}</Typography>
                        <div className={styles.linksContainer}>
                            {project.website?
                                <LinkIcon image={linkIcon} linkTo={project.website}/>
                                : null
                            }
                            {project.sourceCode?
                                <LinkIcon image={githubIcon} linkTo={project.sourceCode}/>
                                : null
                            }
                        </div>
                    </div>
                    <div className={styles.gap10px}>
                        <Typography className={`${styles.greenBorderContainer} ${styles.descriptionContainer}`}>
                            {project.description}
                        </Typography>
                        <div className={styles.tagsContainer}>
                            {project.tags?.map((tag)=>
                                <TagTemplate title={tag}/>
                            )}
                        </div>
                    </div>
                    <a href={project.website} target="_blank"><img className={styles.mockup} src={project.mockupImage} alt={`${project.name} mockup image`}/></a>
                </div>
            )}
        </div>
    );
};

export default ProjectsGrid;