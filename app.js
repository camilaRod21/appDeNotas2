
let process = require("process");
let archivo = require('./funcionesDeTareas');
let accion = process.argv[2];
let titulo = process.argv[3];
let estado = process.argv[4];


switch (accion) {
    case 'listar':
        console.log('listado de tareas');
        console.log('--------------------------');
        archivo.listarForEach();
        console.log('---------------------------');

        break;
    case undefined :
        console.log('---------------------------');
        console.log('Atencion - tienes que pasar una accion');
        console.log('las aciones disponibles son: listar');
        console.log('-----------------------------');

        break;

    case 'crear':
        console.log('su tarea fue creada con exito');
        console.log('-----------------------------');
        archivo.crearTareas(titulo,estado);

        break;

    case 'filtrar':
        console.log(`las tareas con estado ${titulo} son:`);
        console.log('---------------------------');
        archivo.filtrarPorEstado(titulo);

        break;
    default:
        console.log('-----------------------------');
        console.log('no entiendo que quieres hacer');
        console.log('las acciones disponibles son: listar');
        console.log('------------------------------');

        break;
}