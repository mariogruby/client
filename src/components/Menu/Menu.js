import "./Menu.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useState } from "react";

export default function Menu(props) {
    const location = useLocation();
    const [path, setPath] = useState(location.pathname)

    return(
        <div className="menu-bottom d-flex justify-content-around animate__animated animate__backInUp">
            {path !== "/profile" && <Link to={"/profile"}><svg className="link-menu" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z"/></svg></Link>}
            {path !== "/minijuegos" && <Link to={"#"}><svg className="link-menu" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M7.35 38q-1.9 0-2.975-1.275Q3.3 35.45 3.6 33.2L6 16.45q.4-2.65 2.475-4.55T13.2 10h21.65q2.65 0 4.725 1.9 2.075 1.9 2.475 4.55L44.4 33.2q.3 2.25-.775 3.525T40.65 38q-1.15 0-1.95-.375t-1.35-.925l-5.2-5.2h-16.3l-5.2 5.2q-.55.55-1.35.925T7.35 38Zm.9-3.2 6.3-6.3h18.9l6.3 6.3q.25.25.9.45.45 0 .675-.45.225-.45.125-.9l-2.4-16.95q-.25-1.75-1.475-2.85T34.85 13h-21.7q-1.5 0-2.725 1.1T8.95 16.95L6.55 33.9q-.1.45.125.9t.675.45q.35 0 .9-.45ZM35 26q.8 0 1.4-.6.6-.6.6-1.4 0-.8-.6-1.4-.6-.6-1.4-.6-.8 0-1.4.6-.6.6-.6 1.4 0 .8.6 1.4.6.6 1.4.6Zm-4.25-6.5q.8 0 1.4-.6.6-.6.6-1.4 0-.8-.6-1.4-.6-.6-1.4-.6-.8 0-1.4.6-.6.6-.6 1.4 0 .8.6 1.4.6.6 1.4.6ZM15 25.75h2.5V22h3.75v-2.5H17.5v-3.75H15v3.75h-3.75V22H15Zm9-1.65Z"/></svg></Link>
              }  
              {path !== "/tasks" && <Link to={"/tasks"}><svg  className="link-menu" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M11.1 37.3 4 30.2l2.1-2.1 5 4.95 8.95-8.95 2.1 2.15Zm0-16L4 14.2l2.1-2.1 5 4.95 8.95-8.95 2.1 2.15ZM26 33.5v-3h18v3Zm0-16v-3h18v3Z"/></svg></Link>}
        </div>
    )
}
