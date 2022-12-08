import React from 'react'
import './Tasks.css'


export default function Tasks(props) {
  return (
    <div className='text-container'>
        <div className='text-div'>
            <div className='text'>{props.text}</div>
        </div>
    </div>
  )
}
