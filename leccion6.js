
const ejemploArray = [25, 'Ford Mustang', true, [1, 0]];

// console.log(ejemploArray[0]); // 25

// ejemploArray[0] = 30;

// console.log(ejemploArray[0]); // 30


//arreglo de autos

const autos = ['Ford', 'Mazda', 'Honda', 'Toyota', 'Nissan', 'Chevrolet', 'Kia', 'Fiat', 'Audi', 'BMW'];

//for: es un ciclo que se repite hasta que se cumpla la condicion que se le da 

// for (let i = 0; i <autos.length ; i++) {   //autos.length
//     console.log(`El auto es   : ${autos[i]}  en la posicion ${i}`);   
// }

// recorrer un arreglo con forEach

//ForEach: es un ciclo que se repite hasta que se cumpla la condicion que se le da

autos.forEach((auto, i) => {
    // console.log(`El auto es   : ${auto.toUpperCase()}  en la posicion ${i}`);
    console.log(`El auto es   : ${auto.toLowerCase()}  en la posicion ${i}`);
    }   
);

console.log('obtener el ultimo elemento del arreglo: ' + autos[autos.length - 1]);
console.log('obtener el ultimo elemento del arreglo  Pop: ' + autos.pop());

console.log('obtener el primer elemento del arreglo: ' + autos[0]);
console.log('obtener el primer elemento del arreglo shift: ' + autos.shift());

autos.push('Mercedes Benz');
autos.unshift('Porsche');


autos.forEach((auto, i) => {
    // console.log(`El auto es   : ${auto.toUpperCase()}  en la posicion ${i}`);
    console.log(`El auto es   : ${auto.toLowerCase()}  en la posicion ${i}`);
    }   
);


//splice: es un metodo que permite eliminar elementos de un arreglo

autos.splice(0, 3); //elimina el primer elemento del arreglo

console.log(autos);


//ciclo while: es un ciclo que evalua una condicion y se repite hasta que la condicion se cumpla

//recorrer un arreglo con while

// let i = -1   //autos.length - 1;  //10-1=9

// while (i >= 0) {
//     console.log(`El auto es   : ${autos[i]}  en la posicion ${i}`);
//     i--;
// }


//recorrer un arreglo con do while

// let i = 10;

// do {
//     console.log(`El auto es   : ${autos[i]}  en la posicion ${i}`);
//     i++;
// } while (i < autos.length); 




