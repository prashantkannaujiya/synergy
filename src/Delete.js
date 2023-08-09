import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Delete() {
  var location = useLocation();
  var navigate = useNavigate();
  var data = location.state;

  function erase() {
    fetch("https://jsonplaceholder.typicode.com/posts/" + data.id, {
      method: "delete",
    }).then((data) => {
      console.log(data);
      alert("deleted");
      navigate("/List");
    })
    .catch((e)=>{
alert('Unable to connect')
navigate("/List");

    })
  }
  return (
    <div>
      <h3 className="subHeading" style={{ color: "#444242" }}>
        Are you sure to delete this user ?
      </h3>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <button className="eraseButton" onClick={erase}>
        Yes
      </button>
      <button
        className="eraseButton"
        onClick={() => {
          navigate("/List");
        }}
      >
        Cancel
      </button>
    </div>
  );
}
export default Delete;
