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
import axios from "axios"



export default function Settings(){
let navigate = useNavigate()
const { setCoupleCreated, setTasksCreated } = useContext(AuthContext);
const { user, setUser } = useContext(AuthContext);
const [couple, setCouple] = useState({id:user._id, coupleName:"", userName:""})
const [editView, setEditView] = useState(user && user.couple && user.couple.task.length)

const [selectedFile, setSelectedFile] = useState(null);

const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  
  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", selectedFile);
      console.log(process.env.REACT_APP_SERVER_URL + "/api/upload/"+user._id)
      const response = await axios.post(process.env.REACT_APP_SERVER_URL + "/api/upload/"+user._id, formData);
      console.log(response.data);
  
      // Llamada a axios a la ruta que edita el usuario en back y pasarle el response.data
  
    } catch (error) {
      console.log(error);
    }
  };

function handleSubmit(event){
    event.preventDefault();
    if(!editView){
        exampleService.createCouple({id: couple.id, coupleName: couple.coupleName, userName: couple.userName})
        .then((data)=>{
            setUser({...user, couple: data.data})
            setCoupleCreated(true)
            navigate("/profile")
        })
        .catch((err)=>{console.log(err)})
    }else{
  event.handleFileInputChange()
  event.handleUpload()
        console.log("handle Submit edit view")
    }  
}

function handleChange(e){
    setCouple({...couple, [e.target.name]: e.target.value})
}

    return (
        <>
        <div className="p-container">
        <Navbar/>
        {user && !user.couple && <Alert text={" Es momento de crear tu pareja."} strong={"Hola de nuevo!"}/>}
        {user && user.couple && !user.couple.task.length && <Alert text={" Aquí puedes elegir las tareas asociadas a tu pareja."} strong={"Hola de nuevo!"}/>}
          <Avatar/>
          <form onSubmit={handleSubmit}>
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
            <input type="text" class="form-control bg-primary" placeholder={user.name} aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
            <div class=" input-group mb-3">
            <input class="form-control" type="file" onChange={handleFileInputChange} id="formFile"/>
            </div>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Email</span>
            <input type="text" class="form-control" placeholder={user.email} aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Pareja</span>
            <input type="text" class="form-control" placeholder={user.couple ? user.couple.coupleName : "No hay una pareja asociada..."} aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
            <div class="input-group mb-5">
            <span class="input-group-text" id="basic-addon1">Puntos</span>
            <input type="text" class="form-control" placeholder={user.puntos || "0"} aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
            </>}
            </div>
            {user && user.couple && user.couple.task.length && <div className="btn-shine-container mb-5"><button className="btn btn-primary animate__animated animate__backInRight mb-2 btn-shine"><span className="shine text-uppercase" onClick={handleUpload}>Editar</span></button></div>}
            {user && !user.couple && <div className="btn-shine-container mb-5"><button className="btn btn-primary animate__animated animate__backInRight mb-2 btn-shine"><span className="shine text-uppercase">Crear</span></button></div>}
            {user && user.couple && !user.couple.task.length && <Link to={"/tasksForm"}><div className="btn-shine-container mb-5 mt-5"><button className="btn btn-primary animate__animated animate__backInRight mb-2 btn-shine btn-shine-form"><span className="shine shine-form text-uppercase">Completa tus tareas</span></button></div></Link>}
        <Menu/>
          </div>
          </form>
        </div>
        </>
    )
}

