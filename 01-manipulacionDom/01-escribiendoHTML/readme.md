# Manipulación del DOM

## Escribiendo en HTML

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

[========]

### innerHTML

Es una propiedad de nuestros objetos HTML qué contiene lo que esta dentro del elemento.

Así que si quisieramos cambiarla, sería así:

```javascript
const h1 = document.querySelector('h1');
const text1 = document.querySelector('.text');
const text2 = document.querySelector('#text');
const input = document.querySelector('input');

function manipulandoInner({
    obj = h1, 
    inner = 'Dale tu propio texto',
} = {}) {
    obj.innerHTML = inner;
}

manipulandoInner({inner: 'Manipulando :)'});
manipulandoInner({obj: text1, inner: 'Así lo hacemos.'});
```

Estamos trabajando el mismo HTML que en el ejemplo anterior.

> Y no solo nos permite agragar texto dentro del elemento si no que también etiquetas HTML.

Sin embargo es importante entender cuales son las implicaciones de seguridad que trae usar esto.

[========]

### innerText

Al contrario que la propiedad anterior, esta agregará lo que le pasemos dentro del elemento, pero solo como texto.

Sería así

```javascript
function manipulandoInnerText({
    obj = h1, 
    inner = 'Dale tu propio texto',
} = {}) {
    obj.innerText = inner;
}
```

> Proteginedo nuestra estructura.

[========]

### getAttribute() y setAttribute()

Nos permiten obtener el valor de nuestros atributos del elemento HTML y modificarlos de ser necesario.

```javascript
console.log(text1.getAttribute('class'));
text1.setAttribute('class', 'tx');
console.log(text1.getAttribute('class'));
```

[========]

### classList().add y classList.remove()

Estos métodos son especificos para los atributos class de nuestros elementos HTML y nos permiten tanto obtener agragar clases como eliminarlas.

De la siguiente forma:

```javascript
text1.classList.remove('tx');
console.log(text1.getAttribute('class'));
text1.classList.add('texto');
console.log(text1.getAttribute('class'));
```

[========]

### createElement() y append()

El primero nos permite crear cualquier elemento HTML que necesitemos, en cambio el segundo nos permite agregar como hijos los elemntos que necesitemos a un elemento HTML.

```javascript
const mySpan = document.createElement('span');
const myP = document.createElement('p');
const myImg = document.createElement('img');

myImg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Nv21u0dpmDrVcLFvaiKjYbmitTarD_0gyg&usqp=CAU')
myP.innerText = 'Si queremos agregar una imagen';
text2.innerHTML = '';
text2.append(myP, myImg);

console.log(myP, mySpan);
```
