import React from "react";
import { Carousel } from "react-materialize";

function PicsCarousel() {

return (

<Carousel
  images={[
    './images/powder-ski.jpg',
    './images/StMoritz.jpg',
    './images/tour.jpg',
    './images/2019BIBS.jpg',
    './images/GrandTarghee.jpg'
  ]}
  options={{
    dist: -100,
    duration: 200,
    fullWidth: true,
    indicators: true,
    noWrap: false,
    numVisible: 5,
    onCycleTo: null,
    padding: 0,
    shift: 0
  }}
/>

);
}

export default PicsCarousel;