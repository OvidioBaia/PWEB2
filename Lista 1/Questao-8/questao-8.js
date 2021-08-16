let numero = parseInt(prompt("Insira o número:"))

function calcularFatorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * calcularFatorial(n - 1);
}

if(numero < 0) {
    alert(`${'Não existe fatorial de um número não natural'}`)
}
else if(numero == 0 || numero == 1 ){
    alert(`${'O fatorial de '+ numero + ' é '+ ' é igual a: ' + 1}`)
}
else {
    const fatorial = calcularFatorial(numero)
    alert(`${'O fatorial de '+ numero + ' é '+ ' é igual a: ' + fatorial}`)
}
