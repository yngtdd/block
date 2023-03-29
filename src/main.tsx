import React from "react";
import ReactDOM from "react-dom/client";
import Split from 'react-split'
import App from "./App";
import {Button} from "@mui/material"
import "./index.css";
//import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Split direction="vertical" style={{ height: '50vw' }}> 
      <div>
         <Button variant="contained"> Redo</Button>
      </div>
      <div style={{ height: '100vh' }}>
        <App />
      </div>
    </Split>
  </React.StrictMode>
);
