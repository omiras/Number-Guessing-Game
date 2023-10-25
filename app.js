// Good luck!

// Variables de estado iniciales. Puede que falta alguna...

let correctNumber = Math.floor(Math.random() * 100) + 1;
let reaminingAttempts = 2;
let previousGuesses = [];

// Usar variables para almacenar los nodos al principio de tu programa
let messageField = document.querySelector("#message");

// Actualizar el textContent de los nodos iniciales
document.querySelector("#remaining-guesses").textContent = reaminingAttempts;

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Impedimos que el formulario haga un petición GET

  // Comprobar si el número que ha puesto el usuario es mayor o menor que el correctNumber. Tomar decisiones

  let userValueInput = +document.querySelector("#guessField").value;

  //1. Si el número es mayor que correctNumber, tenemos que decirle que el el número que tiene que poner es menor.
  // 1.1 Actualizar el elemento del DOM .lowOrHi , propiedad .textContent, con el mensaje adecuado
  //2. Si el número es menor que correctNumber, tenemos que decirle que el  número que tiene que poner es mayor.
  // 1.1 Actualizar el elemento del DOM .lowOrHi , propiedad .textContent, con el mensaje adecuado

  //3. Decrementar el numero de intentos (reaminingAttempts)
  reaminingAttempts--;

  if (reaminingAttempts == 0) {
    console.log("Hemos perdido");
    setEndGame("You Lost! Better luck next time!");
  } else if (userValueInput != correctNumber) {
    // tiene que poner un número menor
    messageField.textContent = "Too high! Try again!";
  } else if (userValueInput < correctNumber) {
    messageField.textContent = "Too low! Try again!";
  } else if (userValueInput == correctNumber) {
    console.log("Hemos ganado!");
    setEndGame("You Won! Congrats!");
  }
  //4. Actualizar el elemento del DOM donde se ven el número de intentos en el nodo #remaining-guesses
  document.querySelector("#remaining-guesses").textContent = reaminingAttempts;

  //5. Cada vez que probamos un nuevo número, tenemos que añadirlo al array previousGuesses. Actualizar la variable de estado
  previousGuesses.push(userValueInput);

  //6. Tenemos que actualizar el nodo #previous-guesses con el valor del array anterior
  document.querySelector("#previous-guesses").textContent =
    previousGuesses.join(" - ");

  // "limpiamos" el input
  document.querySelector("#guessField").value = "";
});

// Función para actualizar la interfaz de usuario con un mensaje final tanto si hemos ganado como hemos perdido
function setEndGame(message) {
  messageField.textContent = message;

  // desactivar el input donde el usuario pone el numero. Teneis que ver por Internet como podemos poner como disabled ese input
  document.querySelector("#guessField").disabled = true;
  // Ocultamos mediante la propiedad .style adecuada, el botón "Submit Guess"
  document.querySelector("#subt").style.display = "none";
}
