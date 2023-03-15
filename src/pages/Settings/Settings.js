import Menu from "../../components/Menu/Menu"
import Navbar from "../../components/Navbar/Navbar"
import { Link, useNavigate } from "react-router-dom"
import exampleService from "../../services/example.service"
import { AuthContext } from "../../context/auth.context"
import { useContext, useState } from "react"
import Avatar from "../../components/Avatar/Avatar"
import Alert from "../../components/Alert/Alert"
import arrow from "../../img/arrow.gif"
import "./Settings.css"


export default function Settings(){
let navigate = useNavigate()
const { setCoupleCreated } = useContext(AuthContext);
const { user, setUser } = useContext(AuthContext);
const [couple, setCouple] = useState({id:user._id, coupleName:"", userName:""})
let element;
let tasksFormButton;
if(!user.couple){
    element = <Alert text={" Es momento de crear tu pareja."} strong={"Hola de nuevo!"}/>
    tasksFormButton= <div className="btn-shine-container"><button className="btn btn-primary animate__animated animate__backInRight mb-2 btn-shine" onClick={handleCreateCouple}></button></div>
}else{
    if(!user.couple.task.length){
        element = <Alert text={" Aquí puedes elegir las tareas asociadas a tu pareja."} strong={"Hola de nuevo!"}/>
        tasksFormButton= <Link to={"/tasksForm"}><div className="btn-shine-container"><button className="btn btn-primary animate__animated animate__backInRight mb-2 btn-shine btn-shine-form"><span className="shine shine-form text-uppercase">Completa tus tareas</span></button></div></Link>
    }
}

function handleCreateCouple(){
    exampleService.createCouple({id: couple.id, coupleName: couple.coupleName, userName: couple.userName})
    .then((data)=>{
        console.log("Creando pareja")
        setUser({...user, couple: data.data})
        setCoupleCreated(true)
        navigate("/profile")
    })
    .catch((err)=>{console.log(err)})
}

function handleChange(e){
    setCouple({...couple, [e.target.name]: e.target.value})
}

    return (
        <>
        <div className="p-container">
        <Navbar/>
        {element}
          <Avatar/>
          <div className={`d-flex flex-column justify-content-between pp-mini-container align-items-center ${!user.couple ? "mt-1" : "mt-5"}`} style={{height: !user.couple ? "50%" : "45%"}}>
            <div className="settings-form d-flex flex-column animate__animated animate__backInLeft">
            {!user.couple && <>
            <div className="d-flex justify-content-end"><img className="s-arrow" src={arrow}/></div>
            <label for="username" class="form-label text-start text-white">Ingresa el username de tu pareja</label>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Pareja</span>
            <input onChange={handleChange} type="text" class="form-control" placeholder="juan22." aria-label="Username" aria-describedby="basic-addon1" id="username" name="userName" value={couple.userName} />
            </div>
            <label for="nombre" class="form-label text-start text-white">Inventa un nombre para tu pareja</label>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Nombre</span>
            <input onChange={handleChange} type="text" class="form-control" placeholder="solYJuan" aria-label="Username" aria-describedby="basic-addon1" id="nombre" name="coupleName" value={couple.coupleName}/>
            </div>
            <div className="d-flex justify-content-start"><img className="s-arrow-l" src={arrow}/></div>
            </>}
            {user.couple && <>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Username</span>
            <input type="text" class="form-control" placeholder={user.name} aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Email</span>
            <input type="text" class="form-control" placeholder={user.email} aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Pareja</span>
            <input type="text" class="form-control" placeholder={user.couple ? user.couple.coupleName : "No hay una pareja asociada..."} aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Puntos</span>
            <input type="text" class="form-control" placeholder={user.puntos || "0"} aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
            </>}
            </div>
            {tasksFormButton}
        <Menu/>
          </div>
        </div>
        </>
    )
}

