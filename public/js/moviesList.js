const qs = (selector) => document.querySelector(selector);

let body = qs("body"),
    h1 = qs("h1");


confirm("¿Desea el modo oscuro?") ? body.style.backgroundColor = "#7f7f7f"  : "";

h1.innerText = `LISTADO DE PELÍCULAS`;
h1.style.color = "white"
h1.style.backgroundColor = "teal"
h1.style.padding = "20px"