import Navbar from "../../components/Navbar/Navbar"
import Menu from "../../components/Menu/Menu"
import exampleService from "../../services/example.service"
import { AuthContext } from '../../context/auth.context';
import { useEffect, useState, useContext } from "react"
import axios from "axios"


export default function TaskList() {
    const { user } = useContext(AuthContext)
    const [tasks, setTasks] = useState(null)

    function handleEdit(task) {
        
        if (task.checked) {
            if (user._id == task.user) {
                exampleService.updateOne(task._id, { checked: false, user: undefined })
                    .then((data) => {
                        console.log("Check es true y soy el usuario: ", data.data)
                        return exampleService.getAll(user.couple._id)
                    })
                    .then((result) => {
                        setTasks(result.data)
                    })
                    .catch((err) => { console.log(err) })
            } else {
                console.log("No tienes permiso para editar esta tarea")
            }
        } else {
        
                exampleService.updateOne(task._id, { checked: true , user: user._id})/// aqui es donde se tiene que actualizar el campo user con el id del usuario
                    .then((data) => {
                        console.log("task con el id del usuario",task.user)//este console.log debe devolverme la task con el id del usuario ya vinculado 
                        console.log("Check es false: ", data.data)
                        console.log("id de usuario",user._id)// este console.log me muestra que si esta obteniendo el id del usuario
                        
                        return exampleService.getAll(user.couple._id)
                    })
                    .then((result) => {
                        setTasks(result.data)
                    })
                    .catch((err) => { console.log(err) }) 
        }
    }



    function handleNew(id) {
        exampleService.createOne(id, { title: "Lavar platos", value: 5 })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleDelete(id) {
        exampleService.deleteTask(id)
            .then((data) => {

            })
    }


    useEffect(() => {
        exampleService.getAll(user.couple._id)
            .then((result) => {
                setTasks(result.data)
            })
            .catch((err) => { console.log(err) })
    }, [])

    console.log(tasks)
    return (
        <>
            <Navbar />
            {/* <button onClick={() => { handleNew("64102e6f77b5a6c54d76cec1") }}>Add new</button> */}
            <ul>
                {tasks && tasks.map((item) => {
                    return (
                        <>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id={item._id}
                                    defaultChecked={item.checked}
                                    onChange={() => handleEdit(item)}
                                />
                                <label className="form-check-label" htmlFor={item._id}>
                                    {item.title}
                                </label>
                            </div>
                        </>
                    )
                })}
            </ul>
            <Menu />
        </>
    )
}