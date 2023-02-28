import React from 'react';
import {Animator, ScrollPage} from "react-scroll-motion";
import {Box, ThemeProvider, Typography} from "@mui/material";
import {theme} from "../styles/Theme";
import {FadeUp} from "../animations/ReactScrollMotion";
import {Container} from "@material-ui/core";
import styles from "../styles/css/Hero.module.css"

const Hero = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className={styles.wrapper}>
                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <Container>
                            <Box>
                                <Typography variant='h1' sx={{textAlign: 'center'}}>
                                    Hi, I'm Liza, Front-End Developer from Kyiv
                                </Typography>
                                <Typography variant='h2' sx={{textAlign: 'center'}}>
                                    Here you can find my pet projects
                                </Typography>
                            </Box>
                        </Container>
                    </Animator>
                </ScrollPage>
            </div>
        </ThemeProvider>

    );
};

export default Hero;