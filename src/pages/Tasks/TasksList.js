/* eslint-disable */

import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";
import exampleService from "../../services/example.service";
import { AuthContext } from "../../context/auth.context";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import smile from "../../img/smile.gif"
import couple from "../../img/couple.gif"
import axios from "axios";


export default function TaskList() {
  const { user, setTasksCreated ,setUser } = useContext(AuthContext);
  const [tasks, setTasks] = useState(null);
  const [obj, setObj] = useState(null)



  

function handleSubmit(event){
  event.preventDefault()

}

  function handleChange(item) {
    exampleService
    .updateOne(item._id, { checked: true, user: user._id })
    .then((result) => {
      exampleService.getAll(user.couple._id)
      .then((data)=>{
        setTasks(data.data)
      })
      .catch((err)=>{console.log(err)})
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    setTasksCreated(false)
    if(user.couple){
      exampleService.getOneUser(user._id)
      .then((data)=>{
        setUser(data.data)
      })
      .catch((err)=>{console.log(err)})
    }
  }, []);

  useEffect(()=>{
    setTasks(user.couple.task)
  }, [user])


  console.log(user.couple._id)
  return (
    <>
        <div className="p-container">
        <Navbar/>
        <div className="d-flex flex-column justify-content-between pp-mini-container align-items-center tasksFormContainer animate__animated animate__zoomIn">
        <div className="questions-container d-flex flex-column justify-content-around mt-3">
        <div className="text-white">
        <h1>Hola {user.name}...<img className="dancing-skeleton" src={smile}/></h1>
        <h2>¿Haz completado alguna tarea en el día de hoy?</h2>
        </div>
        <div className="img-tasks-form-container">
             <img className="sun-tasks-form" src={couple} style={{width:"230px"}}/>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="tasks-examples-container">
        <h2 className="text-white">Tus tareas</h2>
        {tasks && tasks.map((item, i)=>{
              if(item.checked && item.user!==user._id){
                return (<>
                <input
               disabled={true}
               className="btn-check"
               type="checkbox"
             />
             <label className="btn mb-3" htmlFor={item._id} style={{marginLeft:"5px", backgroundColor:"#3CB38D"}}>
               {item.title}
             </label>
                 </>)
              }else if(item.checked && item.user===user._id){
                return (
                  <>
                 <input
                disabled={true}
                className="btn-check"
                type="checkbox"
              />
              <label className="btn mb-3" htmlFor={item._id} style={{marginLeft:"5px", backgroundColor:"#ECB22C"}}>
                {item.title}
              </label>
                  </>
                )
              }else if(!item.checked){
                return (
                  <>
                 <input
                disabled={item.checked ? true : false}
                className="btn-check"
                type="checkbox"
                value={obj}
                id={item._id}
                defaultChecked={item.checked}
                // onChange={() => handleChange(item)}
              />
              <label className={`btn mb-3 btn-primary`} htmlFor={item._id} style={{marginLeft:"5px"}} onClick={() => handleChange(item)}>
                {item.title}
              </label>
                  </>
                )
              }
})} 
        </div>
        </form>
        </div>
      <Menu/>
      </div>
        </div>
    </>
  );
}

{/* <button className="btn mb-2 btn-form-tasks btn-primary">{item.title}</button> */}

{/* <Navbar />
<form onSubmit={handelSubmit}>
  <ul>
    {tasks &&
      tasks.map((item) => {
        return (
          <>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={itemValue}
                id={item._id}
                defaultChecked={item.checked}
                onChange={() => handleEdit(item)}
              />
              <label className="form-check-label" htmlFor={item._id}>
                {item.title}
              </label>
            </div>
          </>
        );
      })}
  </ul>
</form>
<Menu /> */}

// if (item.checked) {
//   if (user._id == item.user) {
//     exampleService
//       .updateOne(item._id, { checked: false, user: user._id })
//       .then((data) => {
//         console.log(data)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     console.log("No tienes permiso para editar esta tarea");
//   }
// } else {
//   exampleService
//     .updateOne(item._id, { checked: true, user: user._id })
//     .then((result) => {
//       console.log("Task updated")
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }