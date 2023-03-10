import Menu from "../../components/Menu/Menu"
import Navbar from "../../components/Navbar/Navbar"
import { Link } from "react-router-dom"
import exampleService from "../../services/example.service"
import { AuthContext } from "../../context/auth.context"
import { useContext } from "react"

export default function Settings(){
const { user } = useContext(AuthContext);

function handleCreateCouple(){
    exampleService.createCouple({id: user._id, coupleName:"solYJuanchi", userName: "hernando"})
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
    return (
        <>
        <Navbar/>
        <button onClick={handleCreateCouple}>Crear Pareja</button>
        <img src="..."/>
        <p><span>Nombre:</span><span>Sol</span></p>
        <p><span>Contraseña:</span><span>***********</span></p>
        <p><span>Puntos:</span><span>0</span></p>
        {/* <p><span>Pareja:</span><span>juan22</span></p> */}
        <p><span>Pareja:</span><input type="text" placeholder="Your partner's username..."></input></p>
        <Link to={"/tasksForm"}><p><span>Tareas:</span><button>Completar tareas?</button></p></Link>
        <Link to={"/settings/edit"}><button>Guardar cambios</button></Link>
        <Menu/>
        </>
    )
}