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
import exampleService from "../../services/example.service";
import Default from "./Default"
import WinOrLoose from "./WinOrLoose";
import Tie from "./Tie"

function ProfilePage() {
  const { user, coupleCreated, hasBeenGreeted, setHasBeenGreeted, count, setUser, setCount, tasksCreated } = useContext(AuthContext);
  const [profileUser, setProfileUser] = useState(user)
  const [partnerUser, setPartnerUser] = useState(0)
  const [outcome, setOutcome] = useState("default")
  const [userProportions, setUserProportions] = useState({height:"160px", width:"160px"})
  const [partnerProportions, setPartnerProportions] = useState({height:"160px", width:"160px"})



  useEffect(()=>{
    if(count<=0){
      setHasBeenGreeted(true)
      setCount(count+1)
    }
      exampleService.getOneUser(user._id)
      .then((data)=>{
        setUser(data.data)
        setProfileUser(data.data)
      })
      .catch((err)=>{console.log(err)})
    
}, [])

useEffect(()=>{
        if(profileUser.couple){
          const p = user.couple.users.find(element => element !== user._id);
          exampleService.getOneUser(p)
        .then((data)=>{
          setPartnerUser(data.data)
        })
        .catch((err)=>{ console.log(err)})
        }
}, [profileUser])

useEffect(()=>{
  if(user.couple){
    if(partnerUser.points > profileUser.points){
      setUserProportions({height:"100px", width:"100px"})
      setOutcome("loosing")
    }else if(partnerUser.points < profileUser.points){
      setPartnerProportions({height:"100px", width:"100px"})
      setOutcome("winning")
    }else if(partnerUser.points === profileUser.points){
      setOutcome("tie")
    }
  }
}, [partnerUser])

  return (
    <>
    <div className="p-container">
    <Navbar/>
    {coupleCreated && <Alert text={"La pareja fue creada con éxito. Ya puedes completar las tareas."} strong={"Enhorabuena! "} success={true}/>}
    {tasksCreated  && <Alert text={"Ya tienes tu lista de tareas."} strong={"Enhorabuena! "} success={true}/>}
    {!user.couple && <Alert text={" No te olvides de completar la información sobre tu pareja."}/>}
    {user.couple && !coupleCreated && !user.couple.task.length && <Alert text={" Sólo faltan las tareas y estamos listos."}/>}
    {outcome==="default" && <Default userProportions={userProportions} setUserProportions={setUserProportions} profileUser={profileUser} partnerUser={partnerUser} setPartnerProportions={setPartnerProportions} partnerProportions={partnerProportions} outcome={outcome}/> }
    {outcome==="winning" && <WinOrLoose userProportions={userProportions} setUserProportions={setUserProportions} profileUser={profileUser} partnerUser={partnerUser} setPartnerProportions={setPartnerProportions} partnerProportions={partnerProportions} outcome={outcome}/>}
    {outcome==="loosing" && <WinOrLoose userProportions={userProportions} setUserProportions={setUserProportions} profileUser={profileUser} partnerUser={partnerUser} setPartnerProportions={setPartnerProportions} partnerProportions={partnerProportions} outcome={outcome}/>}
    {outcome==="tie" && <Tie userProportions={userProportions} setUserProportions={setUserProportions} profileUser={profileUser} partnerUser={partnerUser} setPartnerProportions={setPartnerProportions} partnerProportions={partnerProportions} outcome={outcome}/>}
    </div>
    </>
  );
}

export default ProfilePage;

