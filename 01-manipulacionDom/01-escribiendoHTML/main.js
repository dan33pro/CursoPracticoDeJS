//      querySelector()

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

//      innerHTML

function manipulandoInner({
    obj = h1, 
    inner = 'Dale tu propio texto',
} = {}) {
    obj.innerHTML = inner;
}

manipulandoInner({inner: 'Manipulando :)'});
manipulandoInner({obj: text1, inner: 'Así lo hacemos.'});


//      innerText

function manipulandoInnerText({
    obj = h1, 
    inner = 'Dale tu propio texto',
} = {}) {
    obj.innerText = inner;
}

//      getAttribute() y setAttribute()

console.log(text1.getAttribute('class'));
text1.setAttribute('class', 'tx');
console.log(text1.getAttribute('class'));

//      classList().add y classList.remove()

text1.classList.remove('tx');
console.log(text1.getAttribute('class'));
text1.classList.add('texto');
console.log(text1.getAttribute('class'));

//      document.createElement() y append()

const mySpan = document.createElement('span');
const myP = document.createElement('p');
const myImg = document.createElement('img');

myImg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Nv21u0dpmDrVcLFvaiKjYbmitTarD_0gyg&usqp=CAU')
myP.innerText = 'Si queremos agregar una imagen';
text2.innerHTML = '';
text2.append(myP, myImg);

console.log(myP, mySpan);


