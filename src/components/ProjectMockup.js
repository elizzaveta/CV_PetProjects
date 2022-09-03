import React from 'react';

const ProjectMockup = (props) => {
    const {image} = props

    return (
        <img style={{height:400, width:'100%'}}
            src={image}
            alt='project mockup'
            href='https://github.com/elizzaveta'
        />
    );
};

export default ProjectMockup;