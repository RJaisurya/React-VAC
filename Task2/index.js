import React from "react";
import  ReactDOM  from "react-dom";
import './App.css';

import img1 from './RE.jpg';
import img2 from './RE2.jpg';
import img3 from './RE3.jpg';
import img4 from './RE4.jpg';
import video1 from './video/vid1.mp4';
import './styles.css';

class Reactstyle extends React.Component{
    render()
    {
        const mystyle={
            
            color:"yellow",
        fontFamily:"Arial"
        };
    
    return(
        <div>
            <img id="img-one" src={img1}  alt="car" width="500" height="500"></img>
            <img id="img-two" src={img2}  alt="messi" width="500" height="500"></img>
            <video id="video" src={video1} width="500" height="500" controls="true"/>
            <img id="img-one" src={img3}  alt="car" width="500" height="500"></img>
            <img id="img-two" src={img4}  alt="messi" width="500" height="500"></img>
        </div>
    )
}
}
ReactDOM.render(<Reactstyle/>,document.getElementById("root"));