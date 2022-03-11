// Calculator business logic
// parsing ints
// simple prompt claculator 



document.getElementById('add').addEventListener('click', function(){
    var firstNumber = parseInt(document.getElementById('firstNo').value);
    var secondNumber = parseInt(document.getElementById('secondNo').value);
    let calculator = document.getElementById('calc');

    calculator.innerHTML = firstNumber + secondNumber;
});

document.getElementById('subtract').addEventListener('click', function(){
    var firstNumber = parseInt(document.getElementById('firstNo').value);
    var secondNumber = parseInt(document.getElementById('secondNo').value);
    let calculator = document.getElementById('calc');

    calculator.innerHTML = firstNumber - secondNumber;
});

document.getElementById('multiply').addEventListener('click', function(){
    var firstNumber = parseInt(document.getElementById('firstNo').value);
    var secondNumber = parseInt(document.getElementById('secondNo').value);
    let calculator = document.getElementById('calc');

    calculator.innerHTML = firstNumber * secondNumber;
});

document.getElementById('divide').addEventListener('click', function(){
    var firstNumber = parseInt(document.getElementById('firstNo').value);
    var secondNumber = parseInt(document.getElementById('secondNo').value);
    let calculator = document.getElementById('calc');

    calculator.innerHTML = firstNumber / secondNumber;
});

document.getElementById('bmi').addEventListener('click', function(){
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    let calculator = document.getElementById('calc');

    var bmi = weight / height;
    calculator.innerHTML = bmi;

    if (bmi > 25){
        alert(`Your BMI is ${bmi}. You are in danger`)
    }

});

// console.log( 2 / 4);html
