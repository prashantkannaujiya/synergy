import { Link, Outlet } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import { MdTipsAndUpdates } from "react-icons/md";

function App() {

  var [ishovering, setishovering] = useState(false);

  //mouse event handlers to display hovering element under list users menu
  function mouseOver() {
    //hovering tip won't appear for mobile devices
    if (window.screen.width > 600) {
      setishovering(true);
    }
  }
  function mouseOut() {
    setishovering(false);
  }
  return (
    <div className="App">
      <h1>Synergizing User Management</h1>
      {ishovering && (
        <p id="tip">
        
        {//using a react-icon package to display icon
        }
          <MdTipsAndUpdates id="tipIcon"></MdTipsAndUpdates>
          <sub>Includes Delete and Edit options</sub>
        </p>
      )}
      <div id="menu">
        <span onMouseOver={mouseOver} onMouseOut={mouseOut}>
          <Link to="/List">List Users</Link>
        </span>
        <span>
          <Link to="/Create">Create User</Link>
        </span>
        <span>
          <Link to="/About">About Site</Link>
        </span>
        <span>
          <Link to="/Tech">Tech Used</Link>
        </span>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
