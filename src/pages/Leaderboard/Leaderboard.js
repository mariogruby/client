/* eslint-disable */
import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";


export default function Leaderboard(){
    return (
        <>
        <div className="p-container">
        <Navbar/>
          <div className="d-flex flex-column justify-content-between pp-mini-container align-items-center">
        <Menu/>
          </div>
        </div>
        </>
    )
}


