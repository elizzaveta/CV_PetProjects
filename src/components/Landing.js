import React from 'react';
import ProjectInfoTemplate from "./ProjectInfoTemplate";
import {Box, Container, ThemeProvider, Typography} from "@mui/material";
import {theme} from "../styles/Theme";
import BackgroundImage from "../images/vecteezy_abstract-purple-fluid-wave-background_.jpg"
import {ProjectInfo} from "../utils/ProjectInfo";
import Greeting from "./Greeting";
import {ScrollContainer} from "react-scroll-motion";


const Landing = () => {
    const greetingContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'primary',
        color: 'white',
        height: '100%'
    };

    return (
        <ThemeProvider theme={theme}>
            <ScrollContainer >
                <div style={{backgroundImage: `url(${BackgroundImage})`, height: 700}}>
                    <Container style={greetingContainerStyle}>
                        <Greeting/>
                    </Container>
                </div>
                    {ProjectInfo.projects.map((project) =>
                        <ProjectInfoTemplate project={project}/>
                    )}
            </ScrollContainer>
        </ThemeProvider>
    );
};

export default Landing;