import Menu from "../../components/Menu/Menu"
import Navbar from "../../components/Navbar/Navbar"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import TaskFormCard from "../../components/TaskFormCard/TaskFormCard"
import img from "../../img/skeleton.gif"
import "./TasksForm.css"
import PointsForm from "../../components/PointsForm/PointsForm"
import makeObj from "../../utils/makeObj"
import { useContext } from "react";
import { TasksContext } from "../../context/tasks.context";


export default function TasksPointsForm({arr, onButtonClick, index}){
    const { tasks, setTasks } = useContext(TasksContext);
    const [bounce, setBounce] = useState(false)
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState([])
    const [displayed, setDisplayed] = useState(0)
    let speeds = ["animate__slow", "animate__slower", "animate__fast", "animate__faster"]
    
    // useEffect(()=>{
    //   const interval = setInterval(() => {
    //     setCount(count + 1);
    //     setBounce(!bounce);
    //   }, 1000);
    //   return () => clearInterval(interval);
    // },[])

    // useEffect(()=>{
    //   setObj(makeObj(tasks))
    // }, [])

    // useEffect(()=>{
    //   if(obj.length){
    //   setDisplayed((oldValue)=>{
    //     let show;
    //     obj.forEach((item)=>{
    //       if(item.display){
    //         show = item.content
    //       }
    //     })
    //     return show
    //   })
    //   }
    // },[obj])

    // function handleClick(){
      
    //   if(obj.length>1){
    //     setObj((prev)=>{
    //       const copyWithoutFirstElement = [...obj].slice(1);
    //       copyWithoutFirstElement[0].display=true
    //       return copyWithoutFirstElement
    //     })
    //   }else if(obj.length===1){
    //     setObj(prev=>{return prev[0].display=true})
    //   }else{
    //     onButtonClick(index)
    //   }
    // }

    function handleSubmit(event){
      event.preventDefault();
      onButtonClick(index)
    }

    return (
        <>
        <div className="p-container">
        <Navbar/>
        <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column justify-content-between pp-mini-container align-items-center tasksFormContainer animate__animated animate__zoomIn">
        <div className="questions-container d-flex flex-column justify-content-around mt-3" style={{minHeight: "65vh"}}>
        <div className="text-white">
        <h1>Último paso...<img className="dancing-skeleton" src={img}/></h1>
        <h2>Completa los puntos para cada tarea</h2>
        </div>
        <div className="img-tasks-form-container">
        {tasks && tasks.map((item, i)=>{
          let randomNum = Math.floor(Math.random() * speeds.length);
        return (<PointsForm randomNum={randomNum} speeds={speeds} bounce={bounce} item={item.title} key={i} isChoosePrizeView={false} handleSubmit={handleSubmit} setTasks={setTasks} tasks={tasks}/>)})}
        </div>
        <div className="tasks-examples-container">
        </div>
        </div>
        <div className="menu-bottom d-flex justify-content-around animate__animated animate__backInUp tasks-form-button mt-5">
            <button className="p-questions-tasks btn" style={{textDecoration:"none", color:"white"}}>Enviar</button>
        </div>
      </div>
      </form>
        </div>
        </>
    )
}

