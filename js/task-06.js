const inputEl = document.getElementById('validation-input');
inputEl.addEventListener('blur', onBlurBorderColor);

function onBlurBorderColor(event) {
    const inputDataLength = Number(inputEl.dataset.length);
    const inputValueLength = Number(inputEl.value.length);
    // const inputValueLength = Number(inputEl.value.trim().length);

    if (inputValueLength === inputDataLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    if (inputValueLength === 0) {
        inputEl.classList.remove('valid');
        inputEl.classList.remove('invalid');
    }
    if (inputValueLength !== inputDataLength && inputValueLength !== 0) {
        inputEl.classList.add('invalid');
    }
}