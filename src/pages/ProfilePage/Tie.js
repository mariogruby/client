import "./ProfilePage.css";
import Avatar from "../../components/Avatar/Avatar";
import Greeting from "../../components/Greeting/Greeting"
import MinigamesCard from "../../components/MinigamesCard/MinigamesCard";
import Menu from "../../components/Menu/Menu";
import fire from "../../img/fire.gif"


function Tie({userProportions, setUserProportions, profileUser, partnerUser, setPartnerProportions, partnerProportions, outcome}) {
  return (
    <>
    <div className="d-flex flex-column pp-mini-container align-items-center justify-content-center" style={{height: "30%"}}>
    <div className="d-flex pp-mini-container align-items-center justify-content-center" style={outcome === "winning" || outcome === "loosing"? {height: "30%", marginTop: "45px"} : {height: "37%"}}>
    <Avatar isTieView={true} isProfileView={true} item={profileUser} outcome={outcome} role={"user"} userProportions={userProportions} setUserProportions={setUserProportions}/>
    <img src={fire} style={{height: "64px"}}/>
    <Avatar isProfileView={true} item={partnerUser} outcome={outcome} role={"partner"} partnerProportions={partnerProportions} setPartnerProportions={setPartnerProportions}/>
    </div>
    </div> 
    <div className="d-flex flex-column justify-content-between pp-mini-container align-items-center" style={outcome === "winning" || outcome === "loosing" ? {marginTop: "45px"} : null}>
    <div style={{height: "5px"}}></div>
    <MinigamesCard/>
    <Menu/>
      </div>
    </>
  );
}

export default Tie;