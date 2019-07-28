import React from "react";
const photo = ({photoInfo}) => (
    <figure style={{display: "inline-block",float: "left"}}>
         <img src={photoInfo.url} alt={photoInfo.title} style={{height:100, width:100, display:"inline-block"}}></img>
    </figure>
);

export default photo;