//Ejercicio 1
console.log("Ejercicio 1");

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





//Ejercicio 2
console.log("Ejercicio 2");

function chunk(list, step) {
    if (step <= list.length) {
        const result = []
        let temp = [];
        for (let i = 0; i < list.length; i = i + step) {
            for (j = i; j < step + i; j++) {
                if (j < list.length) {
                    temp.push(list[j]);
                }
            }
            result.push(temp);
            temp = [];
        }
        return result;
    }
    return list;
}

var data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]


function uniqueChars(cadena) {
    var cadenaAuxiliar = cadena;
    var unicos = "";
    var arrayCadena=[];
    for (var i = 0; i < cadenaAuxiliar.length; i++) {
        if (unicos.indexOf(cadenaAuxiliar.charAt(i)) == -1) {
            unicos += cadenaAuxiliar[i];
        }
    }

    for (var i = 0; i < unicos.length; i++) {
        arrayCadena[i]=unicos[i];
    }

    return arrayCadena;
}

function arrayToObject(key,value) {
    var obj = {};
  
    for(var i = 0; i < key.length; i++){
        obj[key[i]] = value[i];
    }
  
    return obj;
  }



function frecuencia(cadena) {
    var unicos = uniqueChars(cadena).sort();
    var contador = 0;
    var lista = [];
    var conteo = [];

    for (var i = 0; i < unicos.length; i++) {
        lista.push(unicos[i]);
        for (var j = 0; j < cadena.length; j++) {
            if (unicos[i] == cadena[j]) {
                contador++;
            }
        }
        conteo.push(contador);
        contador = 0;
    }


    var resultado=arrayToObject(lista,conteo);
    console.log('Test :', cadena);
    console.log(resultado);

}

frecuencia('ccccbbbaaa'); // {a: 3, b: 3, c: 3}
frecuencia('www.bedu.org'); // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
frecuencia('john.doe@domain.com'); // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}

