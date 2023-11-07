let display = document.getElementById('display');
display.value='0'
function agregar_valor(value) {
    const ultimoCaracter = display.value.charAt(display.value.length - 1);
    if (display.value === '0' && value === '0') {
        return;
    }

    if (ultimoCaracter === '+' || ultimoCaracter === '-' || ultimoCaracter === '*' || ultimoCaracter === '/') {
        if (value === '0') {
            return;
        }
    }

    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function calcula_result() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function limpiar_display() {
    display.value = '0';
}


//ejer de funcion callback 

function suma (a,b,callback){
let c = a +b;
callback(c);
}
//¿Que es el tercer parámetro recibido?   
//?es una funcion callback


//¿En que casos es obligatorio desarrollar este tipo de funciones?
//!para manejar operaciones asincronas y eventos
function miCallback(c) {
    console.log(`el resultado de la suma es: ${c}`);
  }
  
  suma(5, 3, miCallback);
  suma(2, 1, miCallback);
  suma(9, 3, miCallback);

  