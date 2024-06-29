const res = document.getElementById('results')
const btn = document.getElementsByTagName('button')[0]

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);

    if (height === '' || isNaN(height)){
        res.innerText = 'Please give a valid height'
    }
    else if (weight === '' || isNaN(weight)){
        res.innerText = 'Please give a valid weight'
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        res.innerText = `Your BMI is ${bmi}`
    }

})