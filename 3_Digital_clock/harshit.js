const clock = document.getElementById('clock');

setInterval(() => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    clock.textContent = time;
    
},1000);