import Navbar from "../../components/Navbar/Navbar"
import Menu from "../../components/Menu/Menu"

export default function TaskList(){
    return (
        <>
        <Navbar/>
        <ul>
            <li>Limpiar cocina</li>
            <li>Limpiar piso</li>
            <li>Lavar Platos</li>
            <li>Hacer almuerzo</li>
            <li>Hacer cena</li>
        </ul>
        <Menu/>
        </>
    )
}