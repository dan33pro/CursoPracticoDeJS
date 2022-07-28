# Manipulación del DOM

## Eventos addEventListener

Vamos a estar trabajando con este HTML, que es igual al caso anterior pero en lugar de
los atributos onclick() y onchange(), vamos a separar toda la parte lógica del HTML.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulación del DOM básica</title>
    <style>
        body {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        
        .calculadora {
            padding: 20px;
            border: 1px solid black;
            border-radius: 8px;
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.466);
            display: grid;
            grid-template-rows: 4fr 1fr 1fr;
        }

        .salida {
            display: grid;
            grid-template-rows: 1fr 1fr;
            border: 1px solid gray;
            margin: 15px 0;
        }

        .salida div {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .num3 {
            margin: 5px;
            border: 1px solid gray;
        }
        input {
            text-align: center;
        }

        #btnSuma {
            padding: 8px;
            background-color: orange;
            border: 1px solid black;
            font-weight: bold;
            border-radius: 8px;
        }
    </style>
</head>

<body>
    <h1>Manipulación del DOM - Eventos</h1>

    <div class="calculadora">
        <div class="salida"></div>
        <div class="entrada">
            <input type="text" id="num1" placeholder="Numeró 1">
            <input type="text" id="num2" placeholder="Numeró 2">
        </div>
        <button id="btnSuma">Suma</button>
    </div>
    <script src="./main.js"></script>
</body>

</html>
```

### Funcionamiento

Una vez tenemos acceso a los elementos que queremos escuchar
desde JS, entonces, podemos añadirles el comportamiento que
necesitamos que hagan cuando ocurra un evento en especifico,
estos son los dos parametros que enviaremos al método
addEventListener().

Y hacemos la respectiva lógica con el siguiente codigo JS

```javascript
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const resultado = document.querySelector('.salida');
const btn = document.querySelector('#btnSuma');

let num1 = 0;
let num2 = 0;

btn.addEventListener('click', calcular);
input1.addEventListener('change', agregarNum);
input2.addEventListener('change', agregarNum);

function agregarNum() {
    const rpt = document.createElement('div');
    try {
        num1 = Number(input1.value);
        num2 = Number(input2.value);

        if (num1 && num2) {
            rpt.innerHTML =  num1 + '+' + num2;
            resultado.innerHTML = '';
            resultado.append(rpt);
        }

    } catch {
        console.warn('No son números ambos');
    }
}

function calcular() {
    if (num1 && num2) {
        const num3 = document.createElement('div');
        num3.classList.add('num3')
        num3.innerText = (num1 + num2);
        resultado.append(num3);
    }
}
```

Para este caso los eventos que necesitamos escuchar son
click y change, pero seguimos trabajando con las mismas
funciones anteriores.

```javascript
btn.addEventListener('click', calcular);
input1.addEventListener('change', agregarNum);
input2.addEventListener('change', agregarNum);
```

### Trabajo con form

Una de las cosas a tener en cuenta cuando trabajemos con
formularios es su comportamiento por defecto, ya que estos
envian información por medio de la url, así que si tuvieramos
el siguiente código.

```html
<body>
    <h1>Manipulación del DOM - Eventos</h1>

    <form class="calculadora">
        <div class="salida"></div>
        <div class="entrada">
            <input type="text" id="num1" placeholder="Numeró 1">
            <input type="text" id="num2" placeholder="Numeró 2">
        </div>
        <button id="btnSuma">Suma</button>
    </form>
    <script src="./main.js"></script>
</body>
```

Tomaría el ultimo boton por defecto como tipo submit
y este evento por default refresca la pagina y envía la
información del form en la url.

> Esto lo solcionamos fácil cambiado unas lineas en nuestro JS

```javascript
const form = document.querySelector('.calculadora');
fotm.addEventListener('submit', calcular);

function calcular(event) {
    event.preventDefault();
    if (num1 && num2) {
        const num3 = document.createElement('div');
        num3.classList.add('num3')
        num3.innerText = (num1 + num2);
        resultado.append(num3);
    }
}
```

> Aunque simplemente podemos decir que el último boton es de tipo
button y evitarnos todo esto.
