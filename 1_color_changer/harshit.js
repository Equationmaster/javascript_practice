const btns = document.getElementsByClassName('button');
const body = document.getElementsByTagName('body')[0];
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e) {
        body.style.backgroundColor = e.target.id;
    });
}

