import "./ProfilePage.css";
import Avatar from "../../components/Avatar/Avatar";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu"

function ProfilePage() {
  return (
    <div>
      <Navbar/>
      <Avatar/>
      <h1>Profile page</h1>
      <Menu/>
    </div>
  );
}

export default ProfilePage;
