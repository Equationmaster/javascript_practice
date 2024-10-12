const hexbtn = document.querySelector('.hex-bttn');
const hexcolorvalue = document.querySelector('.hex-color-value');
const hexcolorcontainer = document.querySelector('.hex-color-generator-container');
const hexcopy = document.querySelector('.hex-copy');
hexbtn.addEventListener('click',() => {
    let characters = '0123456789ABCDEF';
    let hexcoloroutput = "#";
    for(let i = 0,charslength = characters.length;i<6;++i){
        hexcoloroutput += characters.charAt(Math.floor(Math.random()*charslength));
    }
    hexcolorvalue.textContent = `${hexcoloroutput}`;
    hexcolorcontainer.style.backgroundColor = `${hexcoloroutput}`;
    hexbtn.style.color = `${hexcoloroutput}`;
    hexcopy.style.color = `${hexcoloroutput}`;
});

// rgb color generator

const rgbbtn = document.querySelector('.rgb-bttn');
const getredinput = document.querySelector('#red');
const getgreeninput = document.querySelector('#green');
const getblueinput = document.querySelector('#blue');
const rgbcopy = document.querySelector('.rgb-copy');
const rgbcolorcontainer = document.querySelector('.rgb-color-generator-container');
rgbbtn.addEventListener('click',() =>{
    let r = getredinput.value;
    let g = getgreeninput.value;
    let b = getblueinput.value;
    rgbcolorcontainer.style.backgroundColor = `rgb(${r},${g},${b})`;
    rgbbtn.style.color = `rgb(${r}, ${g}, ${b})`;
    rgbcopy.style.color = `rgb(${r}, ${g}, ${b})`;

});


//copy to clipboard

function hexkarocopy(){
    navigator.clipboard.writeText(hexcolorvalue.textContent);
    alert('Hex color copied to clipboard');
}
function rgbkarocopy(){
    navigator.clipboard.writeText(rgbcolorcontainer.style.backgroundColor);
    alert('RGB color copied to clipboard');
}

rgbcopy.addEventListener('click',rgbkarocopy);
hexcopy.addEventListener('click', hexkarocopy);



