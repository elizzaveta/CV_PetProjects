import React from 'react';
import {Typography} from "@mui/material";
import styles from "../styles/css/TagTemplate.module.css"

const TagTemplate = (props) => {
    const {title} = props;
    return (
        <div className={styles.tag}>
            <Typography variant="subtitle2">{title}</Typography>
        </div>
    );
};

export default TagTemplate;