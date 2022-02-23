import * as React from 'react';
import {
    useLocation
  } from "react-router-dom";
  
export function Task() {
    const location=useLocation();
    console.log(location);
    return(
        <div>
            <h1>ID :{location.state?.id}</h1>
            <p>{location.state?.title}</p>
        </div>
    );
}
