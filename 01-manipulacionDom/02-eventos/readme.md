# Manipulación del DOM

## Eventos

Cunado trabajamos com JS una de las necesidades es escuchar cuales son los cambios que se reciben en nuestro HTML, de que forma interactuan nuestros usuarios, para esto es que se trabaja con eventos.

Vamos a estar trabajando con este HTML

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
            <input type="text" id="num1" placeholder="Numeró 1" onchange="agregarNum()">
            <input type="text" id="num2" placeholder="Numeró 2" onchange="agregarNum()">
        </div>
        <button id="btnSuma" onclick="calcular()">Suma</button>
        <script src="./main.js"></script>
    </div>
</body>

</html>
```

Como puedes ver en nuestros HTML estamos trabajando con dos atributos que nos permitiran hacer cambios cuando lo queramos.

- onclick()
- onchange()

> Estos atributos son solo una de las muchas formas de poder trabajar con eventos

### onchange()

Esta atributo de HTML nos permite ejecutar cierta acción con JS, como puede ser llamar a una función, esto se hace solo cuando el elemento tenga cambios, como un cambio de valor en un imput.

Lo usamos para actualizar la operación que queremos realizar.

```html
<input type="text" id="num1" placeholder="Numeró 1" onchange="agregarNum()">
<input type="text" id="num2" placeholder="Numeró 2" onchange="agregarNum()">
```

### onclick()

Este atributo también nos permite ejecutar cierta acción con JS, pero solo cuando se haga click en nuestro elémento.

Lo usamos para mostrar el resultado de nuestra operación cuando sea necesario.

```html
<button id="btnSuma" onclick="calcular()">Suma</button>
```

Y hacemos la respectiva lógica con el siguiente codigo JS

```javascript
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const resultado = document.querySelector('.salida');

let num1 = 0;
let num2 = 0;

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
