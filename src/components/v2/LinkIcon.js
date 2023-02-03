import React from 'react';
import styles from '../../styles/css/v2/LinkIcon.module.css'

const LinkIcon = (props) => {
    const {image, linkTo} = props;
    return (
        <a href={linkTo} target="_blank"><img className={styles.icon} src={image}/></a>
    );
};

export default LinkIcon;