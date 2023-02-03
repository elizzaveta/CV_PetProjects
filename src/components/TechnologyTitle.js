import React from 'react';
import styles from "../styles/css/TechnologyTitle.module.css"
import {Typography} from "@mui/material";

const TechnologyTitle = (props) => {
    const {title} = props;
    return (
        <div className={styles.titleContainer}>
            <Typography variant="h2">{title}</Typography>
        </div>
    );
};

export default TechnologyTitle;