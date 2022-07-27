// querySelector()
// Nos permite obtener nuestros elementos HTML
// por tipo, clase y ID.

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