import Menu from "../../components/Menu/Menu"
import Navbar from "../../components/Navbar/Navbar"
import { Link } from "react-router-dom"
import { useEffect } from "react"


export default function EditSettings(){

    return (
        <>
        <Navbar/>
        <h1>Es de mañana...</h1>
        <h2>¿Qué tareas se asocian más a tu rutina?</h2>
        <button>Tender la cama</button>
        <button>Preparar desayuno</button>
        <button>Lavar los platos del desayuno</button>
        <h1>Es el mediodía...</h1>
        <h2>¿Qué tareas se asocian más a tu rutina?</h2>
        <button>Cocinar almuerzo</button>
        <button>Lavar los platos del almuerzo</button>
        <h1>Ya es de noche...</h1>
        <h2>¿Qué tareas se asocian más a tu rutina?</h2>
        <button>Preparar la cena</button>
        <button>Lavar los platos de la cena</button>
        <h1>Tareas random de la semana...</h1>
        <h2>¿Qué tareas se asocian más a tu rutina?</h2>
        <button>Poner lavarropas</button>
        <button>Colgar ropa limpia</button>
        <button>Guardar ropa limpia</button>
        <button>Limpiar baño</button>
        <button>Limpiar piso</button>
        <button>Regar plantas</button>
        <Link to={"/tasksPoints"}><div><button>Finalizar</button></div></Link>
        <Menu/>
        </>
    )
}
