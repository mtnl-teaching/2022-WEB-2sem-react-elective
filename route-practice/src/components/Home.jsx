import React from "react"

function Home(props) {

  function handleClick() {
    console.log("hey", props)
    props.myFunc("About");
  }

  return (
    <div className="component red-page">
      <h1>{props.title}</h1>
      <button onClick={handleClick}>Go to about</button>
    </div>
  );
}

export default Home;