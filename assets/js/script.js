// Elementos del DOM
const input = document.getElementById('input');
const boton = document.getElementById('boton');
const realizadas = document.getElementById('idRealizadas');
const total = document.getElementById('total');
const listaTareas = document.getElementById('listaTareas');

// Arreglo
let tareas =[{
    id: 116922190488,
    nombre:'Ir de compras',
    realizada: false 
},
{
    id: 169221904887,
    nombre: 'Levantarme a las 6',
    realizada: false
},
{
    id:1169221904888,
    nombre: 'Ir a la playa',
    realizada: false
}
];

// Funciones
const generarId = () => {
    const marcaTiempo = Date.now();
    const identificador = `${marcaTiempo}`;
    return identificador;
};

const agregarTarea = () => {
    if(input.value.trim() === ''){
        alert('Debes ingresar una tarea')
    }else{
        const nuevaTarea = {id: generarId(), nombre: input.value, realizada: false};
        tareas.push(nuevaTarea);
        cargarListado();
    }  
};   

const borrar = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === id);
    tareas.splice(index,1);
    cargarListado();
    contarRealizadas();
};

const contarRealizadas = () => {
    let totalRealizadas = 0;
    tareas.forEach((tarea) => {
        if(tarea.realizada){
            totalRealizadas += 1;
        }
    })
    realizadas.textContent = totalRealizadas;
};

const cargarListado = () => {
    let html = '';
    tareas.forEach( (tarea) => {
            html += `<tr>
                        <td class="me-4">${tarea.id}</td>
                        <td class="ms-5">${tarea.nombre}</td>
                        <td><input type="checkbox" ${tarea.realizada ? 'checked' : ''} onclick="modificarRealizada(${tarea.id})" id="${tarea.id}"></td>
                        <td><button class="btn btn-success" onclick="borrar(${tarea.id})">Eliminar</button></td>
                    </tr>`
    })
    listaTareas.innerHTML = html;
    input.value = '';
    total.textContent = tareas.length;
    realizadas.textContent = '';
    contarRealizadas();
};

const modificarRealizada = (id) => {
    const tareaEncontrada = tareas.find((tarea) => tarea.id == id)
    if(tareaEncontrada){
        if(tareaEncontrada.realizada){
            tareaEncontrada.realizada = false;
        } else {
            tareaEncontrada.realizada = true;
        }
    } else{
        alert('tarea no actualizada.')
    }
    contarRealizadas();
};

cargarListado();
boton.addEventListener('click', () => agregarTarea());