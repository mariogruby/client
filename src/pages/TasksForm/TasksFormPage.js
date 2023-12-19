/* eslint-disable */

import Menu from "../../components/Menu/Menu"
import Navbar from "../../components/Navbar/Navbar"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import sun from "../../img/sun.gif"
import salad from "../../img/salad.gif"
import night from "../../img/night.gif"
import random from "../../img/random.gif"
import "./TasksForm.css"
import TasksForm from "../../components/TasksForm/TasksForm"
import TasksPointsForm from "./TasksPointsForm"
import makeObj from "../../utils/makeObj"
import ChoosePrize from "../ChoosePrize/ChoosePrize"
import { useContext } from "react";
import { TasksContext } from "../../context/tasks.context";



export default function TasksFormPage(){
    const { tasks, setTasks } = useContext(TasksContext);
    const [btns, setBtns] = useState({})
    let tasksArr0 = ["Tender la cama", "Preparar desayuno", "Lavar los platos del desayuno"]
    let tasksArr1 = ["Cocinar almuerzo", "Lavar los platos del almuerzo"]
    let tasksArr2 = ["Preparar la cena", "Lavar los platos de la cena"]
    let tasksArr3 = ["Poner lavarropas", "Colgar ropa limpia", "Limpiar baño", "Limpiar piso", "Regar plantas"]
    const [displayedTasks, setDisplayedTasks] = useState([])
    const [displayedViews, setDisplayedViews] = useState([{displayed: true},
    {displayed:false}, {displayed: false}, {displayed:false
    }, {displayed: false }, {displayed: true }])
    

    useEffect(() => {
        setBtns(prevBtns => {
          const updatedBtns = {}
          tasksArr1.forEach((item, i) => {
            updatedBtns[`btn${i}`] = false
          })
          return {...prevBtns, ...updatedBtns}
        })
      }, [])  

    function handleButtonClick(index) {
        let copy = [...displayedViews];
        copy.forEach((item)=>{item.displayed=false})
        copy[index+1].displayed=true
        setDisplayedViews(copy) 
    }

    function handleDisplayedTasks(i){
        setDisplayedTasks([`tasksArr${i}`])
    }

console.log(displayedViews)
    return (
        <>
        {displayedViews[0].displayed &&<TasksForm setTasks={setTasks} btns={btns} handleDisplayedTasks={handleDisplayedTasks} setBtns={setBtns} index={0} onButtonClick={handleButtonClick} tasksArr={tasksArr0} tiempo={"Es de mañana..."} img={sun}/>}
        {displayedViews[1].displayed && <TasksForm setTasks={setTasks} btns={btns} handleDisplayedTasks={handleDisplayedTasks} setBtns={setBtns} index={1} onButtonClick={handleButtonClick} tasksArr={tasksArr1} tiempo={"Es el mediodía..."} img={salad}/>}
        {displayedViews[2].displayed && <TasksForm setTasks={setTasks} btns={btns} handleDisplayedTasks={handleDisplayedTasks} setBtns={setBtns} index={2} tasksArr={tasksArr2} tiempo={"Ya es de noche..."} img={night} onButtonClick={handleButtonClick}/>}
        {displayedViews[3].displayed && <TasksForm setTasks={setTasks} btns={btns} handleDisplayedTasks={handleDisplayedTasks} setBtns={setBtns} index={3} tasksArr={tasksArr3} tiempo={"Tareas random de la semana..."} img={random} onButtonClick={handleButtonClick}/>}
        {displayedViews[4].displayed && <TasksPointsForm index={4} onButtonClick={handleButtonClick}/>} 
        {displayedViews[5].displayed && <ChoosePrize/>}
        </>
    )
}







