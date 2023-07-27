
function nParImpar(){
    let num = document.getElementById("nDigitado").value;

    if (num % 2 == 0) {
        alert("Seu número é par")
    }else{
        alert("Seu número é impar")
    }
}
let valor1 = parseInt(document.getElementById("nValor1").value);
let valor2 = parseInt(document.getElementById("nValor2").value);
let operacao = document.getElementById("pOperacao").value;
let resultado;
function calculador(){
    switch (operacao) {
        case "+":
            resultado = valor1+valor2;
            break;
         case "-":
            resultado = valor1-valor2;
            break;  
            case "*":
            resultado = valor1*valor2;
            break; 
            case "+":
            resultado = valor1+valor2;
            break; 
            default:
                break;
    }
}