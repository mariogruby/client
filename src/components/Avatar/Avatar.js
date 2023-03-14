import "./Avatar.css"
import sparksL from "../../img/sparksL.png"
import sparksR from "../../img/sparksR.png"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"


export default function Avatar(){
    const location = useLocation();
    const [path, setPath] = useState(location.pathname)
    const [bounce, setBounce] = useState(false)
    const [count, setCount] = useState(0);
  
      useEffect(()=>{
      const interval = setInterval(() => {
        setCount(count + 1);
        setBounce(!bounce);
      }, 1000);
      return () => clearInterval(interval);
    },[count])


    useEffect(()=>{
      
    },[])
    return(
        <div className="animate__animated animate__zoomIn">
        <div>
        {/* {path !== "/settings" && <img src={sparksL} className={`sparks spark-l ${bounce ? "animate__animated animate__flash" : null}`}/>} */}
        <img src={sparksL} className={`sparks spark-l ${bounce ? "animate__animated animate__flash" : null}`}/>
        <img className="avatar-img mt-5 mb-3" src="https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg"/>
        {/* {path !== "/settings" && <img src={sparksR} className={`sparks spark-r ${bounce ? "animate__animated animate__flash" : null}`}/>} */}
        <img src={sparksR} className={`sparks spark-r ${bounce ? "animate__animated animate__flash" : null}`}/>
        </div>
        {path !== "/settings" && <><h5 className="avatar-text">Puntos</h5>
        <h1 className="avatar-text points">152</h1></>}
        </div>
    )
}
