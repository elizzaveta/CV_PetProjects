import React from 'react';
import {Typography} from "@mui/material";
import styles from "../styles/css/OneTechnology.module.css"

const OneTechnology = (props) => {
    const {name, icon, scrollTo} = props;

    const handleClick = ()=>{
        document.getElementById(scrollTo).scrollIntoView({ behavior: 'smooth'});
    }

    return (
        <div className={styles.wrapper} onClick={handleClick}>
            <img src={icon} alt={name+' icon'}/>
            <Typography>{name}</Typography>
        </div>
    );
};

export default OneTechnology;