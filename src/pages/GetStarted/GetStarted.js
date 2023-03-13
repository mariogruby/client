import {Link} from "react-router-dom"
import logo from "../../img/logo.png"
import cooking from "../../img/cooking.png"
import loveit from "../../img/loveit.png"
import "./GetStarted.css";

export default function GetStarted(){
    // *********************************************
    return(
        <div className="row gs-container">
            <div className="col-12 gs-space-container gs-upper">
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators gs-carousel">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1400">
    <div className="w-100 d-block">
      <img src={logo} className="logo" alt="..."/>
    </div>
    </div>
    <div className="carousel-item" data-bs-interval="1400">
      <img src={cooking} className="logo" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="1400">
      <img src={loveit} className="logo" alt="..."/>
    </div>
  </div>
</div>
            </div>
            <div className="col-12 gs-space-container gs-lower d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex flex-column align-items-center">
                <h3>ConviMillas</h3>
                <div className="gs-description text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</div>
                </div>
                <div className="...">
                <Link to={"/signup"}><button className="btn btn-primary mb-3 mt-4">EMPEZAR AHORA</button></Link>
                <Link to={"/login"}><p className="text-primary">¿Ya tienes una cuenta?</p></Link>
                </div>
            </div>
        </div>
    )
}