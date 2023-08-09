import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Update() {
  const navigate = useNavigate();
  const location = useLocation();
  var data = location.state; //obtain the props value 
  useEffect(() => {
    //to prefill the fields when updating a user
    var k = document.getElementsByName("userUpdate");
    k[0].value = data.name;
    k[1].value = data.email;
    k[2].value = data.phone;
  }, []);

  function updateUser(ev) {
    ev.preventDefault();
    var k = document.getElementsByName("userUpdate");
    var t = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      mode: "cors",
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(t),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Updated");
        ev.target.reset();
        navigate("/List");
        console.log(data);
      });
  }
  return (
    <div className="boxContent">
      <h3 className="subHeading">Update user</h3>
      <form
        onSubmit={(e) => {
          updateUser(e);
        }}
      >
        <table>
          <tr>
            <td>
              <label>Name</label>
            </td>
            <td>
              <input type="text" name="userUpdate" required />
            </td>
          </tr>
          <tr>
            <td>
              <label>Email</label>
            </td>
            <td>
              <input type="email" name="userUpdate" required />
            </td>
          </tr>
          <tr>
            <td>
              <label>Phone</label>
            </td>
            <td>
              <input type="phone" name="userUpdate" required />
            </td>
          </tr>
        </table>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Update;
