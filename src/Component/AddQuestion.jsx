import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useAuthContext } from "../GlobleContext/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Alert from "react-bootstrap/Alert";

function AddQuestion() {
  const [errorL, setErrorL] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [title, setTitle] = useState("");
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([
    {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: undefined,
    },
  ]);

  const handleAddMore = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: undefined,
      },
    ]);
  };

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
    axios
      .post(
        "/questionList",
        { FinalList },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((output) => {
        navigate("/createQuize");
        toast.success(output.data.message);
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setErrorL(error.response.data.error);
      });
  };

  return (
    <>
      <NavBar />

      <h1 className="text-center p-2 bg-red-400">Add New Question</h1>
      <div className="flex justify-center  bg-red-200 items-center p-2 ">
        <form
          onSubmit={submitHandler}
          className=" flex flex-col h-10/12 w-11/12 border">
          <div className="flex flex-col mx-3 mb-3">
            <label htmlFor="title">Title</label>
            <input
              className=" px-2 py-1 rounded-md text-xl border border-black "
              required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
                onChange={(e) => changeHandler(e, index)}
                value={ques.answer}
                placeholder="Answer"
                id="ans"
                name="answer"
                type="number"
              />
            </div>
          ))}
          <div className="flex flex-row">
            <button
              className=" border ml-80 mr-80 border-black hover:bg-green-300 "
              onClick={handleAddMore}>
              Add More{" "}
            </button>
            <button
              className="bg-green-400 hover:bg-green-300 cursor-pointer ml-80 border p-2 border-black"
              type="submit">
              Done
            </button>{" "}
          </div>
          {errorL && <Alert variant={"danger"}>{errorL}</Alert>}
        </form>
      </div>
    </>
  );
}

export default AddQuestion;

// import React, { useState } from 'react';

// function YourComponent() {
//   const [questions, setQuestions] = useState([{ text: '' }]);

//   const handleAddMore = () => {
//     setQuestions([...questions, { text: '' }]);
//   };

//   const handleQuestionChange = (index, newText) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[index].text = newText;
//     setQuestions(updatedQuestions);
//   };

//   const handleSubmit = () => {
//     // Handle the submission logic here using the questions array
//     console.log(questions);
//   };

//   return (
//     <div>
//         <NavBar/>

//         <div className='flex justify-center items-center mt-[5rem]'>
//            <div className=' flex flex-col w-[70vw] border'>
//                <div className='flex flex-col mx-3'>
//                      <label htmlFor="title">Title</label>
//                      <input className=' px-2 py-1 rounded-md text-xl border border-black ' placeholder='Enter Title'  id='title' name='title' type="text" />
//                 </div>

//                  <div className='m-3 border border-black w-fit'> <button onClick={()=>{}}>Add More</button> </div>
//             </div>
//         </div>

//       {questions.map((question, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             value={question.text}
//             onChange={(e) => handleQuestionChange(index, e.target.value)}
//           />
//         </div>
//       ))}
//       <button type="button" onClick={handleAddMore}>
//         Add More
//       </button>
//       <button type="button" onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// }

// export default YourComponent;
