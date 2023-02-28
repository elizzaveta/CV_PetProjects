import reactIcon from "../images/icons/reactIcon.png"
import nodeIcon from "../images/icons/nodeIcon.png"
import vueIcon from "../images/icons/vueIcon.png"
import htmlCssJsIcon from "../images/icons/htmlCssJsIcon.png"
import figmaIcon from "../images/icons/figmaIcon.png"

import telegramIcon from "../images/icons/telegramIcon.png"
import emailIcon from "../images/icons/emailIcon.png"
import linkedinIcon from "../images/icons/linkedinIcon.png"
import githubIcon from "../images/icons/githubIcon.png"


export const images = {
    technologies: [
        {
            id:1,
            name: "ReactJS",
            icon: reactIcon,
            scrollTo: 'React.jsTechId'

        },
        {
            id:2,
            name: "VueJS",
            icon: vueIcon,
            scrollTo: 'Vue.jsTechId'
        },
        {
            id:3,
            name: "NodeJS",
            icon: nodeIcon,
            scrollTo: 'Node.jsTechId'
        },
        {
            id:4,
            name: "HTML, CSS, JS",
            icon: htmlCssJsIcon,
            scrollTo: "HTML + CSSTechId"
        },
        {
            id:5,
            name: "Figma",
            icon: figmaIcon,
            scrollTo: "FigmaTechId"
        }
    ],
    footerIcons:{
        contact:[
            {
                id:1,
                icon: telegramIcon,
                link: "https://t.me/elizavetvet"
            },
            {
                id:2,
                icon: emailIcon,
                link: "mailto:yelizaveta.timchenko21@gmail.com"
            },
            {
                id:3,
                icon: linkedinIcon,
                link: "https://www.linkedin.com/in/elizavetvet"
            }
        ],
        sourceCode:{
            icon: githubIcon,
            link: "https://github.com/elizzaveta/CV_PetProjects"
        }

    }
}