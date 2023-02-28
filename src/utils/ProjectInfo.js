import allAboutDogsMockup from '../images/All About Dogs Mockup.png'
import boredMockup from '../images/Bored Mockup.png'
import onlineDictionaryMockup from '../images/Online Dictionary Mockup.png'
import myNotesMockup from '../images/My Notes Mockup.png'
import yourPlantMockup from '../images/Your Plant Mockup.png'
import sushiSiteMockup from '../images/Sushi Site Mockup.png'
import seaCreaturesMockup from '../images/Sea Creatures Mockup.png'
import figmaMockup from '../images/Figma Mockup.png'
import landingStudyMockup from "../images/LandingStudyMockup.png"
import rickAndMortyMockup from "../images/RickAndMortyMockput.png"

export const ProjectInfo = [
    {
        technology: "React.js",
        projects: [
            {
                name: 'Rick & Morty Characters Library',
                mockupImage: rickAndMortyMockup,
                website: 'https://rick-and-morty-ts-ten.vercel.app/',
                sourceCode: 'https://github.com/elizzaveta/RickAndMorty_TS',
                description: 'Library of all the characters from the "Rick and Morty" television show.',
                tags: ['React.js', 'TypeScript', 'CSS modules', 'public API']
            },
            {
                name: 'Landing Study',
                mockupImage: landingStudyMockup,
                website: 'https://landing-study-steel.vercel.app/',
                sourceCode: 'https://github.com/elizzaveta/LandingStudy',
                description: 'Landing page of Qubly. Created according to free Figma design.',
                tags: ['React.js', 'Reusable components', 'CSS modules']
            },
            {
                name: 'Online Dictionary',
                mockupImage: onlineDictionaryMockup,
                website: 'https://online-dictionary.vercel.app/',
                sourceCode: 'https://github.com/elizzaveta/OnlineDictionary',
                description: 'A dictionary with English words\' meanings. Some words have player with its\' pronunciation. Search history is saved and can be edited.',
                tags: ['React.js', 'LocalStorage', 'public API', 'Redux']
            },
            {
                name: 'Sea Creatures',
                mockupImage: seaCreaturesMockup,
                website: 'https://sea-creatures.vercel.app/',
                sourceCode: 'https://github.com/elizzaveta/SeaCreatures',
                description: 'Page with engaging parallax effects. It contains several blocks with animal picture and it`s description.',
                tags: ['React.js', 'CSS modules', 'Parallax']
            }
        ]
    },
    {
        technology: "Vue.js",
        projects: [
            {
                name: 'Bored',
                mockupImage: boredMockup,
                website: 'https://activity-gererator.vercel.app/',
                sourceCode: 'https://github.com/elizzaveta/ActivityGererator',
                description: 'Website for those who are bored. Generates activities and allows to save favorite ones.',
                tags: ['Vue.js', 'Vite', 'LocalStorage', 'public API']
            }
        ]
    },
    {
        technology: "Figma",
        projects: [
            {
                name: 'YourPlant Design',
                mockupImage: figmaMockup,
                website: 'https://www.figma.com/file/NZcndvjm33h9uVCbIl8Hf4/YourPlant?t=eloNvlwGmlccLckk-0',
                description: 'Figma design of YourPlant site. Responsive layout (Desktop, tablet, mobile).'
                , tags: ['Figma', 'Responsive layout']
            }
        ]
    },
    {
        technology: "Node.js",
        projects: [
            {
                name: 'All About Dogs',
                mockupImage: allAboutDogsMockup,
                sourceCode: 'https://github.com/elizzaveta/AllAboutDogs',
                technologies: '[Project is still in progress] PERN (Postgres + Express + React.JS + Node.JS) stack application. Styles are added with use of Material UI.',
                description: 'Website to help dog owners take care of their little friends. It contains information about different dog breeds and their characteristics. ',
                tags: ['Node.js', 'Express.js', 'PostgreSQL', 'CRUD']
            }
        ]
    },
    {
        technology: "HTML + CSS",
        projects: [
            {
                name: 'Your Plant',
                mockupImage: yourPlantMockup,
                website: 'https://elizzaveta.github.io/YourPlant-site/',
                sourceCode: 'https://github.com/elizzaveta/YourPlant-site',
                description: 'Website idea is an online plant shop. Here you can find beautiful landing, product grid and detailed product page(hint: detailed page is for Calathea plant)',
                tags: ['HTML', 'CSS', 'Responsive layout']
            }
        ]
    },
    {
        technology: "HTML + CSS + JS",
        projects: [
            {
                name: 'My Notes',
                mockupImage: myNotesMockup,
                website: 'https://elizzaveta.github.io/My_notes',
                sourceCode: 'https://github.com/elizzaveta/My_notes',
                technologies: 'HTML + CSS + JS simple web app using Local Storage.',
                description: 'Simple note taking app.',
                tags: ['HTML', 'CSS', 'JS', 'LocalStorage']
            },
            {
                name: 'Sushi Site',
                mockupImage: sushiSiteMockup,
                website: 'https://elizzaveta.github.io/Sushi-site/',
                sourceCode: 'https://github.com/elizzaveta/Sushi-site',
                technologies: 'HTML + CSS + JS app. Product information is fetched from JSON API (Typicode Json Server).',
                description: 'Site where you can choose and order sushi.',
                tags: ['HTML', 'CSS', 'JS']
            }
        ]
    }
]

