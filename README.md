# CursoPracticoDeJS

Este es la continuación del curso básico de JS, y a pesar de que son conceptos que ya manejo, se retoma el desarrollo de una maquetación que se trabajo antes :)

[========]

## Manipulación del DOM

Cundo usamos con JS lo que nos interesa es modificar o obtener el contenido de nuestro HTML, para eso nosotros podemos usar varios metodos como lo son:

### querySelector()

Este método nos permite obtener nuestros elementos HTML para manipularlos desde JS, puede ser con:

- Tipo
- Clase
- ID

Un ejemplo de esto sería el siguiente, con este HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulación del DOM básica</title>
</head>

<body>
    <h1>Manipulación del DOM básica</h1>
    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, at labore neque quod rerum
        nostrum nihil! Hic, non voluptatum. Praesentium quam qui velit dolores sit! Corrupti quos laboriosam libero aut.
    </p>
    <p id="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sed ut voluptates quisquam illo dolores
        blanditiis vel deleniti, voluptatum aliquid veritatis nihil illum cupiditate fugiat excepturi neque corporis in
        molestias!</p>
    <input type="text" placeholder="Escribe">
    <script src="./main.js"></script>
</body>

</html>
```

Podemos obtener nuestros elementos con JS así

```javascript
const h1 = document.querySelector('h1');
const text1 = document.querySelector('.text');
const text2 = document.querySelector('#text');
const input = document.querySelector('input');

console.log(h1);
console.log({
    h1,
    text1,
    text2,
});

function valueInput() {
    return input.value;
}
```

También existen otros métodos para manipular el DOM como lo son:

- getElementById()
- getElementByClassName()

Qué nos permiten lo mismo de forma más especifica.
