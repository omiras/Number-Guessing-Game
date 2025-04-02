/* Configuración inicial del juego  */

const correctNumber = Math.floor(Math.random() * 100) + 1; // un número entre 1 y 100
let remainingAttempts = 10;
const previosGuesses = [];

// Contenedor donde irán los mensaje de feedback para el usuario
const displayMessage = document.querySelector('#message');

// Contenedor del DOM con los intentos restantes
const remainingGuessesDisplay = document.querySelector('#remaining-guesses');

// Contenedor del DOM con los números ya probados
const alreadyAttemptedNumbersDisplay = document.querySelector('#previous-guesses');

remainingGuessesDisplay.textContent = remainingAttempts;

/* Seleccionamos el formulario y le asociamos un listener de tipo submit (porque queremos aprovechar la validación HTML y además el <input> está entre tags <form>) */

const form = document.querySelector('form');

form.addEventListener("submit", function (event) {
  console.log("formulario completado.");
  event.preventDefault(); // evitamos que el formulario envie los datos a la URL que tiene en el atributo "action". 
  const guessedNumber = Number(document.querySelector("#guessField").value);
  console.log("Número probado por el usuario: ", guessedNumber);


  // actualizar estado
  remainingAttempts--;
  previosGuesses.push(guessedNumber);

  // Actualizar el DOM
  remainingGuessesDisplay.textContent = remainingAttempts;
  alreadyAttemptedNumbersDisplay.textContent = previosGuesses.join(" - ");

  // 1. Comprobar si el numero es exactamente el numero a adivinar. Si lo es, mostrar un mensaje de victoria y "deshabilitar" el botón y el input para que no pueda escribir más números. 
  if (correctNumber == guessedNumber) {
    // mensaje de victoria
    displayMessage.textContent = `You Won! The correct number was ${correctNumber} Congrats!`;
    // Deshabilitar el input
    document.querySelector("#guessField").disabled = true;
    document.querySelector("#guessField").value = "";
    document.querySelector("#subt").style.display = "none";

  }

  // 2. Comprobar si el numero es mayor o menor y mostrar un mensaje en consecuencia. Hay que decrementar también el número de intentos. Actualizar el número de intentor en la interfaz del usuario. Actualizar la lista de números probado en la interfaz del usuario. Corregir 21.20h
  else if (correctNumber > guessedNumber) {
    // nos hemos quedado cortos, el número es mayor

    // actualizar el DOM
    displayMessage.textContent = "Too low! The correct number is higher.";

  } else if (correctNumber < guessedNumber) {
    // nos hemos pasado, el número a adivinar es menor

    // actualizar el DOM
    displayMessage.textContent = "Too high! The correct number is lower.";

  }
});



// 3. Comprobar si hemos perdido porque remainingAttemts == 0. Mostrar mensaje de derrota y quizás mostrar el número que había que adivinar para no dejar al jugador con las ganas :)



