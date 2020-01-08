import React from "react";
import { Carousel } from "react-materialize";

function PicsCarousel() {

return (

<Carousel
  images={[
    './images/powder-ski.jpg',
    './images/StMoritz.jpg',
    './images/tour.jpg',
    'https://picsum.photos/200/300?image=3',
    'https://picsum.photos/200/300?image=4'
  ]}
  options={{
    dist: -100,
    duration: 200,
    fullWidth: false,
    indicators: false,
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