//utilizar yargs
const argv = require('yargs')
    //el argumento de la b es un objeto
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla'
    })

.option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Multiplo del numero'
    })
    //validar si es numero con check
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero'.red;
        }
        return true
    })
    .argv;

module.exports = argv;