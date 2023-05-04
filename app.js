// Good luck!

let estoyJugando = true;
let numeroCorrecto = Math.floor(Math.random() * 100);
let numIntentos = 10;

document.querySelector("form").addEventListener("click", (e) => {
  e.preventDefault(); // Impedimos que el formulario haga un petición GET
});
