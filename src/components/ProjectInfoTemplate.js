import React from 'react';
import {Button, Card, CardMedia, Container, Grid, ThemeProvider, Typography} from "@mui/material";
import {theme} from "../styles/Theme";
import ProjectDescription from "./ProjectDescription";
import ProjectMockup from "./ProjectMockup";

const ProjectInfoTemplate = (props) => {
    const {project} = props;
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Grid container spacing={2} sx={{padding: '100px'}}>
                    <Grid item xs={6}>
                        {project.id % 2
                            ? <ProjectDescription project={project}/>
                            : <ProjectMockup image={project.mockupImage}/>
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {project.id % 2
                            ? <ProjectMockup image={project.mockupImage}/>
                            : <ProjectDescription project={project}/>
                        }
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default ProjectInfoTemplate;