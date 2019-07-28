import React from "react";

const comment = ({commentInfo}) => (
<div style={{margin:"5px 0px"}}> 
<label><b>{commentInfo.email + ":"}</b></label>
<label>{commentInfo.body}</label>
</div>
);

export default comment;