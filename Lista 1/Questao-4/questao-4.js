let base = parseInt(prompt("Insira o número:"))
let expoente = parseInt(prompt("Insira o expoente:"))

if(( base == 0) && ((expoente > 0)) ){
    alert(`${'A valor '+ base + ' com potencia '+ expoente + ' é igual a: ' + 0}`)
}
if((expoente < 0)){
    alert("O valor do expoente tem que ser maior ou igual a 0")
}else if(expoente == 0){
    alert(`${'A valor '+ base + ' com potencia '+ 0 + ' é igual a: ' + 1}`)

}else{
    let resultado = 1
    for(let i = 1; i <= expoente; i++){
        resultado *= base
    } 
    alert(`${'A valor '+ base + ' com potencia '+ expoente + ' é igual a: ' + resultado}`)
}