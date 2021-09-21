const input=document.querySelectorAll(".input");
const areaButton=document.querySelector("#area-button");
const output=document.querySelector("#output");

areaButton.addEventListener("click", calculateArea);

function calculateArea()
{
    const area=calculateFormule(Number(input[0].value),Number(input[1].value));
    output.innerText="Area of triangle is "+area;
}

function calculateFormule(base,height)
{
    const area=1/2*(base*height);
    return area;
}