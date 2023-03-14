import Menu from "../../components/Menu/Menu"
import Navbar from "../../components/Navbar/Navbar"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import TaskFormCard from "../../components/TaskFormCard/TaskFormCard"
import img from "../../img/gift.gif"
import TaskListFormButton from "../../components/TaskListFormButton/TaskListFormButton"
import PointsForm from "../../components/PointsForm/PointsForm"


export default function ChoosePrize(){
    const navigate = useNavigate()
    const [btns, setBtns] = useState({})
    const [prize, setPrize] = useState("")
    const [index, setIndex] = useState(0)
    let tasksArr = ["Cena romántica en restaurante de categoría", "Día de spa", "Aventura al aire libre", "Regalo sorpresa"]
    useEffect(() => {
        
        setBtns(prevBtns => {
          const updatedBtns = {}
          tasksArr.forEach((item, i) => {
            updatedBtns[`btn${i}`] = false
          })
          return {...prevBtns, ...updatedBtns}
        })
    }, []) 

    useEffect(()=>{
        setPrize(tasksArr[index])
    }, [index, btns])
    
    function handleClick(){
        navigate("/profile")
    }

    return (
        <>
        <div className="p-container">
        <Navbar/>
        <div className="d-flex flex-column justify-content-between pp-mini-container align-items-center tasksFormContainer animate__animated animate__zoomIn">
        <div className="questions-container d-flex flex-column justify-content-around mt-3">
        <div className="text-white">
        <h1>Dejamos lo mejor para el final...</h1>
        <h2>¿Cual es tu premio?</h2>
        </div>
        <div className="img-tasks-form-container">
             <img className="sun-tasks-form" src={img}/>
        </div>
        <div className="tasks-examples-container">
        <h2 className="text-white">Te damos ideas...</h2>
        {tasksArr.map((item, i)=>{
                return (
                <TaskListFormButton text={item} btns={btns} setBtns={setBtns} i={i} key={i} isChoosePrizeView={true} setIndex={setIndex}/>)})}
        </div>
        </div>
        <button type="button" className="menu-bottom d-flex justify-content-around animate__animated animate__backInUp tasks-form-button mt-5" onClick={handleClick}>
            <p style={{textDecoration:"none"}} className="p-questions-tasks">Finalizar</p>
        </button>
      </div>
        </div>
        </>
    )
}