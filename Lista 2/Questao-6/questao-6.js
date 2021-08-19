const fatores  = (numero) =>{
    let multiplicidade = 0
    var fator = 2
    let fatores = []
    let multiplicidades = []
    while (numero > 1) {
        while (numero % fator == 0) {
            multiplicidade++;
            numero = numero / fator; 
          }
        if (multiplicidade > 0) {
            multiplicidades.push(multiplicidade)
            fatores.push(fator)
            console.log("Fator %d multiplicidade %d\n", fator, multiplicidade)
           //  console.log(`${'fator' + fator, 'multiplicidade' + multiplicidade}`) 
        }
        fator++; 
        multiplicidade = 0;
    }
    console.log("Fatores", fatores);
    console.log("multiplicidade", multiplicidades);

}

let numero = parseInt(prompt("Infome o numero a ser decompor em números primos:"))
if(numero < 0 || numero == 0){
    alert("O valor tem que ser positivo e diferente de zero.")
}else{
    fatores(numero)
}
