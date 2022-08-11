import React from 'react';
import {Card, CardMedia} from "@mui/material";

const ProjectMockup = (props) => {
    const {image} = props
    return (
        <Card >
            <CardMedia
                component="img"
                height="400"
                image= {image}
            />
        </Card>
    );
};

export default ProjectMockup;