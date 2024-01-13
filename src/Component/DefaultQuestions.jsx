import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../GlobleContext/AuthContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function DefaultQuestions() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [list, setList] = useState([]);
  const [resp, setResp] = useState();

  useEffect(() => {
    axios
      .get("/defaultQuestionList", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((output) => {
        console.log(output.data.queationslist);
        setList([...output.data.queationslist]);
      });
  }, [resp]);

  const deleteHandler = async (name) => {
    try {
      const response = await axios.delete(`/questionList/${name}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setResp(response);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <NavBar />
      <div className="flex cols gap-16 bg-pink-300">
        <Link to={"/defaultQuestionList"}>
          <button
            className=" text-black font-bold cursor-pointer p-1 mt-3 bg-red-500 rounded ml-20 mr-60"
            onClick={() => navigate(-1)}>
            <h5> Back</h5>
          </button>
        </Link>
        <h1 className="text-center ml-60 p-2">Default Question List </h1>{" "}
      </div>
      <div>
        {list.map((l) => {
          return (
            <div
              key={l._id}
              className="flex cols gap-6 justify-between bg-pink-200 hover:bg-pink-100 cursor-pointer rounded p-2 m-4 px-8">
              <Link to={`/question/${l.title}/1`}>
                <div className=" m-1 ">{l.title} </div>
              </Link>
              {user && user.username === "admin" && (
                <>
                  <span
                    className=" cursor-pointer bg-red-500 border px-2 py-1"
                    onClick={() => deleteHandler(l.title)}>
                    Delete
                  </span>
                  <Link to={`/updateQuestionList/${l.title}`}>
                    <span>Update</span>
                  </Link>
                </>
              )}

              <span>orgnize_quiz</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DefaultQuestions;
