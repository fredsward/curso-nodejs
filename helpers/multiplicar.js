const fs = require('fs');
var colors = require('colors');

const crearArchivo = (base = 10, listar = false, hasta = 10) => {

    try {
        return new Promise((reject, resolve) => {
            let salida = "";

            for (let index = 1; index <= hasta; index++) {
                salida += base * [index] + '\n';
            }
            console.log(salida.rainbow);

            fs.writeFileSync('tabla.txt', salida, (err) => {
                if (err) throw err;
                resolve("archivo creado");
            });

        });
    } catch (err) {
        throw err;
    }

}

//exporta apuntanto a la funcion flecha
module.exports = {
    crearArchivo
}