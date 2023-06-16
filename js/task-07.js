const inputRangeEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

const fontSizeControl = ({ currentTarget }) =>
    (textEl.style.fontSize = `${currentTarget.value}px`);

inputRangeEl.addEventListener('input', fontSizeControl);