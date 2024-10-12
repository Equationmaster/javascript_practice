const stars = document.querySelectorAll('.fa-star-o');
const valueselected = document.querySelector('.selected-rating-value');

let currenttotalselect = -1;

stars.forEach((star,Index) =>{
    star.dataset.rating = Index+1;
    star.addEventListener('mouseover', onoversambhal);
    star.addEventListener('click', onclicksambhal);
    star.addEventListener('mouseleave', onleavesambhal);
})
function onoversambhal(event){
    let currentrating = event.target.dataset.rating;
    if(!currentrating) currentrating = this.dataset.rating;
    else handleupdate(currentrating);
}
function handleupdate(getcurrent){
    for(let i = 0; i < 5;i++){
        if(i < getcurrent){
            stars[i].classList.replace('fa-star-o', 'fa-star');
        }
        else{
            stars[i].classList.replace('fa-star', 'fa-star-o');
        }
    }
}
function onclicksambhal(event){
    const currentrating = event.target.dataset.rating;
    if(!currentrating) currentrating = this.dataset.rating;
    currenttotalselect = currentrating;
    valueselected.textContent = currenttotalselect;
    handleupdate(currenttotalselect);
}
function onleavesambhal(event){
    if(!currenttotalselect) return;
    handleupdate(currenttotalselect);
}