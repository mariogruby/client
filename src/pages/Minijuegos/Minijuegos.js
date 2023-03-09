import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import Avatar from "../../components/Avatar/Avatar"
import Menu from "../../components/Menu/Menu"

export default function Minijuegos(){
    return(
        <>
        <Navbar/>
        <Avatar/>
        <h1>Minijuegos</h1>
        <Link to={"/queprefiere"}><p>Que prefiere</p></Link>
        <Link to={"/cuantoconoces"}><p>Cuanto lx conoces</p></Link>
        <Link to={"/ruleta"}><p>Ruleta</p></Link>
        <Menu/>
        </>
    )
}
