//botão escuro
const botaoTema = document.getElementById("theme-toggle");

if(localStorage.getItem("tema") === "escuro"){
    document.body.classList.add("dark");
}

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("tema", "escuro");
    }else{
        localStorage.setItem("tema", "claro");
    }

});

//formulario
const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if(nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos.");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    formulario.reset();

});

// BOTÃO MODO ESCURO

const botaoTema = document.getElementById("theme-toggle");

if(localStorage.getItem("tema") === "escuro"){
    document.body.classList.add("dark");
}

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("tema", "escuro");
    }else{
        localStorage.setItem("tema", "claro");
    }

});

// FORMULÁRIO

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if(nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos.");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    formulario.reset();

});

//botao voltar ao topo
const topoBtn = document.getElementById("topoBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        topoBtn.style.display = "block";
    }else{
        topoBtn.style.display = "none";
    }

});

topoBtn.addEventListener("click", function(){

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

topoBtn.style.display = "none";
const topoBtn = document.getElementById("topoBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        topoBtn.style.display = "block";
    }else{
        topoBtn.style.display = "none";
    }

});

topoBtn.addEventListener("click", function(){

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

topoBtn.style.display = "none";