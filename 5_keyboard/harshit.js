let keys = document.getElementsByClassName('key');

function keylele(e) {
    let keyCode = e.key;
    for (let i = 0; i < keys.length; i++) {
        keys[i].innerHTML = keyCode;
    }
}

document.addEventListener('keydown', keylele);
