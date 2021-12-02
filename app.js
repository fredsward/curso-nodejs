//importar paquete
const fs = require('fs');
//const { argv } = require('process');
const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
//mando a llamar a yargs
const argv = require('./config/yargs');



//console.log(process.argv);
console.log(argv);

//extraer la base, desestructuracion
// const [, , arg3 = 'numero=5'] = process.argv;
// const [, numero = 5] = arg3.split('=');
// console.log(numero);

crearArchivo(argv.b, argv.l, argv.h)
    .then(crearArchivo => console.log(crearArchivo, 'creado'))
    .catch(err => console.log(err));