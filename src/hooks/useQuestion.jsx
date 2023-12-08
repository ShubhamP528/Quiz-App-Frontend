import { useState, useEffect } from "react"
import axios from "axios"

const Questions=()=>{
    const [questions, setQuestions]=useState([])

    useEffect(()=>{
        axios.get('/questions').
        then((D)=>{
            console.log(D.data.questions)
            setQuestions(D.data.questions)
        })
        .catch((e)=>{
            console.log("something wrong")
            console.log(e.message)
        })
    },[])

    return questions
}


export const useQuestionhook=()=>{
    const some =Questions()
    return some
}


