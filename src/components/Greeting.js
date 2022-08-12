import React from 'react';
import {Animator, ScrollPage} from "react-scroll-motion";
import {Box, ThemeProvider, Typography} from "@mui/material";
import {theme} from "../styles/Theme";
import {FadeUp} from "../animations/ReactScrollMotion";

const Greeting = () => {
    return (
        <ScrollPage>
            <Animator animation={FadeUp}>
                <ThemeProvider theme={theme}>
                    <Box>
                        <Typography variant='h1' sx={{textAlign: 'center'}}>
                            Hi, I'm Liza, Front-End Developer from Kyiv
                        </Typography>
                        <Typography variant='h2' sx={{textAlign: 'center'}}>
                            Here you can find my pet projects
                        </Typography>
                    </Box>
                </ThemeProvider>
            </Animator>
        </ScrollPage>

    );
};

export default Greeting;