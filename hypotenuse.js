const sideInput=document.querySelectorAll(".side-input");
const hypotenuseButton=document.querySelector("#hypotenuse-button");
const output=document.querySelector("#output");

hypotenuseButton.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse()
{
    const sumOfSquares =calculateSumOfSquares(Number(sideInput[0].value),Number(sideInput[1].value));
    const lengthOfHypotenuse=Math.sqrt(sumOfSquares);
    output.innerText="The hypotenuse of the triangle is "+lengthOfHypotenuse;
}

function calculateSumOfSquares(a,b)
{
    const sumOfSquares=a*a+b*b;
    return sumOfSquares;
}