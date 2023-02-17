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
            name: "ReactJS",
            icon: reactIcon,
            scrollTo: 'React.jsTechId'

        },
        {
            name: "VueJS",
            icon: vueIcon,
            scrollTo: 'Vue.jsTechId'
        },
        {
            name: "NodeJS",
            icon: nodeIcon,
            scrollTo: 'Node.jsTechId'
        },
        {
            name: "HTML, CSS, JS",
            icon: htmlCssJsIcon,
            scrollTo: "HTML + CSSTechId"
        },
        {
            name: "Figma",
            icon: figmaIcon,
            scrollTo: "FigmaTechId"
        }
    ],
    footerIcons:{
        contact:[
            {
                icon: telegramIcon,
                link: "https://t.me/elizavetvet"
            },
            {
                icon: emailIcon,
                link: "mailto:yelizaveta.timchenko21@gmail.com"
            },
            {
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