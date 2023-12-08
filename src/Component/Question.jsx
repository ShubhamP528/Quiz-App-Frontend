import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Question.css'
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../GlobleContext/AppContext";


function Question(props) {  
  

  const navigate=useNavigate()
  const {ans, setAns}=useAppContext()


  const prevHandler=()=>{
    if (parseInt(props.id)!==1){
      // console.log(ans)
      navigate(`/question/${props.id-1}`)
    }
  }

  const nextHandler=()=>{
    if (parseInt(props.id)!==parseInt(props.len)){
      // console.log(ans)
      navigate(`/question/${parseInt(props.id)+1}`) 
    }

  }

  const changeHandler=(e)=>{
    const up=ans;
    up[props.id-1]=e.target.value;
    setAns(up);
    }
  

  return (
  <div className="container">
      <h1 className="Quiz">Quiz Competion App</h1>
      <form className="App1">
        <div>
          <h1><span>Q{props.id}. </span>{props.ques}</h1>
        </div>
        <div className="option1">
          <input onChange={changeHandler} type="radio" id="id1" name={`Ans${props.id}`} value="1" defaultChecked={ans[props.id-1]==="1" ? "checked" : ""} />
          <label htmlFor="id1">{props.op1}</label>
        </div>

        <div className="option2">
          <input onChange={changeHandler} type="radio" id="id2" name={`Ans${props.id}`} value="2" defaultChecked={ans[props.id-1]==="2" ? "checked" : ""} />
          <label htmlFor="id2">{props.op2}</label>
        </div>

        <div className="option3">
          <input onChange={changeHandler} type="radio" id="id3" name={`Ans${props.id}`} value="3" defaultChecked={ans[props.id-1]==="3" ? "checked" : ""} />
          <label htmlFor="id3">{props.op3}</label>
        </div>

        <div className="option4">
          <input onChange={changeHandler} type="radio" id="id4" name={`Ans${props.id}`} value="4" defaultChecked={ans[props.id-1]==="4" ? "checked" : ""} />
          <label htmlFor="id4">{props.op4}</label>
        </div>

        <div className="Button">
          <div className="Prev">
            <Button onClick={prevHandler} variant="primary">Previous</Button>
          </div>
          <div className="Next">
            <Button onClick={nextHandler}  variant="success">{ (parseInt(props.id)===parseInt(props.len)-1) ? "Submit" : "Next"}</Button>
          </div>
        </div>
      </form>
    </div>  )
}

export default Question