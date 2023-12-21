import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./styles.css";

function App() {
  const buttons = ["Home", "Contact", "About"];
  const [page, setPage] = React.useState("Home");
  // locations i state

  const handleClick = (event) => {
    setPage(event.target.name);
  }

  const passSetPage = (newPage) => {
    console.log(newPage)
    setPage(newPage)
  }

  return (
    <div>
      <nav>
        {buttons.map((buttonText) => (
          <button name={buttonText} key={buttonText} onClick={handleClick}>
            {buttonText}
          </button>
        ))}
      </nav>
      {page == "Home" && <Home title="Home" myFunc={passSetPage} />}
      {page == "About" && <About title="About" myFunc={passSetPage} />}
      {page == "Contact" && <Contact title="Contact" myFunc={passSetPage} />}
    </div>
  );
}

export default App;



