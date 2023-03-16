import "./Greeting.css"
import hand from "../../img/hand.gif"
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";

export default function DancingCarlton(){
  const { user } = useContext(AuthContext);

    return (
    <div className="d-flex mb-5 mt-2">
          <h1 className="d-flex align-items-end greeting-text">Hola, {user.name}!</h1>
          <img className="greeting-img" src={hand}/>
    </div>
    )
}