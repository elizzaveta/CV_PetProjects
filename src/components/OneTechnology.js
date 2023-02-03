import React from 'react';
import {Typography} from "@mui/material";
import styles from "../styles/css/OneTechnology.module.css"

const OneTechnology = (props) => {
    const {name, icon} = props;
    return (
        <div className={styles.wrapper}>
            <img src={icon} alt={name+' icon'}/>
            <Typography>{name}</Typography>
        </div>
    );
};

export default OneTechnology;