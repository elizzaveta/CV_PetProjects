import React from 'react';
import {Box, Container, ThemeProvider, Typography} from "@mui/material";
import {theme} from "../styles/Theme";
import styles from "../styles/css/Foooter.module.css"

const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <footer>
                <Container>
                    <Box sx={{
                        padding: '50px 0px 0px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Typography>Copyright: <a href='https://github.com/elizzaveta'>elizavetta</a></Typography>
                        <Typography>2023</Typography>
                    </Box>

                </Container>
            </footer>
        </ThemeProvider>
    );
};

export default Footer;