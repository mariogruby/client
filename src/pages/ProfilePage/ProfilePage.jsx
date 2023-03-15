import "./ProfilePage.css";
import Avatar from "../../components/Avatar/Avatar";
import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu"
import MinigamesCard from "../../components/MinigamesCard/MinigamesCard";
import Greeting from "../../components/Greeting/Greeting"
import { useEffect, useState } from "react";
import Alert from "../../components/Alert/Alert";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useLocation, useNavigate } from "react-router-dom";

function ProfilePage() {
  const { user, coupleCreated, hasBeenGreeted, setHasBeenGreeted, count, setCount, tasksCreated } = useContext(AuthContext);
  useEffect(()=>{
    if(count<=0){
      setHasBeenGreeted(true)
      setCount(count+1)
    }
  }, [])

  return (
    <>
    <div className="p-container">
    <Navbar/>
    {coupleCreated && <Alert text={"La pareja fue creada con éxito. Ya puedes completar las tareas."} strong={"Enhorabuena! "} success={true}/>}
    {tasksCreated && user.couple.task.length && <Alert text={"Ya tienes tu lista de tareas."} strong={"Enhorabuena! "} success={true}/>}
    {!user.couple && <Alert text={" No te olvides de completar la información sobre tu pareja."}/>}
    {user.couple && !coupleCreated && !user.couple.task.length && <Alert text={" Sólo faltan las tareas y estamos listos."}/>}
      <Avatar/>
      <div className="d-flex flex-column justify-content-between pp-mini-container align-items-center">
      <MinigamesCard/>
      {hasBeenGreeted && <Greeting/>}
    <Menu/>
      </div>
    </div>
    </>
  );
}

export default ProfilePage;
