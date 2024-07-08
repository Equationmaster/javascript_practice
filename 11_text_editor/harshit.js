let inputField = document.getElementById('input-field');
const underline = document.querySelector('.btn.underline');
const bold = document.querySelector('.btn.bold');
const italic = document.querySelector('.btn.italic');
const capitalize = document.querySelector('.btn.capitalize');
const lowercase = document.querySelector('.btn.lowercase');
const uppercase = document.querySelector('.btn.uppercase');
const output = document.getElementById('output-field');

let text = '';

underline.addEventListener('click', () => {
    if(text.length === 0){
        text = inputField.value;
    }
    text = `<u>${text}</u>`;
    updateOutput();
});

bold.addEventListener('click', () => {
    if(text.length === 0){
        text = inputField.value;
    }
    text = `<b>${text}</b>`;
    updateOutput();
});

italic.addEventListener('click', () => {
    if(text.length === 0){
        text = inputField.value;
    }
    text = `<i>${text}</i>`;
    updateOutput();
});

capitalize.addEventListener('click', () => {
    if(text.length === 0){
        text = inputField.value;
    }
    text = text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    updateOutput();
});

lowercase.addEventListener('click', () => {
    if(text.length === 0){
        text = inputField.value;
    }
    text = text.toLowerCase();
    updateOutput();
});

uppercase.addEventListener('click', () => {
    if(text.length === 0){
        text = inputField.value;
    }
    text = text.toUpperCase();
    updateOutput();
});

output.addEventListener('click', () => {
    inputField.value = text;
    text = '';
    updateOutput();
});

function updateOutput() {
    output.innerHTML = text;
}


