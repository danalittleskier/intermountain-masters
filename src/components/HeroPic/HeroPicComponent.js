import React, { useState, useEffect } from 'react';
import desktopImage from "./assets/images/StMoritz.jpg";
// import logo from "./assets/images/intermountainmasters.png"
import mobileImage from "./assets/images/tour-mobile.jpg";
import "./assets/style.css";

const HeroPicComponent = (handleSearchSubmit) => {
    //Set the image url based on window size
    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;
    
    return (

        <div className="landing-image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${imageUrl})` }}>
            <div className="landing-image-content">
                <div className="logo-container">
                    {/* <img src={logo} style={{ width: "500px" }} alt="logo" /> */}
                   
                </div>
            </div>
        </div>
    );
};


const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, [handleWindowResize]);

    return windowWidth;
};

export default HeroPicComponent;