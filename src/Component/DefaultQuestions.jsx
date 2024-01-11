import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../GlobleContext/AuthContext'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

function DefaultQuestions() {

    const navigate=useNavigate()
    const {user}=useAuthContext()
    const [list, setList]=useState([])
    const [resp, setResp]=useState()

    useEffect(()=>{
        axios
            .get('/defaultQuestionList',{
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })
            .then((output)=>{
                console.log(output.data.queationslist)
                setList([...output.data.queationslist])
            })
    },[resp])

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
  return (
    <div>
        <NavBar/>
        <div className='flex cols gap-16'>
        <p >Default quiestion List </p> <Link to={'/defaultQuestionList'}><span className=' text-green-700 cursor-pointer' onClick={()=>navigate(-1)}>Back</span>
        </Link> 
      </div>
        <div>
            {list.map((l)=>{
              return (
            
                <div key={l._id} className='flex cols gap-6 justify-between px-8'>         
                <Link  to={`/question/${l.title}/1`}><div className=''>{l.title} </div></Link>
                {
                    (user && user.username==="admin") &&
                    <>
                        <span className=' cursor-pointer border px-2 py-1' onClick={()=>deleteHandler(l.title)}>Delete</span> 
                        <Link to={`/updateQuestionList/${l.title}`}><span>Update</span></Link> 
                    </>
                }

                <span>orgnize_quiz</span>
                </div>
              )
            })}
        </div>

    </div>
  )
}

export default DefaultQuestions