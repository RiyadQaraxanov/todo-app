import React from 'react'
import Tasks from './Tasks'
import "./TaskContainer.css"

export default function TaskContainer() {
  return (
    <div className='asd'>
      <Tasks text="Complete online JavaScript course"/>
      <Tasks text="Jog around the park 3x"/>
      <Tasks text="10 minutes meditation"/>
      <Tasks text="Read for 1 hour"/>
      <Tasks text="Pick up groceries"/>
      <Tasks text="Complete Todo App on Frontend Mentor"/>
    </div>
  )
}
