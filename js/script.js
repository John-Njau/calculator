// Calculator business logic
// parsing ints
// simple prompt claculator 

let Calculator = document.getElementById('calc');

var add = (num1, num2) =>{
    // var num1 = parseInt(prompt("Enter the first number"));
    // var num2 = parseInt(prompt("Enter the second number"));
    return num1 + num2;
};
// alert(add());

var subtract = (num1, num2) =>{
//     var num1 = parseInt(prompt("Enter the first number"));
//     var num2 = parseInt(prompt("Enter the second number"));
    return num1 - num2;
};
// alert(subtract());

var multiply = (num1, num2) =>{
//     var num1 = parseInt(prompt("Enter the first number"));
//     var num2 = parseInt(prompt("Enter the second number"));
    return num1 * num2;
};
// alert(multiply());

var divide = (num1, num2) =>{
    // var num1 = parseInt(prompt("Enter the first number"));
    // var num2 = parseInt(prompt("Enter the second number"));
    return num1 / num2;
};
// alert(divide());



var bodyMassIndex = (weight, height) => {
    var height = parseInt(prompt("Enter your weight(kgs)"));
    var height = parseInt(prompt("Enter your height(kgs)"));
    return weight / height;
};
