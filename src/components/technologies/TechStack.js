import React from 'react';
import {Typography} from "@mui/material";
import {images} from "../../utils/Images";
import Technology from "./Technology";
import styles from "../../styles/css/technologies/TechStack.module.css"

const TechStack = () => {
    return (
        <div className={styles.wrapper}>
            <Typography variant="h2" fontWeight="bold">Technologies</Typography>
            {images.technologies.map((technology)=>
                <Technology name={technology.name} icon={technology.icon} scrollTo={technology.scrollTo} key={technology.id}/>
            )}
        </div>
    );
};

export default TechStack;