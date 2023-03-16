import "./Ruleta.css";
import { useRef, useState, useEffect } from "react";

function Ruleta() {
  const ruleta = [0,10,0,2,0,15,0,4,0,5];
  const [winnerIndex, setWinnerIndex] = useState(-1);
  const [canvasContext, setCanvasContext] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const center = canvas.width / 2;

    context.beginPath();
    context.moveTo(center, center);
    context.arc(center, center, center, 0, 2 * Math.PI);
    context.lineTo(center, center);
    context.fillStyle = "#33333333";
    context.fill();

    context.beginPath();
    context.moveTo(center, center);
    context.arc(center, center, center - 10, 0, 2 * Math.PI);
    context.lineTo(center, center);
    context.fillStyle = "black";
    context.fill();

    for (let i = 0; i < ruleta.length; i++) {
      context.beginPath();
      context.moveTo(center, center);
      context.arc(
        center,
        center,
        center - 20,
        (i * 2 * Math.PI) / ruleta.length,
        ((i + 1) * 2 * Math.PI) / ruleta.length
      );
      context.lineTo(center, center);
      context.fillStyle = Random_color();
      context.fill();

      context.save();
      context.translate(center, center);
      context.rotate(
        (3 * 2 * Math.PI) / (5 * ruleta.length) +
          (i * 2 * Math.PI) / ruleta.length
      );
      context.translate(-center, -center);
      context.font = "13px Comic Sans MS";
      context.textAlign = "right";
      context.fillStyle = "white";
      context.fillText(ruleta[i], canvas.width - 30, center);
      context.restore();
    }
  }, [ruleta]);

  const [posIni, setPosIni] = useState(0);
  const [clic, setClic] = useState(null);
  const [movement, setMovement] = useState(null);
  const [rotacionActual, setRotacionActual] = useState(-26);
  const [valoresGanadores, setValoresGanadores] = useState([]);
  function Sortear(event) {
    console.log("prueba");
    event.preventDefault();

    if (clic === null) {
      console.log("algo1");
      const canvas = document.getElementById("idcanvas");
      const movementInterval = setInterval(() => {
        setPosIni((prevPosIni) => prevPosIni + 10);
        setRotacionActual((prevRotacionActual) => prevRotacionActual + 10);
        canvas.style.transform = `rotate(${posIni}deg)`;
      }, 10);

      setMovement(movementInterval);
      setClic(1);
      document.getElementById("idestado").innerHTML = "Detener";
    } else {
      console.log("algo2");
      clearInterval(movement);
      setClic(null);
      document.getElementById("idestado").innerHTML = "Sortear";

      const secciones = ruleta.length;
      const anguloSeccion = 360 / secciones;
      let anguloGanador = 360 - (rotacionActual % 360);
      console.log("angulo ganador original  " + anguloGanador);

      let indiceGanador = Math.floor(anguloGanador / anguloSeccion);
      console.log("indice ganador inicial  " + indiceGanador);

      if (indiceGanador < 0) {
        console.log("if");
        indiceGanador = 17;
        console.log("indice if " + indiceGanador);

        let valorGanador = ruleta[indiceGanador];

        console.log("seccion  " + anguloSeccion);
        console.log("angulo ganador  " + anguloGanador);
        console.log("rotacion actual  " + rotacionActual);
        console.log("indice ganador " + indiceGanador);
        document.getElementById("idvalor").innerHTML = valorGanador;
        console.log(valorGanador);

        setValoresGanadores((valoresGanadores) => [
          ...valoresGanadores,
          valorGanador,
        ]);
      } else {
        console.log("else");
        let valorGanador = ruleta[indiceGanador];

        console.log("seccion  " + anguloSeccion);
        console.log("angulo ganador  " + anguloGanador);
        console.log("rotacion actual  " + rotacionActual);
        console.log("indice ganador " + indiceGanador);
        document.getElementById("idvalor").innerHTML = valorGanador;
        console.log(valorGanador);

        setValoresGanadores((valoresGanadores) => [
          ...valoresGanadores,
          valorGanador,
        ]);
      }
    }
  }

  function Random_color() {
    let ar_digit = ["2", "3", "4", "5", "6", "7", "8", "9"];
    let color = "";
    let i = 0;
    while (i < 6) {
      let pos = Math.round(Math.random() * (ar_digit.length - 1));
      color = color + "" + ar_digit[pos];
      i++;
    }
    return "#" + color;
  }

  return (
    <>
    <div className="divbody">
      <div className="contenedor">
        <h1>ConviRuleta</h1>
        <div className="ruleta">
          <canvas
            ref={canvasRef}
            id="idcanvas"
            width="600"
            height="600"
          ></canvas>

          <button>
            <span id="idestado" onClick={Sortear}>
              Sortear
            </span>
          </button>
          <div className="mark-winner"></div>

          <div id="idvalor"></div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Ruleta;
