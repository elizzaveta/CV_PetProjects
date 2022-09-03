import React, {useEffect, useState} from 'react';
import adaptive from '../images/Tilda Icons/Tilda_Icons_40_IT_adaptive.svg'
import animation from '../images/Tilda Icons/Tilda_Icons_40_IT_animation.svg'
import app from '../images/Tilda Icons/Tilda_Icons_40_IT_app.svg'
import branding from '../images/Tilda Icons/Tilda_Icons_40_IT_branding.svg'
import cloud from '../images/Tilda Icons/Tilda_Icons_40_IT_cloud.svg'
import data from '../images/Tilda Icons/Tilda_Icons_40_IT_data.svg'
import design from '../images/Tilda Icons/Tilda_Icons_40_IT_design.svg'
import effective from '../images/Tilda Icons/Tilda_Icons_40_IT_effective.svg'
import game from '../images/Tilda Icons/Tilda_Icons_40_IT_game.svg'
import graphic from '../images/Tilda Icons/Tilda_Icons_40_IT_graphic.svg'
import ideas from '../images/Tilda Icons/Tilda_Icons_40_IT_ideas.svg'
import landing from '../images/Tilda Icons/Tilda_Icons_40_IT_landing.svg'
import letter from '../images/Tilda Icons/Tilda_Icons_40_IT_letter.svg'
import link from '../images/Tilda Icons/Tilda_Icons_40_IT_link.svg'
import research from '../images/Tilda Icons/Tilda_Icons_40_IT_research.svg'
import startup from '../images/Tilda Icons/Tilda_Icons_40_IT_startup.svg'
import structure from '../images/Tilda Icons/Tilda_Icons_40_IT_structure.svg'
import target from '../images/Tilda Icons/Tilda_Icons_40_IT_target.svg'
import technical from '../images/Tilda Icons/Tilda_Icons_40_IT_technical.svg'
import video from '../images/Tilda Icons/Tilda_Icons_40_IT_video.svg'
import website from '../images/Tilda Icons/Tilda_Icons_40_IT_website.svg'
import {Parallax, useParallax} from "react-scroll-parallax";

const IconLine = () => {
    const {ref} = useParallax({rotateYY: [0, 360]});
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleWindowResize() {
            setWindowWidth(window.innerWidth);

        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <div

            style={{height:70, display:'flex'}}

        >

            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} ref={ref} src={adaptive}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} ref={ref} src={animation}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} ref={ref} src={app}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} ref={ref} src={branding}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} ref={ref} src={cloud}/></Parallax>

            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={data}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={design}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={effective}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={game}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={graphic}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={ideas}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={landing}/></Parallax>


            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={technical}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={letter}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={link}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={research}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={startup}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={structure}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={target}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={video}/></Parallax>
            <Parallax  speed={-50}><img style={{height: 50, margin:15, opacity:0.4, zIndex:-4}} src={website}/></Parallax>
        </div>
    );
};

export default IconLine;