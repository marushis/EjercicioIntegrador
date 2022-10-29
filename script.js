
let cantidad = document.getElementById("cant")
let seleccion = document.getElementById("sel")
let divTotal = document.getElementById("total");

let actualizarTotal = (cantidad, seleccion, div) => {
  if (seleccion === "1") {
    div.textContent = `Total a Pagar: $ ${200 * cantidad * 0.2}`;
  }

  if (seleccion === "2") {
    div.textContent = `Total a Pagar: $ ${200 * cantidad * 0.5}`;
  }

  if (seleccion === "3") {
    div.textContent = `Total a Pagar: $ ${200 * cantidad * 0.85}`;
  }
};

seleccion.addEventListener("change", (e) => {
  console.log(e.target.value);
  if (e.target.value === "Seleccione categoria") {
    divTotal.textContent = "Total a Pagar: $";
  }
  actualizarTotal(cantidad.value, e.target.value, divTotal);
});

cantidad.addEventListener("input", (e) => {
  actualizarTotal(cantidad.value, seleccion.value, divTotal);
});
