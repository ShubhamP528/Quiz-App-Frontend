import React, { useEffect, useState } from "react";
import "./ScoreCard.css";
import { useAppContext } from "../GlobleContext/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../GlobleContext/AuthContext";
import axios from "axios";

const ScoreCard = () => {
  const { title } = useParams();
  const { user } = useAuthContext();

  const [score, setScore] = useState({});
  const { ans, setAns } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    const gettingResult = async () => {
      await axios
        .post(
          "/score",
          { subject: title, ans },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
        .then((output) => {
          setScore(output.data.result);
          // setAns([])
        })
        .catch((error) => {
          console.log(error);
        });
    };
    gettingResult();
  }, [ans, user.token, title]);
  return (
    <div>
      <div className="OuterPage">
        {/* This is outer page h1 tag */}
        <h1>Congratulations You Made it!</h1>
        <div className="InnerPage">
          {/* This is Inner page h2 tag */}
          <h2>You Can Do Better</h2>
          {/* This is innerpage h1 tag */}

          <div className="">
            <h5 className="bg-pink-300 p-2 rounded hover:bg-slate-400 cursor-pointer">
              Total No. Of Questions: <span>{score.total}</span>
            </h5>
          </div>
          <div className="m-5">
            <h5 className="bg-white p-2 rounded hover:bg-slate-400 cursor-pointer">
              No. Of attempted Questions:<span>{score.attempt}</span>
            </h5>
          </div>
          <div className="m-5">
            <h5 className="bg-white p-2 rounded hover:bg-slate-400 cursor-pointer">
              Number of Correct Answers:<span>{score.correct}</span>{" "}
            </h5>
          </div>
          <div className="m-5">
            <h5 className="bg-white p-2 rounded hover:bg-slate-400 cursor-pointer">
              Number of Wrong Answers:<span>{score.wrong}</span>
            </h5>
          </div>
          {/* <div className="info4"><h5>Hints used:<span>3 Out of 5</span></h5></div>
           
           
           <div className="info5"><h5>50-50 used:<span>1 Out of 2</span></h5></div> */}

          <div className="Button-div">
            <button className="ml-40 mr-20" onClick={() => navigate("/home")}>
              {" "}
              Back To Home
            </button>
            <button className="ml-40 "> Play Again</button>
            {/* <button id="LeaderBoard">Go To Leaderboard</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
