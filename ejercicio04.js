let min = parseInt(prompt("Imgrese minimo: "));
let max = parseInt(prompt("Imgrese maximo: "));

function numeroAleatorio(min, max) {
    let numAletario = Math.floor(Math.random()*(max-min+1))+min;
    return numAletario;
}

console.log(numeroAleatorio(min, max));