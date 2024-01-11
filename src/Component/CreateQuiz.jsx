import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../GlobleContext/AuthContext'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

function CreateQuiz() {
  const {user}=useAuthContext()
  const [list, setList]=useState([])

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
      getList()
    }
  },[user])

  const deleteHandler=async (name)=>{
    try{
      console.log(name)
      const response = await axios.delete(`/questionList/${name}`, {
        headers: {
            'Authorization': `Bearer ${user.token}`
        },
      });

      console.log(response.data)

    }
    catch(error){
      console.log(error.message)
    }
  }


  return (
    <div>
      <NavBar/>
        <p >Here is your Quiz Titles</p>
        <div>
            {list.map((l)=>{
              return (
            
                <div key={l._id} className='flex cols gap-6'>         
                <Link  to={`/question/${l.title}/1`}><div className=' w-[60%]'>{l.title} </div></Link><span className=' cursor-pointer border px-2 py-1' onClick={()=>deleteHandler(l.title)}>Delete</span> <Link to={`/updateQuestionList/${l.title}`}><span>Update</span></Link> <span>orgnize_quiz</span>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default CreateQuiz