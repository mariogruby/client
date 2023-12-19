/* eslint-disable */
import Menu from "../../components/Menu/Menu"
import Navbar from "../../components/Navbar/Navbar"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import TaskFormCard from "../../components/TaskFormCard/TaskFormCard"


export default function TasksForm({tasksArr, tiempo, img, onButtonClick, index, btns, setBtns, handleDisplayedTasks, setTasks}){
    

    useEffect(() => {
        setBtns(prevBtns => {
          const updatedBtns = {}
          tasksArr.forEach((item, i) => {
            updatedBtns[`btn${i}`] = false
          })
          return {...prevBtns, ...updatedBtns}
        })
      }, [])  

      
    return (
        <>
        <div className="p-container">
        <Navbar/>
        <TaskFormCard setTasks={setTasks} tasksArr={tasksArr} btns={btns} setBtns={setBtns} img={img} tiempo={tiempo} onButtonClick={onButtonClick} handleDisplayedTasks={handleDisplayedTasks} index={index}/>
        </div>
        </>
    )
}