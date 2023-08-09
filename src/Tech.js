import React from "react";

function Tech() {
  return (
    <div className="boxContent">
      <h3 className="subHeading">Technology used & details </h3>
      <div id="techDetails">
        <p>
          This project is developed using <b>React Js</b>, along with HTML &
          CSS.{" "}
        </p>
        <p>
          The package significantly used is <b>react-router-dom</b>, hooks such
          as useNavigate & useLocation have been used in some components.
        </p>
        <p>
          API used is "jsonplaceholder.typicode.com" for the purpose of fake or
          dummy data.
        </p>
        <p>
          CRUD operations has been the aim of this project. However, all the
          functions other than listing users are purely simulative.
        </p>
        <h4>Thanks for going through this site</h4>
      </div>
    </div>
  );
}
export default Tech;
