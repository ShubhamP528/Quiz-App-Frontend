import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import NavBar from "./NavBar";

function Homepage() {
  const [text] = useTypewriter({
    words: ["Quiz Competition App", "Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="h-screen">
      <NavBar />
      <div className="bg-white-100 h-screen flex flex-row">
        <div className="text-center mt-32 w-1/2">
          <div className="h-40 ">
            <h1 className="font-bold text-7xl	 	">
              Welcome to
              <br />
              <span className="text-red-500"> {text}</span>
            </h1>
          </div>
          <div className="italic">
            <p className="mt-8 ml-10">
              "Unlock the joy of learning through friendly competition. Explore
              diverse quizzes,
              <br /> challenge your knowledge boundaries, and embark on a
              journey where curiosity meets fun. <br />
              Join us in making every click an exciting step
              towards enlightenment!."
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <img
            className="h-3/4 w-4/4 mt-12 ml-2  "
            src="https://img.freepik.com/premium-vector/artificial-intelligence-digital-brain-technology-engineering-concept-with-programmer-data-systems-that-can-be-set-up-scientific-context-vector-illustration_2175-975.jpg?size=626&ext=jpg"
            alt="random"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
