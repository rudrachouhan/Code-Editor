import React from 'react'
import { useState } from 'react'
import "./App.css"

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const handleOutput =(e)=>{
      const iframe = document.getElementById("output");
      iframe.contentDocument.body.innerHTML= html + "<style>" + css + "</style>";
      iframe.contentWindow.eval(js); 
  }
  return (
    <div className="editor">
      <div className="heading">
        <h3>Code Editor</h3>
        <button onClick={handleOutput}>RUN</button>
        <p>Coding Made Easier!</p>
      </div>
      <div className="left">

        <div className="html">
        <label >HTML</label>
        <textarea onChange={(e)=>(setHtml(e.target.value))}></textarea>
        </div>
        <div className="css">
        <label >CSS</label>
        <textarea onChange={(e)=>(setCss(e.target.value))}></textarea>
        </div>
        <div className="js">
        <label >JS</label>
        <textarea onChange={(e)=>(setJs(e.target.value))}></textarea>
        </div>
        
      </div>
      <div className="right">
        <iframe id='output' ></iframe>
      </div>
    </div>
  )
}

export default App