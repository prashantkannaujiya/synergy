import React from "react";
import "./style.css";
import { FaUsers } from "react-icons/fa";
function Home() {
  return (
    <div>
      <div id="home">
        <div id="homeHeading">Managing Users</div>
        <div>
          <FaUsers id="icon"></FaUsers>
        </div>
      </div>
    </div>
  );
}
export default Home;
