import React, {useRef, useEffect, useState} from 'react';
import {select, geoPath, geoMercator, path, svg }from 'd3'

import data from './africa.geo.json'
import * as d3 from 'd3'
import Accordion from "./Accordion"
import SingleLineGridList from './Imagelist'
// import RecipeReviewCard from './recipesDisplay'



const Map = ({data, property}) =>{

    const svgRef = useRef();
    // const wrapperRef = useRef();

    const width = 800;
    const height = 700;

    const [selectedCountry, setSelectedCountry] = useState(null);
    
const features = 


useEffect(() => {
    const svg = select(svgRef.current);
    const projection = geoMercator()
    .scale(400)
    // .center("center")
    .translate([width/10, height/5])
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
<div class =""> 
 <div class ="map"> 
    <div className="svg">
    <svg ref={svgRef}></svg>
    </div>


    <div className="top-half">
        <h1 className="top-half-text"> 
            A culinary adventure <br/> across the <span className="number3"> Continent. </span>  </h1>
    </div>
</div> 


<div className="main-page">
    <div className="main-h1">
        <h1> Recipes from across the <span className="number4"> Continent.</span> </h1>
        {/* <img src="https://www.pikpng.com/pngl/b/181-1810057_wooden-spoon-png-wood-spoon-top-png-clipart.png" width="40px" height ="175px"/> */}
    </div>

    <div>
        <Accordion />
    </div>

   
  
</div>
<br></br>
    <div>
        <SingleLineGridList />
    </div>

    <div>
        {/* <RecipeReviewCard /> */}
    </div>

<div className="divs">
    {/* FIRST */}
        <div className="one">
          
        </div>

    {/* SECOND */}
        <div  className="two">
           
        </div>

    {/* THIRD */}
        <div className="one">
            
        </div>

    {/* FOURTH */}
        <div className="two">
            
        </div>

    {/* FIFTH */}
        <div className="one">
           
        </div>

    {/* SIXTH */}
        <div className="two">
           
        </div>

    {/* SEVENTH */}
        <div className="one">
            
        </div>

</div>

</div>


)
    
}

export default Map;