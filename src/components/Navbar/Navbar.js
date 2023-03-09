import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <nav>
            <Link to={"/leaderboard"}><span>🏆</span></Link>
            <Link to={"/settings"}><span>🤵‍♂️</span></Link>
        </nav>
    )
}