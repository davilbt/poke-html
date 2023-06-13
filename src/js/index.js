alert("ola! aprovite os pokemon.");
//obijetivo 1 :modo escuro 
// Passo 1: Linkar o modelo do botao do HTML com o JS
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// Passo 2: Selecionar a crase
const body = document.querySelector("body");
const trocaImagemBotao = document.querySelector(".imagem-botao")
  //passo 3 reconhecer o botão
  botaoAlterarTema.addEventListener("click", () => {
   
   // passo 6 desligar modo escuro
  
     const modoEscuroAtivo = body.classList.contains("modo-escuro")
     
     body.classList.toggle("modo-escuro")
     if(modoEscuroAtivo){
        body.classList.remove("modo-escuro");
        trocaImagemBotao.setAttribute("src","./src/imagem/sun.png")
}else{
  body.classList.add("modo-escuro");
  trocaImagemBotao.setAttribute("src","./src/imagem/moon.png")
}
});
