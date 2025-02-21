const body = document.querySelector("body");
const contenedor_boton = document.querySelector(".contenedor_boton");
const icono = document.querySelector(".contenedor_icono i");

if (localStorage.getItem("ModoOscuro") === "true") {
  body.classList.add("ModoOscuro");
  icono.classList.replace("bxs-sun", "bxs-moon");
}

contenedor_boton.addEventListener("click", () => {
  body.classList.toggle("ModoOscuro");

  const esModoOscuro = body.classList.contains("ModoOscuro");

  if (esModoOscuro) {
    icono.classList.replace("bxs-sun", "bxs-moon"); // Cambio a Luna
  } else {
    icono.classList.replace("bxs-moon", "bxs-sun"); // Cambio a Sol
  }

  localStorage.setItem("ModoOscuro", esModoOscuro);
});
