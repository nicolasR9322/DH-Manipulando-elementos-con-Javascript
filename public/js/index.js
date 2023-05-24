const qs = (selector) => document.querySelector(selector)
const qsa = (selector) => document.querySelectorAll(selector)

let main = qs("main"),
    h2 = qs("h2"),
    a = qs("a"),
    p = qsa("p"),
    body = qs("body")

let user = prompt("ingrese su nombre");

if(user){
    h2.innerText += ` ${user}`
} else {
    h2.innerText += ` invitado`
}

console.log(h2)
h2.innerText = h2.innerText.toUpperCase();

a.style.color = "#E51B3E"

confirm("Desea colocar un fondo de pantalla") ? body.classList.add("fondo") : "";

for (let i = 0; i < p.length; i++) {
    if(i%2 == 0){
        p[i].classList.add("destacadoPar");
    } else {
        p[i].classList.add("destacadoImpar");
    }
}

main.style.display = "block"