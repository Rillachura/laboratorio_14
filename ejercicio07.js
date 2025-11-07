let angulo = parseFloat(prompt("Ingrese un angulo: "))

function gradosARadianes(grados) {
    let radianes = grados*(Math.PI/180);
    let seno = Math.sin(radianes);
    let coseno = Math.cos(radianes);

    console.log(`=== Conversión de Grados a Radianes ===`);
    console.log(`Grados: ${grados}`);
    console.log(`Radianes: ${radianes}`);
    console.log(`Seno: ${seno}`);
    console.log(`Coseno: ${coseno}`);

    return radianes;
}
function radianesAGrados(radianes) {
    let grados = radianes*(180/Math.PI)

    console.log(`=== Conversión de Radianes a Grados ===`);
    console.log(`Radianes: ${radianes}`);
    console.log(`Grados: ${grados.toFixed(4)}`);

    return grados;
}

let rad = gradosARadianes(angulo);
radianesAGrados(rad);