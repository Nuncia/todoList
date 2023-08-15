let tareas = [{
    id: 110,
    nombre: 'Comprar en el super',
    realizada: false
  },
  {
    id: 22,
    nombre: 'Pintar el baño',
    realizada: false
  },
  {
    id: 3,
    nombre: 'Ir al trabajo',
    realizada: false
  }];

const input = document.getElementById('input');
const boton = document.getElementById('boton');
const realizadas = document.getElementById('realizadas');
const total = document.getElementById('total');
const listaTareas = document.getElementById('listaTareas');

const generaId = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const agregarTarea = () => {
    const nuevaTarea = {id: generaId(), nombre: input.value, realizada: false};
    tareas.push(nuevaTarea);
    cargarListado();
};   

const borrar = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === id);
    tareas.splice(index,1);
    cargarListado();
    contarRealizadas();
};

const contarRealizadas = () => {
    console.log(tareas);
    let totalRealizadas = 0;
    tareas.forEach((tarea) => {
        if(tarea.realizada === true){
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
                    <td><input type="checkbox" checked:"${tarea.realizada}" onclick="modificarRealizada(${tarea.id})"></td>
                    <td><button class="btn btn-success" onclick="borrar(${tarea.id})">Eliminar</button></td>
                </tr>`
    })
    listaTareas.innerHTML = html;
    input.value = '';
    total.textContent = tareas.length;
};

const modificarRealizada = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === id);
    if(tareas[index].realizada === false){
        tareas[index].realizada = true;
    }
    else{
        tareas[index].realizada = false
    }
    contarRealizadas();
}

cargarListado();

// checkRealizada.addEventListener('click',() => modificarRealizada())
boton.addEventListener('click', () => agregarTarea());