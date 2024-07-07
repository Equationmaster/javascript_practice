document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.content');
    const sections = Array.from(document.querySelectorAll('section'));

    window.addEventListener('scroll',() =>{
        if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 500){
            sections.forEach(section => {
                const newSection = section.cloneNode(true);
                content.appendChild(newSection);
            });
        }
    });

});