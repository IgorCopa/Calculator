const keys = document.querySelectorAll('.key');
const inputElement = document.querySelector('.input-screen');
const clearAll = document.querySelector('.clear');
const equal = document.querySelector('.equal-sign');

for(let i = 0; i<keys.length; i++){
    keys[i].addEventListener('click', () => {
        let character = keys[i].getAttribute('data-char');
        inputElement.value += character;
    });
}

equal.addEventListener('click', () => {
    if(inputElement.value === ''){
        alert('No calculation was required.');
    } else {
        let inpElem = inputElement.value;
        inpElem.toString();
        inputElement.value = eval(inpElem);
    }
});

clearAll.addEventListener('click', () => {
    inputElement.value = '';
});