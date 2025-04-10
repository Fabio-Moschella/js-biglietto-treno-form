////#######################################################################################
//MAIN
////#######################################################################################

const nameAndSurnameInput = document.querySelector("#nameinput");
const kmToCoverEl = document.querySelector("#kminput");
const generateButtonEl = document.querySelector("#generatebutton");
const registeredUserFormEl = document.querySelector("#registereduserform");
const ageOfTheUser = document.querySelector("#ageuser");

//#######################################################################################
// FUNZIONI
//#######################################################################################
registeredUserFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameOfTheUser = nameAndSurnameInput.value;
  const kmCover = kmToCoverEl.value;
  const userAge = ageOfTheUser.value;
  console.log(nameOfTheUser);
  console.log(kmCover);
  console.log(userAge);
  const prezzoKm = Math.floor(kmToCoverEl.value * 0.21);
  const scontoDel20 = (prezzoKm * 20) / 100;
  const scontoDel40 = (prezzoKm * 40) / 100;
  const prezzoUnder18 = prezzoKm - scontoDel20;
  const prezzoOver65 = prezzoKm - scontoDel40;
  // Se l'utente è < 18
  if (ageOfTheUser.value === "2") {
    //   Stampa il prezzo per gli under18
    console.log(prezzoUnder18, "prezzounder18");
    // Se invece l'utente è > 65
  } else if (ageOfTheUser.value === "3") {
    //   Stampa il prezzo per gli over65
    console.log(prezzoOver65, "prezzoover65");
    // Altrimenti
  } else {
    //   Stampa il prezzo standard
    console.log(prezzoKm, "prezzostandard");
  }
});
//kmToCover.addEventListener("click", () => {});
// // Ottengo dall'utente la sua età e li converto in intero
// const etautente = parseInt(prompt("Quanti anni hai?"));

// // Ottengo dall'utente i km che deve percorrere e li converto in intero
// const kmPercorsi = parseInt(prompt("Quanti chilometri devi percorrere?"));

// console.log(etautente, "etautente");
// console.log(prezzoKm, "prezzokm");
// console.log(prezzoUnder18, "prezzounder18");
// console.log(prezzoOver65, "prezzoover65");
