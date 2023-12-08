import React from 'react'
import Question from './Question'
import { useAppContext } from '../GlobleContext/AppContext'
import { useParams } from 'react-router-dom'


function QuestionList() {

    const {id}=useParams()

    const {questions}=useAppContext()

    let Ques=questions.map(ques=>{
       return <Question
                key={ques._id}
                id={id}
                len={questions.length}
                ques={ques.question}
                op1={ques.option1}
                op2={ques.option2}
                op3={ques.option3}
                op4={ques.option4}
            />
    })

  return (
    <div>
        {Ques[id-1]}
    </div>
    )
}

export default QuestionList