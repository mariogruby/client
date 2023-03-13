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

{/* <>
        <Navbar/>
        <h1>Scores</h1>
        <div>        
        <span><p><img src="..."/></p><p>1ST</p></span>
        <span><p><img src="..."/></p><p>2nd</p></span>
        </div>
        <div>
            <span>solci22</span>
            <span>152</span>
        </div>
        <p>Tu premio:</p>
        <p>Cena romántica en Goulu</p>
        <Menu/>
        </> */}
