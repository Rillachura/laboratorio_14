let precio = parseFloat(prompt("Ingrese precio del producto: "));
let redAbajo = Math.floor(precio);
let redArriba = Math.ceil(precio);
let redNormal = Math.round(precio);

console.log("Precio original: ", precio);
console.log("Redondeo hacia abajo: ", redAbajo);
console.log("Redondeo hacia arriba: ", redArriba);
console.log("Redondeo normal: ", redNormal);