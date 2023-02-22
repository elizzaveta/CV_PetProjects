import React from 'react';
import TechnologyBlockTemplate from "./TechnologyBlockTemplate";
import {ProjectInfoV2} from "../utils/ProjectInfoV2"
import styles from "../styles/css/Landing.module.css"
import {theme} from "../styles/Theme";
import {ThemeProvider} from "@mui/material";
import Greeting from "./Greeting";
import {ScrollContainer} from "react-scroll-motion";
import TechnologyStackBlock from "./TechnologyStackBlock";


const LandingV2 = () => {
    return (

        <ThemeProvider theme={theme}>

            <ScrollContainer>
                <Greeting/>
                <div className={styles.wrapper}>
                    <div className={styles.stackWrapper}>
                        <TechnologyStackBlock/>
                    </div>
                    <div>
                        <div className={styles.projectsWrapper}>
                            {ProjectInfoV2.map((projects) =>
                                <TechnologyBlockTemplate technologyName={projects.technology} projects={projects.projects}/>
                            )}
                        </div>

                    </div>
                </div>
            </ScrollContainer>
        </ThemeProvider>
    );
};

export default LandingV2;