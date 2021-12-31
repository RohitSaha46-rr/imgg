import './App.css';
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";
import { useState } from 'react';
function App() {
  const icon={
    fontSize:"6rem",
    paddingTop:"20px"
  };
  const state=useState();
  const[initial_pic,final_pic]=useState("https://freepngimg.com/thumb/bulb/31669-1-bulb-off-transparent-image.png");
  const on=()=>{
    final_pic("https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-1200-80.jpg");
  }
  const off=()=>{
    final_pic("https://freepngimg.com/thumb/bulb/31669-1-bulb-off-transparent-image.png");
  }
  
  return (
    <header>
      <img src={initial_pic}></img>
      <BsToggle2Off style={icon} onClick={on} onDoubleClick={off}/>
    </header>
  );
}

export default App;
