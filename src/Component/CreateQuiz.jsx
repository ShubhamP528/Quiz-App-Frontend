import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../GlobleContext/AuthContext";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Spinner } from "react-bootstrap";

function CreateQuiz() {
  const { user } = useAuthContext();
  const [list, setList] = useState([]);
  const [resp, setResp] = useState();
  const [loading, setLoading] = useState(null);

  const getList = () => {
    axios
      .get("/questionList", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((output) => {
        console.log(output.data.list);
        setList([...output.data.list]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (user) {
      setLoading(true);
      getList();
      setLoading(false);
    }
  }, [user, resp]);

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

  const defaultQuizHandler = () => {};

  return (
    <div>
      <NavBar />
      <div className="flex cols p-2 bg-pink-300 gap-16">
        <p>Here is your Quiz Titles </p>{" "}
        <Link to={"/defaultQuestionList"}>
          <button
            className=" bg-green-700 hover:bg-green-500 text-white p-2 rounded cursor-pointer"
            onClick={defaultQuizHandler}>
            Default Quizes
          </button>
        </Link>
      </div>
      <div>
        {list.map((l) => {
          return (
            <div
              key={l._id}
              className="flex bg-pink-400 w-4/4 m-4 p-2 rounded text-center cols gap-6 justify-between px-8">
              <Link to={`/question/${l.title}/1`}>
                <div className=" m-2">{l.title} </div>
              </Link>
              <span
                className=" cursor-pointer border bg-red-600 p-2 hover:bg-pink-200 rounded-lg  "
                onClick={() => deleteHandler(l.title)}>
                Delete
              </span>{" "}
              <Link to={`/updateQuestionList/${l.title}`}>
                <button className=" hover:bg-green-200 rounded bg-green-300 p-2">
                  Update
                </button>
              </Link>{" "}
              <span className="  m-2">orgnize_quiz</span>
            </div>
          );
        })}
        {loading && (
          <div className="grid place-content-center h-[80vh] ">
            <Spinner className=" text-violet-600" />
          </div>
        )}
        {loading === false && list.length === 0 && (
          <div className="flex justify-center">
            <p>
              You have no question list{" "}
              <Link className="w-fit" to={"/addQuestion"}>
                Please Add Question List
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateQuiz;
