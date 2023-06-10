import React from "react";
import { useState } from "react";
const Tooltip=(props)=>{
   const [display,setDisplay]=useState(false);

    return(
       <div 
       onMouseEnter={()=>{setDisplay(true)}}
       onMouseLeave={()=>{setDisplay(false)}}>
        {display&& <div className="tooltiptext">
            {props.text}
        </div>}
       <div className="tool">{props.children}</div>
       
       </div>
    )
}
export default Tooltip;