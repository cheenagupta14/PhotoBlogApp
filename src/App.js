import React, { Component} from "react";
import "./App.css";
import Blogs from "./components/Blog";
import { Icon } from "antd";

class App extends Component{
  render(){
    return(
      <div className="App">
        <div style={{borderBottom: "2px solid grey", margin:"0px 0px 10px 0px", paddingBottom: "5px"}}>
          <Icon type="camera" style={{fontSize:"48px"}}/>
          <label className="Seperator">|</label>
          <label className="AppLabel">PhotoBlog</label>
        </div>
        <Blogs/>
      </div>
    );
  }
}

export default App;