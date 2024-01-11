import React from "react";
import "./Homepage.css";
import NavBar from "./NavBar";


function homepage() {
  return (
    <div className="Home">
      <NavBar/>
      <img
        className="Img"
        src="https://img.freepik.com/free-vector/quiz-word-concept_23-2147844150.jpg?size=626&ext=jpg&ga=GA1.1.1287577530.1694759978&semt=ais"
        alt="random"
      />

      <div className="quiz">
        <h1>Welcome to Quiz App</h1>
        <input className="Input" type="text" placeholder="" />
        <button>submit</button>
      </div>
    </div>
  );
}

export default homepage;
