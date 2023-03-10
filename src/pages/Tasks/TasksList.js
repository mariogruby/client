import Navbar from "../../components/Navbar/Navbar"
import Menu from "../../components/Menu/Menu"
import exampleService from "../../services/example.service"
import { useEffect, useState } from "react"

export default function TaskList(){
    const [tasks, setTasks] = useState(0)

    function handleEdit(id){
        exampleService.updateOne(id, {checked: true})
        .then((data)=>{
            console.log(data.data)
        })
        .catch((err)=>{console.log(err)})
    }

    function handleNew(id){
        exampleService.createOne(id, {title: "Lavar platos", value: 5})
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    function handleDelete(id){
        exampleService.deleteTask(id)
    }


    useEffect(()=>{
        exampleService.getAll("640a00be23f7e6dfd02e3e50")
        .then((result)=>{
            setTasks(result.data)
        })
        .catch((err)=>{console.log(err)})
    },[])


    return (
        <>
        <Navbar/>
        <button onClick={()=>{handleNew("640a00be23f7e6dfd02e3e50")}}>Add new</button>
        <ul>
            { tasks && tasks.map((item)=>{
                return (<><li>{item.title}<span onClick={()=>{handleEdit(item._id)}}>Editar</span></li><button onClick={()=>{handleDelete(item._id)}}>Delete</button></>)
            })}
        </ul>
        <Menu/>
        </>
    )
}