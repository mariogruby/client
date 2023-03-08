import {Link} from "react-router-dom"
import "./GetStarted.css";

export default function GetStarted(){
    return(
        <div className="row gs-container">
            <div className="col-12 gs-space-container"></div>
            <div className="col-12 gs-space-container">
                <div>
                <h3>Title</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div>
                <div id="carouselExampleIndicators" class="carousel slide mt-5" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" className="bg-dark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" className="bg-dark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                </div>
                <Link to={"/signup"}><button>EMPEZAR AHORA</button></Link>
                <Link to={"/login"}><p>¿Ya tienes una cuenta?</p></Link>
                </div>
            </div>
        </div>
    )
}