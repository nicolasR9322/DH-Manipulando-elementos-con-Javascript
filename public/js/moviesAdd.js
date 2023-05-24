const qs = (selector) => document.querySelector(selector);

let h1 = qs("h1"),
    section = qs("section"),
    article = qs("article");

h1.innerText = `AGREGAR PELÍCULAS`
h1.classList.add("titulo");

article.classList.add("fondoTransparente");

section.classList.add("fondoCRUD")

