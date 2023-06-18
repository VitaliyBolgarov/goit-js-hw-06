const inputRangeEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

textEl.style.fontSize = `${currentTarget.value}px`;

const fontSizeControl = ({ currentTarget }) =>
    (textEl.style.fontSize = `${currentTarget.value}px`);

// function fontSizeControl(event) {
//     textEl.style.fontSize = event.currentTarget.value + 'px';
// }

inputRangeEl.addEventListener('input', fontSizeControl);