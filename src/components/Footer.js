import React from 'react';
import {Box, Container, ThemeProvider, Typography} from "@mui/material";
import {theme} from "../styles/Theme";
import styles from "../styles/css/Foooter.module.css"
import LinkIcon from "./LinkIcon";
import {images} from "../utils/Images";

const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <footer>
                <Container>
                    <Box sx={{
                        padding: '50px 0px 20px 0px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                    }}>
                        <Box sx={{
                            padding: '5px 0px 0px 0px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-around'
                        }}>
                            <Typography variant="h3">Contact</Typography>
                            <Box sx={{
                                padding: '5px 0px 0px 0px',
                                display: 'flex',
                                gap: '15px',
                                alignItems: 'center',
                                justifyContent: 'space-around'
                            }}>
                                {images.footerIcons.contact.map((iconData)=>
                                    <LinkIcon image={iconData.icon} linkTo={iconData.link} key={iconData.id}/>
                                )}
                            </Box>

                        </Box>
                        <Box sx={{
                            padding: '5px 0px 0px 0px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-around'
                        }}>
                            <Typography variant="h3">Source Code</Typography>
                            <div>
                                <LinkIcon image={images.footerIcons.sourceCode.icon} linkTo={images.footerIcons.sourceCode.link}/>

                            </div>

                        </Box>
                    </Box>

                </Container>
            </footer>
        </ThemeProvider>
    );
};

export default Footer;