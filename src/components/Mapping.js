import React, {useRef, useEffect, useState} from 'react';
import {select, geoPath, geoMercator, path, svg }from 'd3'

import data from './africa.geo.json'
import * as d3 from 'd3'



const Map = ({data, property}) =>{

    const svgRef = useRef();
    // const wrapperRef = useRef();

    const width = 500;
    const height = 500;

    const [selectedCountry, setSelectedCountry] = useState(null);
    
const features = 



useEffect(() => {
    const svg = select(svgRef.current);
    const projection = geoMercator()
    // .scale(400)
    // .center("center")
    // .translate([width/2, height/5])
    .fitSize([height, width], 
        selectedCountry || data)
    .precision(100);


const path = d3.geoPath(projection);

// render each country 
svg.selectAll(".country")
    .data(data.features)
    .join("path")
    .on("click", feature => {
        setSelectedCountry(selectedCountry === feature ? null : feature);
    })
    .attr("class", "country")
    .transition()
    .attr("d", feature => path(feature));
    // .attr("fill", feature.properties[property])
    // .attr("preserveAspectRatio", "xMinYMin");

// render text
svg.selectAll(".label")
    .data([selectedCountry])
    .join("text")
    .attr("class", "label")
    .text(feature => feature && features.properties.name)

 }, [data, property, selectedCountry]);




return (
<div class ="map" style={{ padding: "2rem" }}>
    <svg ref={svgRef}></svg>
</div>

)
    
}

export default Map;