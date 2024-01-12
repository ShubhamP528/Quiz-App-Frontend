import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";
import { useAppContext } from "../GlobleContext/AppContext";

function Question(props) {
  const navigate = useNavigate();
  const { ans, setAns } = useAppContext();

  const check = (para) => {
    const up = ans;
    up[props.id - 1] = para;
    setAns(up);
  };

  const prevHandler = () => {
    if (parseInt(props.id) !== 1) {
      // console.log(ans)
      navigate(`/question/${props.title}/${props.id - 1}`);
    }
  };

  const nextHandler = async () => {
    if (!ans[props.id - 1]) {
      check(0);
    }
    if (parseInt(props.id) !== parseInt(props.len)) {
      console.log(ans);
      navigate(`/question/${props.title}/${parseInt(props.id) + 1}`);
    } else {
      console.log(ans);
      navigate(`/score/${props.title}`);
    }
  };

  const changeHandler = (e) => {
    const up = ans;
    up[props.id - 1] = e.target.value;
    setAns(up);
  };

  return (
    <div className="bg-emerald-300 h-screen w-full">
      <h1 className="bg-red-400 p-2 mb-10">Quiz Competion App</h1>
      <form className="bg-teal-500 h-8/12 w-4/6 rounded pl-10 pr-10 m-auto shadow-lg">
        <div>
          <h1>
            <span>Q{props.id}. </span>
            {props.ques}
          </h1>
        </div>
        <div className="text-2xl m-3 bg-pink-200 hover:bg-pink-300  p-2 rounded cursor-pointer shadow-sm">
          <input
            className=" m-2 cursor-pointer text-2xl p-2"
            onChange={changeHandler}
            type="radio"
            id="id1"
            name={`Ans${props.id}`}
            value="1"
            defaultChecked={ans[props.id - 1] === "1" ? "checked" : ""}
          />
          <label className="font-normal text-2xl" htmlFor="id1">
            {props.op1}
          </label>
        </div>

        <div className="m-3 text-2xl bg-pink-200 hover:bg-pink-300  p-2 rounded cursor-pointer shadow-sm">
          <input
            className="text-2xl cursor-pointer m-2 font-normal"
            onChange={changeHandler}
            type="radio"
            id="id2"
            name={`Ans${props.id}`}
            value="2"
            defaultChecked={ans[props.id - 1] === "2" ? "checked" : ""}
          />
          <label htmlFor="id2">{props.op2}</label>
        </div>

        <div className="m-3 text-2xl p-2 bg-pink-200 cursor-pointer hover:bg-pink-300 rounded shadow-sm">
          <input
            className="text-xl m-2 cursor-pointer font-normal"
            onChange={changeHandler}
            type="radio"
            id="id3"
            name={`Ans${props.id}`}
            value="3"
            defaultChecked={ans[props.id - 1] === "3" ? "checked" : ""}
          />
          <label htmlFor="id3">{props.op3}</label>
        </div>

        <div className="m-3 text-2xl  bg-pink-200 p-2 hover:bg-pink-300 rounded cursor-pointer shadow-sm">
          <input
            className="text-2xl m-2 cursor-pointer font-normal"
            onChange={changeHandler}
            type="radio"
            id="id4"
            name={`Ans${props.id}`}
            value="4"
            defaultChecked={ans[props.id - 1] === "4" ? "checked" : ""}
          />
          <label htmlFor="id4">{props.op4}</label>
        </div>

        <div className="flex flex-row  ">
          <div className="mr-40 ml-40  ">
            <Button onClick={prevHandler} variant="primary">
              Previous
            </Button>
          </div>
          <div className="ml-40 mb-3">
            <Button onClick={nextHandler} variant="success">
              {parseInt(props.id) === parseInt(props.len) ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Question;
