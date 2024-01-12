import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import NavBar from "./NavBar";

function Homepage() {
  const [text] = useTypewriter({
    words: ["Quiz App", "Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="h-screen">
      <NavBar />
      <div className="bg-white-400 h-screen flex flex-row">
        <div className="text-center m-auto w-1/2">
          <h1 className="font-bold text-7xl	m-10	">
            Welcome to
            <br />
            <span className="text-red-500"> {text}</span>
          </h1>
        </div>
        <div className="w-1/2">
          <img
            className="h-2/4 w-2/4 mt-40 ml-32 rounded "
            src="https://img.freepik.com/free-vector/isometric-young-boy-using-technological-devices-background_23-2148123685.jpg?size=626&ext=jpg&ga=GA1.1.1287577530.1694759978&semt=ais"
            alt="random"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
