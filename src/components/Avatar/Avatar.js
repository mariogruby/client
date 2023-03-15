import "./Avatar.css"
import sparksL from "../../img/sparksL.png"
import sparksR from "../../img/sparksR.png"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import exampleService from "../../services/example.service"
import { AuthContext } from "../../context/auth.context"
import { useContext } from "react"


export default function Avatar(){
  const { user } = useContext(AuthContext);
    const location = useLocation();
    const [path, setPath] = useState(location.pathname)
    const [bounce, setBounce] = useState(false)
    const [count, setCount] = useState(0);
    const [points, setPoints] = useState(0);
    const hello = "hello"

  
  useEffect(()=>{
      const interval = setInterval(() => {
        setCount(count + 1);
        setBounce(!bounce);
      }, 1000);
      return () => clearInterval(interval);
    },[count])

  useEffect(()=>{
    exampleService.getPoints(user._id)
    .then((data)=>{
      setPoints(data.data)
    })
    .catch((err)=>{

    })
  },[path])
// console.log(points)
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
        <h1 className="avatar-text points">{points}</h1></>}
        </div>
    )
}
