import Menu from "../../components/Menu/Menu"
import Navbar from "../../components/Navbar/Navbar"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import TaskFormCard from "../../components/TaskFormCard/TaskFormCard"
import img from "../../img/skeleton.gif"
import "./TasksForm.css"
import PointsForm from "../../components/PointsForm/PointsForm"
import makeObj from "../../utils/makeObj"


export default function TasksPointsForm({arr, onButtonClick, index}){
    const [bounce, setBounce] = useState(false)
    let completeArr = ["Limpiar baño", "Limpiar piso", "Regar plantas","Colgar ropa limpia", "Cocinar almuerzo", "Preparar desayuno"]
    const [count, setCount] = useState(0);
    let speeds = ["animate__slow", "animate__slower", "animate__fast", "animate__faster"]
    

      useEffect(()=>{
      const interval = setInterval(() => {
        setCount(count + 1);
        setBounce(!bounce);
      }, 1000);
      return () => clearInterval(interval);
    },[count])

    function handleClick(){
      onButtonClick(index)
  }

    
    return (
        <>
        <div className="p-container">
        <Navbar/>
        <div className="d-flex flex-column justify-content-between pp-mini-container align-items-center tasksFormContainer animate__animated animate__zoomIn">
        <div className="questions-container d-flex flex-column justify-content-around mt-3">
        <div className="text-white">
        <h1>Último paso...<img className="dancing-skeleton" src={img}/></h1>
        <h2>Completa los puntos para cada tarea</h2>
        </div>
        <div className="img-tasks-form-container">
            {completeArr.map((item, i)=>{
                let randomNum = Math.floor(Math.random() * speeds.length);
                return (<PointsForm randomNum={randomNum} speeds={speeds} bounce={bounce} item={item} key={i} isChoosePrizeView={false}/>)})}
        </div>
        <div className="tasks-examples-container">
        </div>
        </div>
        <div className="menu-bottom d-flex justify-content-around animate__animated animate__backInUp tasks-form-button mt-5" onClick={handleClick}>
            <p className="p-questions-tasks" style={{textDecoration:"none", color:"white"}}>Enviar</p>
        </div>
      </div>
        </div>
        </>
    )
}
