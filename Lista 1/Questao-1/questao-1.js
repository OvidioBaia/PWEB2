let quantidade = parseInt(prompt("Insira a quantidade de números ser digtado:"))

if((quantidade < 0)||(quantidade == 0)){
    alert("O valor tem que ser positivo e diferente de zero.")
}
else {   
let numeros = []
let resultado = []
    for(let i = 0; i < quantidade; i++){
        let numero = parseInt(prompt("Insira o numero " + (i + 1)))
        numeros.push(numero)
    }
    for(let i = 0; i < quantidade; i++){
        resultado.push(numeros[i] * numeros[i] )
    }
    alert(`${'Numeros recebidos ' +  numeros +' e seus quadrados são: ' +  resultado}`)
}