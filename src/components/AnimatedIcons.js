import React from 'react';
import {useParallax} from "react-scroll-parallax";

const AnimatedIcons = () => {
    const {ref} = useParallax({rotateY: [0, 360]});
    return (
        <div style={{width:60}}>
            <h1 ref={ref}>blah</h1>

        </div>
    );
};

export default AnimatedIcons;
