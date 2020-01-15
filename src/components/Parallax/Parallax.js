import React from "react";
import { Parallax } from "react-materialize";
import './style.css';

function ParallaxComponent() {

    return (
        <div>
        <Parallax
            className = "parallax-container"
            image={<img alt="" src="./images/StMoritz.jpg" />}
            options={{
                responsiveThreshold: 0
            }}
        />
        <div className="section white">
            <div className="row container">
                <p className="grey-text text-darken-3 lighten-3">
                    <img src="./images/intermountainmasters.png" alt="" />
                </p>
            </div>
        </div>
        <Parallax
            image={<img alt="" src="./images/StMoritz.jpg" />}
            options={{
                responsiveThreshold: 0
            }}
        />
    </div>
    )
    
}

export default ParallaxComponent;