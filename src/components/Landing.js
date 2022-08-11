import React from 'react';
import ProjectInfoTemplate from "./ProjectInfoTemplate";
import {Box, Container, ThemeProvider, Typography} from "@mui/material";
import {theme} from "../styles/Theme";
import BackgroundImage from "../images/vecteezy_abstract-purple-fluid-wave-background_.jpg"
import {ProjectInfo} from "../utils/ProjectInfo";


const Landing = () => {

    return (
        <ThemeProvider theme={theme}>
            <div style={{backgroundImage: `url(${BackgroundImage})`, height: 700}}>
                <Container
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'primary',
                        color: 'white',
                        height: '100%'
                    }}>
                    <Box>
                        <Typography  variant='h1'  sx={{textAlign: 'center'}}>
                            Hi, I'm Liza, Front-End Developer from Kyiv
                        </Typography>
                        <Typography variant='h2' sx={{textAlign: 'center'}}>
                            Here you can find my pet projects
                        </Typography>
                    </Box>
                </Container>
            </div>

            {ProjectInfo.projects.map((project)=>
                <ProjectInfoTemplate project={project}/>
            )}
        </ThemeProvider>
    );
};

export default Landing;