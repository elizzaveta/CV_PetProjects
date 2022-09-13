import React, {useEffect, useState} from 'react';
import {Container, Grid, ThemeProvider} from "@mui/material";
import {theme} from "../styles/Theme";
import ProjectDescription from "./ProjectDescription";
import ProjectMockup from "./ProjectMockup";

const ProjectInfoTemplate = (props) => {
    const {project} = props;
    let descriptionBlock = <ProjectDescription project={project}/>
    let mockupBlock = <ProjectMockup image={project.mockupImage}/>

    const[blocksOrder, setBlocksOrder] = useState({
        leftBlock: descriptionBlock,
        rightBlock: mockupBlock
    })
    useEffect(() => {
        if(project.id % 2 || window.innerWidth < 1280 ){
            setBlocksOrder({
                leftBlock: descriptionBlock,
                rightBlock: mockupBlock
            })
        }else{
            setBlocksOrder({
                leftBlock: mockupBlock,
                rightBlock: descriptionBlock
            })
        }
    });


    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Grid container spacing={{xs: 2, md: 6}} columns={{sm: 6, md: 6, lg: 12}}
                      sx={{padding: {md: '90px 200px', xs: "50px 0"}}}>
                    <Grid item xs={6}>
                        {blocksOrder.leftBlock}
                    </Grid>
                    <Grid item xs={6}>
                        {blocksOrder.rightBlock}
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default ProjectInfoTemplate;