import React from "react";
import Comment from "./comments";
import "./post.css"

const post = ({ postInfo }) => (
    <div style={{marginBottom:"25px"}}>
        <h3 className="postTitle">{postInfo.title}</h3>
        <div style={{"margin":"0px 10px" }}>
        <h3>{postInfo.body}</h3>
        <label><b>Comments:</b></label>
           {postInfo.comments.map((comment,index) => <Comment key={index} commentInfo={comment}/>)} 
        </div>
    </div>
);

export default post;