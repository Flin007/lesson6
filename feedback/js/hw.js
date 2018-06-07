window.addEventListener('DOMContentLoaded', () => {

    const mainForm = document.querySelector('.contentform');
    const output = document.getElementById('output');
    const inputsMainForm = mainForm.querySelectorAll('[name]');
    const btnSend = mainForm.querySelector('.button-contact');
    const btnChange = output.querySelector('.button-contact');
    let selectedField = 0;

    for (let input of inputsMainForm) {
        input.addEventListener('change', (event) => {
            if (event.currentTarget.name !== 'phone' && event.currentTarget.name !== 'email') {
                document.getElementById(event.currentTarget.name).value = event.currentTarget.value;
            }

            event.currentTarget.value !== '' ? selectedField++ : selectedField--;

            if (selectedField === inputsMainForm.length) {
                btnSend.removeAttribute('disabled');
                mainForm.removeAttribute('novalidate');
                mainForm.setAttribute('validate', '');
            } else {
                btnSend.setAttribute('disabled', '');
                mainForm.setAttribute('novalidate', '');
                mainForm.removeAttribute('validate');
            }
        });

        if (input.name === 'zip') {
            input.addEventListener('input', (event) => {
                event.currentTarget.value = event.currentTarget.value.replace(/\D/, '');
            });
        }
    }

    btnSend.addEventListener('click', (event) => {
        event.preventDefault();
        mainForm.classList.add('hidden');
        output.classList.remove('hidden');
    });

    btnChange.addEventListener('click', (event) => {
        event.preventDefault();
        output.classList.add('hidden');
        mainForm.classList.remove('hidden');
    });

});