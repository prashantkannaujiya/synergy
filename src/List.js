import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
function List() {
  const navigate = useNavigate();
  var [users, setusers] = useState([{ name: "", email: "", phone: "" }]);
  useEffect(() => {
    //fetching User list from API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("errorMsg").style.display = "none";
        setusers(data);
      })
      .catch((e) => {
        //display an error dialog box
        alert('failed');
        document.getElementById("errorMsg").style.display = "block";
      });
  }, []);
  function update(userData) {
    navigate("/Update", { state: userData });
  }
  function erase(eraseUser) {
    navigate("/Delete", { state: eraseUser });
  }
  return (
    <div>
      <h3
        className="subHeading"
        style={{ marginTop: "0.4cm", color: "#444242" }}
      >
        Welcome to User list
      </h3>
      <div id="userDisplay">
        {users.map((a) => {
          if (a.name != "") {
            return (
              <div id="users">
                <p>{a.name}</p>
                <p>{a.email}</p>
                <p>{a.phone}</p>
                <p>
                  <button
                    className="userOptions"
                    onClick={() => {
                      update(a);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="userOptions"
                    onClick={() => {
                      erase(a);
                    }}
                  >
                    Delete
                  </button>
                </p>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>
      
      <div id="errorMsg">
      {/*an error dialog box, displaying by setting visibility*/}
        <sub
          onClick={() => {
            document.getElementById("errorMsg").style.display = "none";
          }}
        >
          <MdCancel className="close"></MdCancel>
        </sub>
        <div>
          <p>You're Offline</p>
          <p>Try reconnecting or troubleshooting your connection</p>
        </div>
      </div>
    </div>
  );
}
export default List;
