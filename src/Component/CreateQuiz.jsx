import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../GlobleContext/AuthContext'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Spinner } from 'react-bootstrap'

function CreateQuiz() {
  const {user}=useAuthContext()
  const [list, setList]=useState([])
  const [resp, setResp]=useState()
  const [loading, setLoading]=useState(null)

  const getList=()=>{
    axios
    .get('/questionList', {
      headers: {
          'Authorization': `Bearer ${user.token}`
      }})
    .then((output)=>{
      console.log(output.data.list)
      setList([...output.data.list])

    })
    .catch(error=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    if(user){
      setLoading(true)
      getList()
      setLoading(false)
    }
  },[user,resp])

  const deleteHandler=async (name)=>{
    try{
      const response = await axios.delete(`/questionList/${name}`, {
        headers: {
            'Authorization': `Bearer ${user.token}`
        },
      });
      setResp(response)
      toast.success(response.data.message)

    }
    catch(error){
        toast.error(error.message)
    }
  }

  const defaultQuizHandler=()=>{

  }


  return (
    <div>
      <NavBar/>
      <div className='flex cols gap-16'>
        <p >Here is your Quiz Titles </p> <Link to={'/defaultQuestionList'}><span className=' text-green-700 cursor-pointer' onClick={defaultQuizHandler}>Default Quizes</span>
        </Link> 
      </div>
        <div>
            {list.map((l)=>{
              return (
            
                <div key={l._id} className='flex cols gap-6 justify-between px-8'>         
                <Link  to={`/question/${l.title}/1`}><div className=''>{l.title} </div></Link><span className=' cursor-pointer border px-2 py-1' onClick={()=>deleteHandler(l.title)}>Delete</span> <Link to={`/updateQuestionList/${l.title}`}><span>Update</span></Link> <span>orgnize_quiz</span>
                </div>
              )
            })}
            {
              loading  &&
              <div className='grid place-content-center h-[80vh] '>
                <Spinner className=' text-violet-600'/>
              </div>
            }
            {
              (loading===false && list.length===0) &&
              (
                <div className='flex justify-center'>
                  <p>You have no question list <Link className='w-fit' to={'/addQuestion'}>Please Add Question List</Link></p>
                </div>
              )
            }
          
        </div>
    </div>
  )
}

export default CreateQuiz