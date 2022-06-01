const fs = require('fs');
const tareas = require('./tareas.json');
let guardar = (dato) => fs.writeFileSync('./tareas.json',JSON.stringify(dato,null,4),'utf-8')  

let archivosTarea = {
    leerJson : tareas,
    listarForEach : () => {
        tareas.forEach((tarea, i) => {
            console.log(`${i+1} - ${tarea.titulo} - ${tarea.estado}`); 
        });
            
        },

    crearTareas: (titulo) => {
    let tarea = {
        titulo,
        estado: "pendiente"
    }
    tareas.push(tarea)
    guardar(tareas)
    return console.log(` 1. ${tarea.titulo} - ${tarea.estado}`);

    },
    filtrarPorEstado : (accion) => {
    let tareasFiltradas = tareas.filter((tarea) => tarea.estado === accion)

        tareasFiltradas.forEach((tarea, i) => {
           return console.log(`${i+1} - ${tarea.titulo} - ${tarea.estado}`); 
        });
    }

}





module.exports = archivosTarea