import React, {useState} from 'react';
import {Card, CardActionArea, CardMedia} from "@mui/material";
import ATVParallax from '../my_modules/react-atv-parallax';
import {Link} from "react-router-dom";

const ProjectMockup = (props) => {
    const {image} = props

    return (
        <img style={{height:400, width:'100%'}}
            src={image}
            alt='project mockup'
            href='https://github.com/elizzaveta'
        />
        // <ATVParallax style={{ height: 400}}>
        //             <img
        //                 src={image}
        //                 alt='project mockup'
        //                 href='https://github.com/elizzaveta'
        //             />
        // </ATVParallax>
    );
};

export default ProjectMockup;