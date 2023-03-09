import Menu from "../../components/Menu/Menu"
import Navbar from "../../components/Navbar/Navbar"
import { Link } from "react-router-dom"

export default function Settings(){
    return (
        <>
        <Navbar/>
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