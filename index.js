const perroActualELement = document.getElementById("perroActual");
const API = "https://dog.ceo/api/breeds/image/random";
const spinner = document.getElementById("spinner");
const contenedorLikePerros = document.getElementById("contenedorLikePerros");
const contenedorDisLikePerros = document.getElementById(
  "contenedorDisLikePerros"
);
contenedorLikePerros.classList.add("escondido");
contenedorLikePerros.classList.add("escondido");

perroActualELement.addEventListener("load", () => {
  perroActualELement.classList.toggle("escondido", false);
  spinner.classList.toggle("escondido", true);
});

async function nuevoPerro() {
  spinner.classList.toggle("escondido", false);
  perroActualELement.classList.toggle("escondido", true);
  const res = await fetch(API);
  const resJson = await res.json();
  console.log(resJson);
  perroActualELement.src = resJson.message;
  perroActualELement.classList.toggle("escondido", false);
}

function rankingPerros(ranking) {
  console.log(ranking);
  const nuevaImagen = document.createElement("img");
  nuevaImagen.src = perroActualELement.src;
  if (ranking === "+") {
    contenedorLikePerros.appendChild(nuevaImagen);
  } else {
    contenedorDisLikePerros.appendChild(nuevaImagen);
  }
  contenedorDisLikePerros.classList.toggle("escondido", false);
  contenedorLikePerros.classList.toggle("escondido", false);

  nuevoPerro();
}

//Ejecucion
nuevoPerro();
