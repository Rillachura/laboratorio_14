function lanzarDados() {
    let dado1 = Math.floor(Math.random()*6)+1;
    let dado2 = Math.floor(Math.random()*6)+1;
    let suma = dado1+dado2;
    return `=== Lanzamiento de dados ===\n` +
           `Dado1\tDado2\tSuma\n` +
           `${dado1}\t\t${dado2}\t\t${suma}`;
}
console.log(lanzarDados());