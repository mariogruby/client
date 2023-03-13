function Ruleta() {
    const ruleta = [
        -1, 0, -2, 0, -3, 0, -4, 0, -5, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0,
      ];
      let winnerIndex = -1;
      
      let canvas = document.getElementById("idcanvas");
      let context = canvas.getContext("2d");
      let center = canvas.width / 2;
      
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
      
      for (var i = 0; i < ruleta.length; i++) {
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
        context.fillStyle = random_color();
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
      
      let pos_ini = 0;
      let clic = 0;
      let movement;
      let ganador;
      let rotacion_actual = -26;
      let valores_ganadores = [];
        
      function mostrarTablaValores() {
        let tabla = '<table>';
        tabla += '<thead><tr><th>Sorteo</th><th>Valor Ganador</th></tr></thead>';
        tabla += '<tbody>';
      
        for (let i = 0; i < valores_ganadores.length; i++) {
          tabla += '<tr><td>' + (i + 1) + '</td><td>' + valores_ganadores[i] + '</td></tr>';
        }
      
        tabla += '</tbody></table>';
      
        document.getElementById('tabla_valores').innerHTML = tabla;
      }
      
      function sortear() {
        if (clic == 0) {
          let canvas = document.getElementById("idcanvas");
          movement = setInterval(function () {
            pos_ini += 10;
            rotacion_actual += 10;
            canvas.style.transform = "rotate(" + pos_ini + "deg)";
          }, 10);
          clic = 1;
          document.getElementById("idestado").innerHTML = "Detener";
        } else {
          clearInterval(movement);
          clic = 0;
          document.getElementById("idestado").innerHTML = "Sortear";
          let secciones = ruleta.length;
          let angulo_seccion = 360 / secciones;
          let angulo_ganador = 360 - (rotacion_actual % 360);
          console.log("angulo ganador original  " + angulo_ganador);
          // if(angulo_ganador<=17){
          //     indice_ganador = Math.floor(18 / angulo_seccion)-1;
          // }
          // else{
          //     indice_ganador = Math.floor(angulo_ganador / angulo_seccion)-1;
          // }
      
          let indice_ganador = Math.floor(angulo_ganador / angulo_seccion) - 1;
          console.log("indice ganador inicial  " + indice_ganador);
          if (indice_ganador < 0) {
            console.log("if");
            indice_ganador = 17;
            console.log("indice if " + indice_ganador);
            let valor_ganador = ruleta[indice_ganador];
      
            console.log("seccion  " + angulo_seccion);
            console.log("angulo ganador  " + angulo_ganador);
            console.log("rotacion actual  " + rotacion_actual);
            console.log("indice ganador " + indice_ganador);
            document.getElementById("idvalor").innerHTML = valor_ganador;
            console.log(valor_ganador);
            valores_ganadores.push(valor_ganador);
      mostrarTablaValores();
            
          } else {
            console.log("else");
            let valor_ganador = ruleta[indice_ganador];
      
            console.log("seccion  " + angulo_seccion);
            console.log("angulo ganador  " + angulo_ganador);
            console.log("rotacion actual  " + rotacion_actual);
            console.log("indice ganador " + indice_ganador);
            document.getElementById("idvalor").innerHTML = valor_ganador;
            console.log(valor_ganador);
            valores_ganadores.push(valor_ganador);
      mostrarTablaValores();
          }
          console.log("indice final  "+indice_ganador)
         
        }
      
      
      
      }
      
      function random_color() {
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
    <Navbar/>
    <title>Sorteo</title>
      <body>
        <label for="numero">Ingrese un número:</label>
        <input type="number" id="numero" name="numero" />

        <div class="contenedor">
          <h1>Ruleta</h1>
          <div class="ruleta">
            <canvas id="idcanvas" width="600" height="600"></canvas>
            <br />
            <button onclick="sortear()">
              <span id="idestado">Sortear</span>
            </button>
            <div class="mark-winner"></div>

            <div id="idvalor"></div>
          </div>
        </div>
        <div>
          <table id="tabla_valores">
            <thead></thead>
            <tbody></tbody>
          </table>
        </div>
      </body>
      <Menu/>
    </>
  );
}
export default Ruleta;
