import {Link} from "react-router-dom"
import logo from "../../img/logo.png"
import cooking from "../../img/cooking.png"
import loveit from "../../img/loveit.png"
import "./GetStarted.css";

export default function GetStarted(){

    return(
        <div className="row gs-container">
            <div className="col-12 gs-space-container gs-upper">
                {/* <img className="gs-img" src="https://img.freepik.com/free-vector/flat-couples-kissing-illustration_52683-57760.jpg?w=1380&t=st=1678375789~exp=1678376389~hmac=ab9582f3f42efd159ce062ff9b81ce8f19d5e519a2231714e510ece6cd456574"/> */}
                {/* <img className="logo" src={logo}/> */}
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators gs-carousel">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="w-100 d-block">
      <img src={logo} class="logo" alt="..."/>
    </div>
    </div>
    <div class="carousel-item">
      <img src={cooking} class="logo" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={loveit} class="logo" alt="..."/>
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
                <Link to={"/signup"}><button className="btn btn-primary mb-2 mt-4">EMPEZAR AHORA</button></Link>
                <Link to={"/login"}><p className="text-primary">¿Ya tienes una cuenta?</p></Link>
                </div>
            </div>
        </div>
    )
}