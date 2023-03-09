import "./Menu.css";
import { Link } from "react-router-dom";

export default function Menu(props) {
    return(
        <div>
            <Link to={"/profile"}><span>Home</span></Link>
            <Link to={"/minijuegos"}><span>Minijuegos</span></Link>
            <Link to={"/tasks"}><span>Tareas</span></Link>
        </div>
    )
}