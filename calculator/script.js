const tela = document.querySelector(".tela");
const numericos = document.querySelector(".numericos");
const operacoes = document.querySelector(".operacoes");
const dot = document.querySelector(".num.dot");

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

let simbolos = {
  "+" : true,
  "-" : true,
  "*" : true,
  "/" : true,
  "" : true,
  "NaN" : true,
};

tela.textContent = '';

numericos.addEventListener("click", function(e){
  if(tela.textContent.length < 36 && (e.target.attributes.class.value === "num" || e.target.attributes.class.value === "num zero")){
    tela.textContent = tela.textContent + e.target.textContent;
  
  }else if(tela.textContent.length < 36 && e.target.attributes.class.value === "num dot"){
    dot.removeEventListener("click", dotFunction);
  }
});

function dotFunction(e){
  tela.textContent = tela.textContent + e.target.textContent;
}
dot.addEventListener("click", dotFunction);

operacoes.addEventListener("click", function(e){
  if(e.target.textContent == "="){
    tela.textContent = operacao();
  }else if(e.target.textContent == "C"){
    tela.textContent = '';
  }else if(tela.textContent.length < 36){
    tela.textContent = tela.textContent + " " + e.target.textContent + " ";
  }
  dot.addEventListener("click", dotFunction);
});

document.addEventListener("keydown", function(e){
  if(e.key === "Backspace"){
    tela.textContent = tela.textContent.slice(0, tela.textContent.length-1);
  }else if(tela.textContent.length < 36 && (e.key in caracteres && !(e.key in simbolos))){
    tela.textContent = tela.textContent + e.key;
  }
});

function operacao(){
  let separados = tela.textContent.split(" ");
  if(separados.length == 0){
    return "";
  }

  // passamos da esquerda para a direita realizando a operação entre o numero da expressao e o 
  // valor atual da expressao. É necessário fazer uma passada na expressão checando se ela é válida
  // checa se a expressão é válida
  if(simbolos[separados[0]] === true){
    console.error("Started the expression with an operator.");
    return ""; 
  }else if(separados[0] == "ERROR"){
    return "";
  }
  for(let i=1;i<separados.length;i++){
    if(simbolos[separados[i]] === true && simbolos[separados[i+1]] === true){
      console.error("Invalid operation.");
      return ""; 
    }
    if(separados[i] == 0 && separados[i-1] === "/"){
      console.error("Tried to divide by zero.");
      return "";
    }
  }

  // agora sabemos que a expressao não é inválida devido as posições dos operadores
  let resultado = caracteres[separados[1]](parseFloat(separados[0]), parseFloat(separados[2]));
  for(let i=3;i<separados.length-1;i+=2){
    let dir = parseFloat(separados[i+1]);
    if(dir === 0 && separados[i] == "/"){
      console.error("Tried to divide by zero.");
      return "";
    }
    resultado = caracteres[separados[i]](resultado, dir);
  }

  //tela.textContent = resultado;
  return resultado;
}
