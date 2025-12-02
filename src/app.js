/**
 * Función simple para sumar dos números.
 * @param {number} a 
 * @param {number} b 
 * @returns {number} La suma de a y b.
 */
function suma(a, b) {
    return a + b;
}

/**
 * Agrega un nuevo <li> a la lista con id="lista".
 * @param {string} texto - El texto del nuevo ítem de la lista.
 */
function agregarItem(texto) {
    const lista = document.getElementById('lista');
    if (lista) {
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = texto;
        lista.appendChild(nuevoItem);
        console.log(`Item agregado: ${texto}`);
    } else {
        console.error('El elemento con id="lista" no fue encontrado.');
    }
}

// Exportar la función para que pueda ser utilizada en los tests
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { suma };
}

// Mensaje de consola
console.log("App lista");