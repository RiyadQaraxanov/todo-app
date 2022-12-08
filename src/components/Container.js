import React from 'react'
import Header from './Header'
import Input from './Input'
import TaskContainer from './TaskContainer'


export default function Container() {
  return (
    <div>
      <Header />
      <Input />
      <TaskContainer/>
    </div>
  )
}