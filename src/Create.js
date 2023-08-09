import React from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  //fetching the API to simulate creating new user
  function createUser(ev) {
    ev.preventDefault();
    var k = document.getElementsByName("userCreate");
    var t = {
      name: k[0].value,
      email: k[1].value,
      phone: k[2].value,
    };
    fetch("http://jsonplaceholder.typicode.com/posts", {
      method:"post",
      
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(t),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("User Created");
        navigate("/List");
      })
      .catch((e)=>{
        alert('API not responding')
        navigate("/List");

      })
  }
  return (
    <div className="boxContent">
      <h3 className="subHeading">Create a New User</h3>
      <form
        onSubmit={(e) => {
          createUser(e);
        }}
      >
        <table>
          <tr>
            <td>
              <label>Name</label>
            </td>
            <td>
              <input type="text" name="userCreate" required />
            </td>
          </tr>
          <tr>
            <td>
              <label>Email</label>
            </td>
            <td>
              <input type="email" name="userCreate" required />
            </td>
          </tr>
          <tr>
            <td>
              <label>Phone</label>
            </td>
            <td>
              <input type="tel" name="userCreate" required />
            </td>
          </tr>
        </table>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Create;
