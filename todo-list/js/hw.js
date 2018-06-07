const listBlock = document.querySelector('.list-block');
const inputs = listBlock.querySelectorAll('input[type="checkbox"]');
const output = document.querySelector('output');

function checkValue() {
    output.value = `${Array.from(inputs).filter(item => item.checked).length} из ${inputs.length}`;
    if (Array.from(inputs).filter(input => input.checked).length === inputs.length) {
        listBlock.classList.toggle('complete');
    }
}

for (const input of inputs) {
    input.addEventListener('click', checkValue);
}

checkValue();
