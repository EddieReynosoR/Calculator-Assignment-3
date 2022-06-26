let n1, n2;
let plus, min, divi, mult;

function calculator(){
    console.log("Calculating");

    n1 = prompt("Give the first number: ");
    n2 = prompt("Indicate the second number: ");

    sum = Number(n1)+Number(n2);
    min = n1-n2;
    divi = n1/n2;
    mult = n1*n2;

    document.getElementById("results").innerHTML=(`<p> Addition: ${sum} </p>
        <p> Substraction: ${min} </p>
        <p> Multiplication: ${mult} </p>
        <p> Division: ${divi} </p>

    `);
}