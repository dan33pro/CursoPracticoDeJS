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
