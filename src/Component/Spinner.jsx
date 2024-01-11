import React from 'react'
import './Spinner.css'

function Spinner() {
  return (
    <div className='grid place-content-center'>
        <div className=' spinner'></div>
        <p>Loading...</p>
    </div>
  )
}

export default Spinner