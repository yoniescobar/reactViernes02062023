document.addEventListener("DOMContentLoaded", function() { 

    const btnEjecutar = document.getElementById("btnEjecutar");
    const res = document.getElementById("res");

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const edad = document.getElementById("edad");

    btnEjecutar.addEventListener("click", () => {
        res.innerHTML = `Hola ${nombre.value} ${apellido.value}, tienes ${edad.value} años.`;

        if (edad.value >= 18) {
            res.innerHTML += "<br> Eres mayor de edad.";
        }


        //cantidad de caracteres de el nombre 
        res.innerHTML += `<br> Tu nombre  ${nombre.value} tiene  ${nombre.value.length} caracteres.`;
        //cantidad de caracteres de el apellido
        res.innerHTML += `<br> Tu apellido  ${apellido.value} tiene  ${apellido.value.length} caracteres.`; 

    });


    

    operacion.addEventListener("change", () => {
        const  operacion = document.getElementById("operacion");
        const  numero1 = document.getElementById("num1");
        const  numero2 = document.getElementById("num2");
        const resultado = document.getElementById("resultado");

        switch (operacion.value) {
            case "1":
                resultado.innerHTML = `La suma de ${numero1.value} + ${numero2.value} es ${parseFloat(numero1.value) + parseFloat(numero2.value)}`;
                break;
            case "2":
                resultado.innerHTML = `La resta de ${numero1.value} - ${numero2.value} es ${parseFloat(numero1.value) - parseFloat(numero2.value)}`;
                break;
            case "3":
                resultado.innerHTML = `La multiplicacion de ${numero1.value} * ${numero2.value} es ${parseFloat(numero1.value) * parseFloat(numero2.value)}`;
                break;
            case "4":

                if (numero2.value == 0) {
                    resultado.innerHTML = "No se puede dividir por cero";
                    break;
                }
                resultado.innerHTML = `La division de ${numero1.value} / ${numero2.value} es ${parseFloat(numero1.value) / parseFloat(numero2.value)}`;
                break;
            default:
                resultado.innerHTML = "No se ha seleccionado ninguna operacion";
                break;
        }
        
    });




});