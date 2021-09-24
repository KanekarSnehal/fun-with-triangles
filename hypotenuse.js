const sideInput=document.querySelectorAll(".side-input");
const hypotenuseButton=document.querySelector("#hypotenuse-button");
const output=document.querySelector("#output");
const errorBox=document.querySelector("#error-box");

hypotenuseButton.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse()
{
    const side1=Number(sideInput[0].value);
    const side2=Number(sideInput[1].value);

    if(side1>0 && side2>0)
    {
        errorBox.style.display="none";
        output.style.display="block";
        const sumOfSquares =calculateSumOfSquares(side1,side2);
        const lengthOfHypotenuse=Math.sqrt(sumOfSquares);
        output.innerText="The hypotenuse of the triangle is "+lengthOfHypotenuse;
    }
    else
    {
        errorBox.style.display="block";
        output.style.display="none";
        errorBox.innerText="**Please enter all inputs and all inputs must be greater than zero**"
    }
    
}

function calculateSumOfSquares(a,b)
{
    const sumOfSquares=a*a+b*b;
    return sumOfSquares;
}