const botao = document.querySelector("#botao");
const titulo = document.querySelector("h1");


botao.addEventListener("click", function() {
    titulo.textContent = "Eu consegui programar!🚀💻";
    
});
const fundo = document.querySelector("#fundo");


fundo.addEventListener("click", function() {
 const cores = ["purple", "blue", "green", "orange", "pink"];

    const numero = Math.floor(Math.random() * cores.length);//math.random gera um numero aleatorio

    document.body.style.backgroundColor = cores[numero];
    titulo.textContent = "A cor mudou! 🌈";
});