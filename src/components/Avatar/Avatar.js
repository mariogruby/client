/* eslint-disable */

import "./Avatar.css"
import sparksL from "../../img/sparksL.png"
import sparksR from "../../img/sparksR.png"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import exampleService from "../../services/example.service"
import { AuthContext } from "../../context/auth.context"
import { useContext } from "react"
import crown from "../../img/crown.gif"
import looser from "../../img/looser.gif"



export default function Avatar({isProfileView, item, outcome, role, partnerProportions, setPartnerProportions, userProportions, setUserProportions, isTieView}){
  const { user } = useContext(AuthContext);
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


    return(
        <div className="animate__animated animate__zoomIn" style={role==="user" && !isTieView ? {marginRight: "25px"}: null }>
        <div className={`d-flex ${isProfileView ? "flex-column align-items-center" : "justify-content-center"}`}>
        {role==="user" && outcome === "winning" && <img src={crown} style={{width:"100px", rotate: "-7deg"}}/>}
        {role==="partner" && outcome === "loosing" && <img src={crown} style={{width:"100px", rotate: "-7deg"}}/>}
        {role === "user" && outcome==="loosing" && <img src={looser} style={{width:"80px", marginTop:"82px"}}/>}
        {role === "partner" && outcome==="winning" && <img src={looser} style={{width:"80px", marginTop:"82px"}}/>}
        {!isProfileView && <img src={sparksL} className={`sparks spark-l ${bounce ? "animate__animated animate__flash" : null}`}/>}
        <img style={role==="user" ? userProportions : partnerProportions} 
        className={`avatar-img mb-3 ${outcome === "winning" || outcome === "loosing" ? "" : "mt-5"}`}
         src={ item  && item.avatar ? item.avatar : user.avatar || `https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg`}/>
        {!isProfileView && <img src={sparksR} className={`sparks spark-r ${bounce ? "animate__animated animate__flash" : null}`}/>}
        </div>
        {path !== "/settings" && <><h5 className="avatar-text">Puntos</h5>
        <h1 className="avatar-text points">{ item && item.points }</h1></>}
        </div>
    )
}


