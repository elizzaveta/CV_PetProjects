import React from 'react';
import PetProjects from "./projects/PetProjects";
import styles from "../styles/css/Landing.module.css"
import {theme} from "../styles/Theme";
import {ThemeProvider} from "@mui/material";
import Hero from "./Hero";
import {ScrollContainer} from "react-scroll-motion";
import TechStack from "./technologies/TechStack";


const Landing = () => {
    return (

        <ThemeProvider theme={theme}>

            <ScrollContainer>
                <Hero/>
                <div className={styles.wrapper}>
                    <div className={styles.stackWrapper}>
                        <TechStack/>
                    </div>
                    <div>
                        <PetProjects/>

                    </div>
                </div>
            </ScrollContainer>
        </ThemeProvider>
    );
};

export default Landing;