let quantidade = parseInt(prompt("Insira a quantidade de números ser digtado:"))

const validarNumeroPrimo = (numero) =>{
    var count = 0
    for(let i = 1; i <= numero; i++){
        if(numero % i == 0){
            count += 1
        }          
    }
    if(count == 2){
        return numero
    }
    else{
        return 0
    }
     
}
if((quantidade < 0)||(quantidade == 0)){
    alert("O valor tem que ser positivo e diferente de zero.")
}
else {   
let numeros = []
let soma = 0
    for(let i = 0; i < quantidade; i++){
        let numero = parseInt(prompt("Insira o numero " + (i + 1)))
        numeros.push(numero)
    }
    for(let i = 0; i < quantidade; i++){
        soma += validarNumeroPrimo(numeros[i])
    }
    alert(`${'A soma dos numeros primo é: ' +  soma}`)
}