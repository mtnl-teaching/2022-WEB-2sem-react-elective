import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { emailValidation } from "./utility/email-validation";

function App() {
  const [email, setEmail] = useState("hello");
  const [password, setPassword] = React.useState("123");

  const [isValidEmail, setValidEmail] = React.useState(undefined);

  function handleEmail(event) {
    console.log(event);
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    console.log(event);
    setPassword(event.target.value);
  }

  function handleClick(event) {
    // prevent html submit to refresh the page
    event.preventDefault();
    // Check if email includes cphbusiness.dk
    // const emailIsValid = email.includes("cphbusiness.dk");
    // console.log(emailIsValid);
    // setValidEmail(emailValidation(email));
    setValidEmail(email.includes("cphbusiness.dk"));
  }

  return (
    <div className="App">
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmail} />
        {isValidEmail === false && <p>Wrong domain</p>}
      </div>

      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={handlePassword} />
      </div>

      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default App;
