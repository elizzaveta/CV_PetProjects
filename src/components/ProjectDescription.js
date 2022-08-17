import React from 'react';
import {Box, Button, ButtonGroup, Typography} from "@mui/material";
import {MoveInLeft} from "../animations/ReactScrollMotion";
import {Animator} from "react-scroll-motion";

const ProjectDescription = (props) => {
    const {project} = props
    return (
            <div style={{height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Typography variant='h2' sx={{fontWeight: 'bold'}}>{project.name}</Typography>
                <Box>
                    <Typography color='secondary.dark'>Technologies:</Typography>
                    <Typography>{project.technologies}</Typography>
                </Box>
                <Box>
                    <Typography color='secondary.dark'>WebSite Idea:</Typography>
                    <Typography>{project.description}</Typography>
                </Box>
                <ButtonGroup>
                    <Button color='secondary' variant="contained" href={project.website} target="_blank">WebSite</Button>
                    <Button color='secondary' variant="outlined" href={project.sourceCode} target="_blank">Source Code</Button>
                </ButtonGroup>
            </div>
    );
};

export default ProjectDescription;