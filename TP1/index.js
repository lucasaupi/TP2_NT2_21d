// change repository
const fs = require('fs');
const condicion = 'number';

function crearNuevoArray(array, condicion) {
    if (!['string', 'number', 'boolean'].includes(condicion)) {
        return "Error condición no válida";
    }

    const nuevoArray = array.filter(elemento => typeof elemento === condicion);

    const arrayOrdenado = [...new Set(nuevoArray)].sort((a, b) => a > b ? 1 : -1);

    if (arrayOrdenado.length > 0) {
        const datos = arrayOrdenado.join(', ');
        fs.writeFileSync('resultado.txt', datos);
        console.log('Nuevo array guardado');
    } else {
        console.log('Array vacío');
    }
}

const array = [2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false];
crearNuevoArray(array, condicion);
