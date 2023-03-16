import "./ProfilePage.css";
import Avatar from "../../components/Avatar/Avatar";
import Greeting from "../../components/Greeting/Greeting"
import MinigamesCard from "../../components/MinigamesCard/MinigamesCard";
import Menu from "../../components/Menu/Menu";

function Default({userProportions, setUserProportions, profileUser, partnerUser, setPartnerProportions, partnerProportions, outcome}) {
  return (
    <>
    <div className="d-flex flex-column pp-mini-container align-items-center justify-content-center" style={{height: "37%"}}>
    <Avatar isProfileView={false} item={profileUser} outcome={outcome} role={"user"} userProportions={userProportions} setUserProportions={setUserProportions}/>
    </div> 
    <div className="d-flex flex-column justify-content-between pp-mini-container align-items-center" style={outcome === "winning" || outcome === "loosing" ? {marginTop: "45px"} : null}>
      <MinigamesCard/>
     <Greeting/>
    <Menu/>
      </div>
    </>
  );
}

export default Default;