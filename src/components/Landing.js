import React from 'react';
import ProjectInfoTemplate from "./ProjectInfoTemplate";
import {ThemeProvider} from "@mui/material";
import {theme} from "../styles/Theme";
import {ProjectInfo} from "../utils/ProjectInfo";
import Greeting from "./Greeting";
import {ScrollContainer} from "react-scroll-motion";


const Landing = () => {


    return (
        <ThemeProvider theme={theme}>
            <ScrollContainer>
                <Greeting/>
                {ProjectInfo.projects.map((project) =>
                    <ProjectInfoTemplate project={project}/>
                )}
            </ScrollContainer>
        </ThemeProvider>
    );
};

export default Landing;