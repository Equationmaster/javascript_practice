let cursor = true;
let speed = 500;

setInterval(() => {
    if (cursor) {
        document.querySelector('.cursor').style.opacity = 0;
        cursor = false;
    } else {
        document.querySelector('.cursor').style.opacity = 1;
        cursor = true;
    }
    
}, speed);
let contentArray = [];


function keylele(e) {
    let keyCode = e.key;
    for (let i = 0; i < keys.length; i++) {
        if (keyCode === 'Backspace') {
            if (contentArray.length > 0) {
                contentArray.pop();
            }
        } else if (keyCode === 'Enter') {
            contentArray.push('<br>');
        } else if (keyCode === ' ') {
            contentArray.push('&nbsp;');
        } else if (e.key.length === 1) {
            contentArray.push(keyCode);
        }
        keys[i].innerHTML = contentArray.join('');
    }
}


document.addEventListener('keydown', keylele);

let keys = document.getElementsByClassName('typed-text');