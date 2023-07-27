function boasVindas() {
let nome;
let sobrenome;

nome = prompt("Digite o seu nome", "Digite aqui");
sobrenome = prompt("Digite o seu sobrenome", "Digite aqui");

alert("Olá"+" "+nome +" "+sobrenome);
}

function somarNumero(){
let numero1, numero2, soma;

numero1 = prompt("Digite um nº");
numero2 = prompt("Digte outro nº");

soma = parseInt(numero1)+parseInt(numero2);

alert (numero1 + " + " + numero2 + " = " +soma);
}


function subtrairNumero(){
let numero1, numero2, subtraçao;
    
numero1 = prompt("Digite um nº");
numero2 = prompt("Digte outro nº");
    
subtraçao = parseInt(numero1)-parseInt(numero2);
    
alert (numero1 + " - " + numero2 + " = " +subtraçao);
}


function multiplicarNumero(){
let numero1, numero2,multiplicaçao ;
        
numero1 = prompt("Digite um nº");
numero2 = prompt("Digte outro nº");
        
multiplicaçao = parseInt(numero1)*parseInt(numero2);
        
alert (numero1 + " x " + numero2 + " = " +multiplicaçao );
}


function dividirNumero(){
let numero1, divisao;
let numero2=0;
numero1 = prompt("Digite um nº");
while(numero2==0){
alert("digite um nº diferente de zero");
numero2 = prompt("Digte outro nº");
}
if(numero2!=0){
divisao = parseInt(numero1)/parseInt(numero2);
alert (numero1 + " / " + numero2 + " = " +divisao);
}else{
}
alert ("não é possível fazer a operação");
}