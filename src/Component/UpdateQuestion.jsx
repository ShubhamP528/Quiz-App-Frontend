import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../GlobleContext/AuthContext";
import NavBar from "./NavBar";
import { useQuestionhook } from "../hooks/useQuestion";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

function UpdateQuestion() {
  const navigate = useNavigate();
  const paramsObj = useParams();
  const subject = paramsObj.title;
  const { user } = useAuthContext();
  const quesObj = useQuestionhook(subject);
  const list = quesObj.questions;

  const [title, setTitle] = useState(subject);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setQuestions([...list]);
  }, [list]);

  const changeHandler = (e, serial) => {
    const { value, name } = e.target;
    const Arr = questions;
    const prev = Arr[serial];
    Arr[serial] = { ...prev, [name]: value };
    setQuestions([...Arr]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let newlist = questions.filter((ques) => ques.question !== "");
    setQuestions([...newlist]);
    setAnswers([]);
    let Arr = answers;
    for (let i = 0; i < questions.length; i++) {
      answers[i] = questions[i].answer;
    }
    setAnswers([...Arr]);
    const FinalList = { title, questions, answers };
    console.log(FinalList);
    setLoading(true);
    axios
      .patch(
        `/questionList/${subject}`,
        { FinalList },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((output) => {
        navigate("/createQuize");
        setLoading(false);
        toast.success(output.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NavBar />

      <div className="flex justify-row  items-center mt-8 ">
        <form
          onSubmit={submitHandler}
          className="bg-red-300 shadow-lg flex flex-col m-auto rounded-lg w-[70vw] border">
          <h1 className="rounded p-2 bg-pink-300">Update Question</h1>
          <div className="flex flex-col mx-3 mb-3">
            <label htmlFor="title">Title</label>
            <input
              className=" px-2 py-1 rounded-md text-xl border border-black "
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Enter Title"
              id="title"
              name="title"
              type="text"
            />
          </div>

          {questions.map((ques, index) => (
            <div key={index} className="flex flex-col mx-3 mb-5">
              <label htmlFor="">{`Question ${index + 1}`}</label>
              <input
                className=" px-2 py-1 rounded-md text-xl border border-black"
                onChange={(e) => changeHandler(e, index)}
                value={ques.question}
                placeholder="Enter Question"
                id="Q1"
                name="question"
                type="text"
              />

              <label htmlFor="op1">option1</label>
              <input
                className=" px-2 py-1 rounded-md text-xl border border-black"
                onChange={(e) => changeHandler(e, index)}
                value={ques.option1}
                placeholder="Option 1"
                id="op1"
                name="option1"
                type="text"
              />

              <label htmlFor="op2">option2</label>
              <input
                className=" px-2 py-1 rounded-md text-xl border border-black"
                onChange={(e) => changeHandler(e, index)}
                value={ques.option2}
                placeholder="Option 2"
                id="op2"
                name="option2"
                type="text"
              />

              <label htmlFor="op3">option3</label>
              <input
                className=" px-2 py-1 rounded-md text-xl border border-black"
                onChange={(e) => changeHandler(e, index)}
                value={ques.option3}
                placeholder="Option 3"
                id="op3"
                name="option3"
                type="text"
              />

              <label htmlFor="op4">option4</label>
              <input
                className=" px-2 py-1 rounded-md text-xl border border-black"
                onChange={(e) => changeHandler(e, index)}
                value={ques.option4}
                placeholder="Option 4"
                id="op4"
                name="option4"
                type="text"
              />

              <label htmlFor="ans">Answer</label>
              <input
                className=" px-2 py-1 rounded-md text-xl border border-black"
                onChange={(e) => changeHandler(e, index)}
                value={ques.answer}
                placeholder="Answer"
                id="ans"
                name="answer"
                type="number"
              />
            </div>
          ))}

          <div
            className={`ml-96 p-2 mb-4 rounded bg-green-500 hover:bg-green-400 cursor-pointer  border-black w-fit ${
              loading ? "cursor-no-drop" : " cursor-pointer"
            }`}>
            {" "}
            <button
              className={`${loading ? "cursor-no-drop" : " cursor-pointer"}`}
              type="submit">
              <h5> Update</h5>{" "}
            </button>{" "}
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateQuestion;
