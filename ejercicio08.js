function generarContrasena() {
    let contrasena = "";

    for (let i = 0; i < 6; i++) {
        let digito = Math.floor(Math.random() * 10);
        contrasena += digito;
    }

    return contrasena;
}

console.log("Contraseña generada:", generarContrasena());