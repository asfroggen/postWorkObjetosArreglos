function deepEqual(a, b) {
    if (typeof a === 'object' && typeof b === 'object') { //las dos variables son objetos?
        aKeys = Object.keys(a).sort(); //ordenar propiedades de objeto a y asignar a aKeys
        bKeys = Object.keys(b).sort(); //ordenar propiedades de objeto a y asignar a bKeys
        if (aKeys.length === bKeys.length) { // objetos mismo tamaño?
            if (aKeys.join('') !== bKeys.join('')) { //Propiedades iguales ?
                return false; //propiedades diferentes regresa false
            }
            for (var i = 0; i < aKeys.length; i++) { //Comparar si alguna propiedad es diferente aplicando recursividad
                if (deepEqual(aKeys[i], bKeys[i]) !== true) { //si una propiedad no tiene valores iguales regresa false
                    return false;
                }
            }
            if (a[aKeys[0]] !== b[bKeys[0]]) { // si el primer elemento del objeto "a" es igual al primero elemento de "b"
                return false; //si la primera propiedad del objeto a es diferente a la primera del b da false
            } else return true; // si son iguales da true

        } else return false; // si no son objetos del mismo tamaño da false

    } else if (a === b) return true; // si ambos son otros tipos de datos diferentes a objetos, hace una comparacion estricta, si son iguales regresa true
    else return false;
}


var john = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { lastName: 'Doe', firstName: 'John' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false

console.log('Test 6:', deepEqual({ firstName: 'John', lastName: 'Doe' }, john)) // true
console.log('Test 7:', deepEqual({ firstName: 'Doe' }, { firstName: 'Karen' })) // false
console.log('Test 9:', deepEqual({ firstName: 'Karen', lastName: 'Doe' }, { lastName: 'Doe', firstName: 'Karen' })) // true