import { useState, useEffect } from "react"
import axios from "axios"
import { useAuthContext } from "../GlobleContext/AuthContext"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const Questions=(sub)=>{
    const [questions, setQuestions]=useState([])
    const [subject, setSubject]=useState(sub)
    const {user}=useAuthContext()
    const navigate=useNavigate()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/questions', { subject }, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    },
                });

                setQuestions(response.data.questionList2.questions);
                console.log(response.data.questionList2.questions)
            } catch (error) {
                console.log(error.message);

            }
        };

        if (user && subject) {
            fetchData();
        }
         else {
            // navigate('/logsig')
        }
    }, [user, subject]);



    

    return {questions,subject, setSubject}
}


export const useQuestionhook=(sub)=>{
    const {questions,subject, setSubject} =Questions(sub)

    return {questions, subject, setSubject}
}


