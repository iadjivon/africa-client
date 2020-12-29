import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';

import {Card, Button} from 'react-bootstrap'



export default function SingleLineGridList() {


  return (

    <div className="bloggers"> 

    <div className = "grid"> 

      <ul className = "gridList">
     
          <li className="gridList-item" >
            <img src="https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/124581766_839574033457715_6114964124253682000_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=OYAWLPf0oAwAX_vJVQ9&tp=1&oh=60a44de21a5d2038f22263ba2e8d3b31&oe=601405C5" />
            
          
          </li>

          <li className="gridList-item">
            <img src="https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/96791552_579586409351156_4002845993868071743_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=e-kKOWJZ3UcAX8bbFkR&tp=1&oh=6250c7fc283d189e2168260d66d03d82&oe=6016188C" />
          
          </li>

          <li className="gridList-item">
            <img src="https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/e35/21984728_336031090200788_2935519587430563840_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=J7_pD8zAs-IAX8NB96Z&tp=1&oh=62b2f31d287b5f49112589f545bdd6d1&oe=6012DDEA" />
          
          </li>

          <li className="gridList-item">
            <img src="https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/58411132_1155080238006892_8996767901345979361_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=-R4vBaSa2fAAX8ciKZ5&tp=1&oh=53b4a29d758857dc7a53ea294a020642&oe=6012B3FF" />
          
          </li>
        
        
      </ul>

    </div>

      <div className="grid-text">
        <div className="grid-text-title"> 
        <h1> Discover</h1>
        </div>
        <hr />
        <div>
          <p className="grid-text-para"> 
            Want to discover more recipes? 
            Here are some pictures and videos for inspiration. 
            <br/>
            Follow these bloggers on Instagram to be inspired!
            
            
             
          </p>
        </div>
      
      </div>

    </div>
 
  );
}