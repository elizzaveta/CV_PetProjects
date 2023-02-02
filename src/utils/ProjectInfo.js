import allAboutDogsMockup from '../images/All About Dogs Mockup.png'
import boredMockup from '../images/Bored Mockup.png'
import onlineDictionaryMockup from '../images/Online Dictionary Mockup.png'
import myNotesMockup from '../images/My Notes Mockup.png'
import yourPlantMockup from '../images/Your Plant Mockup.png'
import sushiSiteMockup from '../images/Sushi Site Mockup.png'
import seaCreaturesMockup from '../images/Sea Creatures Mockup.png'

export const ProjectInfo = {
    projects:[
        {
            id: 1,
            name: 'Sea Creatures',
            mockupImage: seaCreaturesMockup,
            website: 'https://sea-creatures.vercel.app/',
            sourceCode: 'https://github.com/elizzaveta/SeaCreatures',
            technologies: '[responsive layout is still in progress(better view on a laptop)] React.js web page with Parallax effects (with use of react-scroll-parallax library)',
            description: 'Page with engaging parallax effects. It contains several blocks with animal picture and it`s description.'
        },
        {
            id: 2,
            name: 'All About Dogs',
            mockupImage: allAboutDogsMockup,
            website: 'https://www.figma.com/proto/lS8gVVOen25qZpBdaf4WXp/All-About-Dogs?node-id=32%3A2&scaling=min-zoom&page-id=0%3A1',
            sourceCode: 'https://github.com/elizzaveta/AllAboutDogs',
            technologies: '[Project is still in progress] PERN (Postgres + Express + React.JS + Node.JS) stack application. Styles are added with use of Material UI.',
            description: 'Website to help dog owners take care of their little friends. It contains information about different dog breeds and their characteristics. It is also a useful tool for those, who is going to buy a dog, but can\'t decide which breed suits best for their lifestyle and personality. There is also a blog, where dog experts can share useful recommendations and personal stories.'
        },
        {
            id: 3,
            name: 'Bored',
            mockupImage: boredMockup,
            website: 'https://activity-gererator.vercel.app/',
            sourceCode: 'https://github.com/elizzaveta/ActivityGererator',
            technologies: 'Vue.js application with use of Local Storage. Data is taken from public API',
            description: 'Website for those who are bored. Generates activities and allows to save favorite ones.'
        },
        {
            id: 4,
            name: 'Online Dictionary',
            mockupImage: onlineDictionaryMockup,
            website: 'https://online-dictionary.vercel.app/',
            sourceCode: 'https://github.com/elizzaveta/OnlineDictionary',
            technologies: 'React.js front-end application with CSS modules and use of Local Storage. Dictionary data is taken from public API',
            description: 'A dictionary with English words\' meanings. Some words have player with its\' pronunciation. Search history is saved and can be edited.'
        },
        {
            id: 5,
            name: 'Your Plant',
            mockupImage: yourPlantMockup,
            website: 'https://elizzaveta.github.io/YourPlant-site/',
            sourceCode: 'https://github.com/elizzaveta/YourPlant-site',
            technologies: 'HTML + CSS web pages. Studying of adaptive design. Has 3 different layout realizations: desktop, tablet and mobile.',
            description: 'Website idea is an online plant shop. Here you can find beautiful landing, product grid and detailed product page(hint: detailed page is for Calathea plant)'
        },
        {
            id: 6,
            name: 'My Notes',
            mockupImage: myNotesMockup,
            website: 'https://elizzaveta.github.io/My_notes',
            sourceCode: 'https://github.com/elizzaveta/My_notes',
            technologies: 'HTML + CSS + JS simple web app using Local Storage.',
            description: 'Simple note taking app.'
        },
        {
            id: 7,
            name: 'Sushi Site',
            mockupImage: sushiSiteMockup,
            website: 'https://elizzaveta.github.io/Sushi-site/',
            sourceCode: 'https://github.com/elizzaveta/Sushi-site',
            technologies: 'HTML + CSS + JS app. Product information is fetched from JSON API (Typicode Json Server).',
            description: 'Site where you can choose and order sushi.'
        }
    ]
}