/* eslint-disable */
import "./HomePage.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context"

function HomePage() {
  const { logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  function logOutHandler(){
    logOutUser()
    navigate("/login");
  }

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}

export default HomePage;
