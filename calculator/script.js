const tela = document.querySelector(".tela");
const numericos = document.querySelector(".numericos");
const operacoes = document.querySelector(".operacoes");

let caracteres = {
  "0" : 0,
  "1" : 1,
  "2" : 2,
  "3" : 3,
  "4" : 4,
  "5" : 5,
  "6" : 6,
  "7" : 7,
  "8" : 8,
  "9" : 9,
  "+" : function(a, b){
    return a + b;
  },
  "-" : function(a, b){
    return a - b;
  },
  "*" : function(a, b){
    return a * b;
  },
  "/" : function(a, b){
    return a / b;
  },
};

tela.textContent = '';

numericos.addEventListener("click", function(e){
  if(tela.textContent.length < 36 && (e.target.attributes.class.value === "num" || e.target.attributes.class.value === "num zero")){
    tela.textContent = tela.textContent + e.target.textContent;
  }
});

operacoes.addEventListener("click", function(e){
  if(e.target.textContent == "="){
    operacao();
    console.log("gerando resultado da expressao");
  }else if(tela.textContent.length < 36){
    tela.textContent = tela.textContent + " " + e.target.textContent + " ";
  }
});

function operacao(){
  let separados = tela.textContent.split(" ");
  separados.forEach((num) => console.log(num));
  tela.textContent = '';
}
