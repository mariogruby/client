import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <Link to={"/minijuegos"}><p>Minijuegos</p></Link>
            <Link to={"/tasks"}><p>Tareas</p></Link>
        </nav>
    )
}