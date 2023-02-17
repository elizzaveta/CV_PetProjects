import React from 'react';
import {Typography} from "@mui/material";
import {images} from "../utils/Images";
import OneTechnology from "./OneTechnology";
import styles from "../styles/css/TechnologyStackBlock.module.css"

const TechnologyStackBlock = () => {
    return (
        <div className={styles.wrapper}>
            <Typography variant="h2" fontWeight="bold">Technologies</Typography>
            {images.technologies.map((technology)=>
                <OneTechnology name={technology.name} icon={technology.icon} scrollTo={technology.scrollTo}/>
            )}
        </div>
    );
};

export default TechnologyStackBlock;