import chess from "../../img/chess.png"
import "./MinigamesCard.css"
import { useState, useEffect } from "react";

export default function MinigamesCard(){
  const [bounce, setBounce] = useState(false)
  const [count, setCount] = useState(0);

      useEffect(()=>{
    const interval = setInterval(() => {
      setCount(count + 1);
      setBounce(!bounce);
    }, 1200);
    return () => clearInterval(interval);
  },[count])
    return(
        <div className="d-flex justify-content-center mt-5 animate__animated animate__backInLeft">
        <div className="d-flex minigames-card align-items-center">
            <div className="d-flex flex-column justify-content-center mini-btn-container">
            <h5 className="text-mini-btn">¿Quieres probar tu suerte?</h5>
            <button className="btn btn-primary mt-3">Minijuegos</button>
            </div>
            <img src={chess} className={`chess-logo ${bounce ? "animate__animated animate__tada" : null}`}/>
        </div>
        </div>
    )
}