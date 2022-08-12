import React from 'react';
import {Container, Grid, ThemeProvider} from "@mui/material";
import {theme} from "../styles/Theme";
import ProjectDescription from "./ProjectDescription";
import ProjectMockup from "./ProjectMockup";
import {Animator, ScrollPage} from "react-scroll-motion";
import {FadeUp, MoveInLeft} from "../animations/ReactScrollMotion";

const ProjectInfoTemplate = (props) => {
    const {project} = props;
    return (
        // <ScrollPage>
            <ThemeProvider theme={theme}>
                <Container>
                    <Grid container spacing={{xs: 2, md: 6}} columns={{xs: 6, md: 12}} sx={{padding: {md: '200px'}}}>
                        <Grid item xs={6}>
                            {/*<Animator animation={MoveInLeft(project.id+1)}>*/}
                                {project.id % 2
                                    ? <ProjectDescription project={project}/>
                                    : <ProjectMockup image={project.mockupImage}/>
                                }
                            {/*</Animator>*/}
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
        // </ScrollPage>
    );
};

export default ProjectInfoTemplate;