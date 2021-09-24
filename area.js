const input = document.querySelectorAll(".input");
const areaButton = document.querySelector("#area-button");
const output = document.querySelector("#output");
const errorBox=document.querySelector("#error-box");

areaButton.addEventListener("click", calculateArea);

function calculateArea() {
    const base = Number(input[0].value);
    const height = Number(input[1].value);
    if (base > 0 && height > 0) 
    {
        errorBox.style.display="none";
        output.style.display="block";
        const area = calculateFormule();
        output.innerText = "Area of triangle is " + area;
    }
    else
    {
        errorBox.style.display="block";
        output.style.display="none";
        errorBox.innerText="**Please enter all inputs and all inputs must be greater than zero**"
    }

}

function calculateFormule(base, height) {
    const area = 1 / 2 * (base * height);
    return area;
}