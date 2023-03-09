import { Link } from "react-router-dom"

export default function TasksPointsForm(){
    return(
<>
        <div><button>Poner lavarropas</button><input type="number"></input></div>
        <div><button>Colgar ropa limpia</button><input type="number"></input></div>
        <div><button>Limpiar baño</button><input type="number"></input></div>
        <div><button>Regar plantas</button><input type="number"></input></div>
        <div><button>Lavar los platos de la cena</button><input type="number"></input></div>
        <div><button>Cocinar almuerzo</button><input type="number"></input></div>
        <Link to={"/profile"}><button>Finalizar</button></Link>
</>
    )
}