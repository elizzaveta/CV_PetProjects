import React from 'react';
import {Button, ButtonGroup, Typography} from "@mui/material";

const ProjectDescription = (props) => {
    const {project} = props
    return (
        <div style={{display:'flex', flexDirection:'column', gap:'50px'}}>
            <Typography variant='h2'>{project.name}</Typography>
            <Typography>{project.description}</Typography>
            <ButtonGroup>
                <Button color='secondary' variant="contained" href={project.website}>WebSite</Button>
                <Button color='secondary' variant="outlined" href={project.sourceCode}>Source Code</Button>
            </ButtonGroup>

        </div>
    );
};

export default ProjectDescription;