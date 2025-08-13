function transponerTabla() {
  const tabla = document.getElementById("tablaComparativa");
  const filas = Array.from(tabla.rows);
  const matriz = filas.map(fila => Array.from(fila.cells).map(cell => cell.innerHTML));

  const nuevaTabla = document.createElement("table");
  nuevaTabla.id = "tablaComparativa";
  nuevaTabla.innerHTML = "<caption>Características principales (Transpuesta)</caption>";

  for (let i = 0; i < matriz[0].length; i++) {
    const fila = nuevaTabla.insertRow();
    for (let j = 0; j < matriz.length; j++) {
      const celda = j === 0 ? document.createElement("th") : document.createElement("td");
      celda.innerHTML = matriz[j][i];
      fila.appendChild(celda);
    }
  }

  tabla.replaceWith(nuevaTabla);
}
