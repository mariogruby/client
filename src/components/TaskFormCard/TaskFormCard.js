import TaskListFormButton from "../../components/TaskListFormButton/TaskListFormButton"
import getTasks from "../../utils/getTasks"


export default function TaskFormCard({tasksArr, btns, setBtns, img, tiempo, onButtonClick, index, handleDisplayedTasks, setTasks}){

    function handleClick(){
        onButtonClick(index)
        handleDisplayedTasks(index)
        let chosenTasks = getTasks(btns, tasksArr)
        setTasks(prevTasks => {
            return prevTasks.concat(chosenTasks);
        })
    }

    return(
        <div className="d-flex flex-column justify-content-between pp-mini-container align-items-center tasksFormContainer animate__animated animate__zoomIn">
        <div className="questions-container d-flex flex-column justify-content-around mt-3">
        <div className="text-white">
        <h1>{tiempo}</h1>
        <h2>¿Qué tareas se asocian más a tu rutina?</h2>
        </div>
        <div className="img-tasks-form-container">
             <img className="sun-tasks-form" src={img}/>
        </div>
        <div className="tasks-examples-container">
            {tasksArr.map((item, i)=>{
                return (
                <TaskListFormButton text={item} btns={btns} setBtns={setBtns} i={i} key={i} isChoosePrizeView={false}/>)})}
        </div>
        </div>
        <button type="button" className="menu-bottom d-flex justify-content-around animate__animated animate__backInUp tasks-form-button mt-5" onClick={handleClick}>
            <p className="p-questions-tasks">Enviar</p>
        </button>
      </div>
    )
}